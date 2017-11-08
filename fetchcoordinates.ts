import { Http } from '@angular/http';
import { Component} from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
    
@Injectable()
export class FetchCoordinates {
    
    constructor( private http: Http) {}
    
    public getCoordinates(): Observable<any> {
        return this.http.get('http://localhost:3000/getCoordinates')
            .map(res => res.json())
    }
}
