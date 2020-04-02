import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
    providedIn : 'root'
})
 
export class GlobalService {
    constructor(private http: HttpClient) {
        
    }

    getJsonData(locale) {
        let url = '/assets/json/' + locale + '.json';
        return this.http.get(url);
      }
    
}