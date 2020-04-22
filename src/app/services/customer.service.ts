import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';

//Tells backend that its recieving a json object
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable()

export class CustomerService {
    baseUrl = 'http://localhost:3000/customer';

    //HttpClient to send calls to backend server
    constructor(private http: HttpClient) { }

    //REST call to backend 
    getAll() {
        return this.http.get(this.baseUrl); //Specifying type of REST call and backend endpoint
    }

    getById(id:number): Observable<Customer> {
        return this.http.get<Customer>(`${this.baseUrl}/${id}`); //Specifying type of REST call and backend endpoint
    }

    create(customer: Customer) {
        return this.http.post(this.baseUrl, customer, httpOptions); //Specifying type of REST call and backend endpoint
    }

    update(id: number, customer: Customer) {
        return this.http.put(`${this.baseUrl}/edit/${id}`, customer, httpOptions); //Specifying type of REST call and backend endpoint
    }

    delete(id: number) {
        return this.http.delete(`${this.baseUrl}/delete/${id}`, httpOptions); //Specifying type of REST call and backend endpoint
    }

}