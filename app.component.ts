import "reflect-metadata";
import "zone.js"
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FetchCoordinates } from './fetchcoordinates';

@Component({
  selector: 'app-root',
  providers: [FetchCoordinates],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Google maps app';
  public coordinates: Observable<any>;
  
  constructor(private http: HttpClient, private fetchCoordinates: FetchCoordinates){

    this.http.get('http://localhost:3000/').subscribe(data => {
      console.log("DATA RECIEVED: " + data);
    });

  }
  
  mapCenterLat: number = 33.602448 ;
  mapCenterLng: number = 73.023064;

  lat:number = 0.0000;
  lng:number = 0.0000;
  markers = [];
  latestlat: number;  
  latestlng: number;
  startlat: number;
  startlng: number;
  httprequest: Http
  
  ngOnInit(){
    setInterval(() => {
    this.coordinates = this.fetchCoordinates.getCoordinates();
    this.coordinates.subscribe(data => {
      var latlng = data.split(" ", 2);
      this.lat = parseFloat(latlng[0]);
      this.lng = parseFloat(latlng[1]);

      this.markers.push ({
          lat: this.lat,
          lng: this.lng
      });

      //Snap to road request
    //  this.httprequest.request('https://roads.googleapis.com/v1/snapToRoads', + {
    //    interpolate: true,
    //    key: 'AIzaSyBW2sDZ3WW7tPB16f3PpwlxGMJqnfnwwic', 
    //    path: this.markers.join('|')
    //  });
    //  console.log(this.httprequest);

      this.latestlat = this.lat;
      this.latestlng = this. lng
      console.log(this.lat,this.lng);
    });
  }, 1000);
  }

}

/*
export class LatLng {
    latitude = [];
    longitude = [];
    totalpoints: number = 0;
    constructor (lat: number, lng: number) {
      this.latitude.push(lat);
      this.longitude.push(lng);
      this.totalpoints = 1;
    }

    insert (lat: number, lng: number){
      this.latitude.push(lat);
      this.longitude.push(lng);
      this.totalpoints = this.totalpoints+1;
    }

    getlat (index: number){
      return this.latitude[index];
    }

    getlng (index: number){
      return this.longitude[index];
    }
  };

  */