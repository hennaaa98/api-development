import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}



@Injectable()

export class SizeService {
    baseUrl = 'http://localhost:3000/sizes';

    constructor(private http: HttpClient) { }

    find(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    create(data) {
        return this.http.post(this.baseUrl, data, httpOptions);
    }

    update(id, data) {
        return this.http.put(`${this.baseUrl}/edit/${id}`, data, httpOptions);
    }

    delete(id) {
        return this.http.delete(`${this.baseUrl}/delete/${id}`, httpOptions);
    }


}