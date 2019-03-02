import { Injectable } from '@angular/core';
import { Station } from './station';

@Injectable()
export class StationDataService {

  stations: Station[] = [];

  constructor() { }
  
}