import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private static URL = "https://api.open-meteo.com/v1/forecast?latitude=52.237049&longitude=21.017532&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m";
  constructor(private http:HttpClient) {}
  getWeather(){
   return this.http.get(WeatherService.URL);
  }
}
