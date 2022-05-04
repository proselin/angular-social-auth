import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  googleResponse  =  new BehaviorSubject<any>(null)

  constructor() { }

  get googleResInfo(){
    return this.googleResponse.asObservable()
  }

  setGoogleResInfo(value: any){
    return this.googleResponse.next(value)
  }
}
