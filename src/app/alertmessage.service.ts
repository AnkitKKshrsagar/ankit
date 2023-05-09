import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertmessageService {

  constructor() { }

  callMessageAPI(){
    console.warn("The callMessageAPI Called")
  }
}
