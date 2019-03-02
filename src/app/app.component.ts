import { HttpClient } from '@angular/common/http';

// Ajouter OnInit pour effectuer des opérations à l'initialisation du composant.
import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';

import { Station } from './station';
import { StationDataService } from './station-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Implémenter OnInit
export class AppComponent implements OnInit {


    //requete GET HTTP
    readonly ROOT_URL ="https://api.jcdecaux.com/vls/v1/stations?contract=Marseille&apiKey=c943d2bc58f26bc2b9cccc51479c35222fa8c8f7";
    newstations: Observable<Station[]>;
    stationArray: []
    
    constructor(private stationDataService: StationDataService, private http: HttpClient ){ }
  
    getStations() {
      this.newstations = this.http.get<Station[]>(this.ROOT_URL)
    }

    //liste deroulante


    //station proche

    choix: number;
    stationProche: [];
    /*
    updateMap(stations) {
      this.choix = stations.number;
      console.log('check station ' + this.choix);
      this.perimetre(stations.position.lat, stations.position.lng);
    }
  
    private perimetre(latitude: number, longitude: number): void {
      this.stationProche = [];
      for (const stations of this.stationArray) {
        if (
          Math.abs(stations.position.lat - latitude) < 0.0059 &&
          Math.abs(stations.position.lng - longitude) < 0.00439
        ) {
          this.stationProche.push(stations);
        }
      }
    }
    */
   
// Fonction d'initialisation du composant.
ngOnInit() {
  this.getStations();
  // menu deroulant 
  
  // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
  const myalziarymap = L.map('alziarymap').setView([43.29518166442841, 5.374491954325503], 16);

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'ALZIARY Map'
  }).addTo(myalziarymap);

  
  const myIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png',
    iconSize: [25, 41], // taille de l’icône
    iconAnchor: [25, 41], // point d’ancrage 
  })
  // L.marker([43.29518166442841, 5.374491954325503], {icon: myIcon}).bindPopup('test').addTo(myalziarymap).openPopup();

  this.http.get('https://api.jcdecaux.com/vls/v1/stations?contract=Marseille&apiKey=c943d2bc58f26bc2b9cccc51479c35222fa8c8f7').subscribe((data: any) => {
    data.forEach(Marseille => {
      L.marker([Marseille.position.lat, Marseille.position.lng], {icon: myIcon}).bindPopup('Nom station : '+ Marseille.name + '; nombre de vélo disponibles :' + Marseille.available_bikes).addTo(myalziarymap);
    });
  });

  }
}

