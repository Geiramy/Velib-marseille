export class Station {
    number: number;
    contract_name: string;
    name: string;
    address: string;
    lat: number;
    lng: number;
    banking: boolean;
    bonus: boolean;
    bike_stands: number;
    available_bike_stands: number;
    available_bikes: number;
    status: string;
    last_update: number;

    constructor(
        number: number,
        contract_name: string,
        name: string,
        address: string,
        lat: number,
        lng: number,
        banking: boolean,
        bonus: boolean,
        bike_stands: number,
        available_bike_stands: number,
        available_bikes: number,
        status: string,
        last_update: number,
      ){
        this.number = number;
        this.contract_name = contract_name;
        this.name = name;
        this.address = address;
        this.lat = lat;
        this.lng = lng;
        this.banking = banking;
        this.bonus = bonus;
        this.bike_stands = bike_stands;
        this.available_bike_stands=available_bike_stands;
        this.available_bikes = available_bikes;
        this.status= status;
        this.last_update=last_update;
      }
    }