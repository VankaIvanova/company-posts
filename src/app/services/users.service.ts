import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsers } from '../interfaces/users';
 
@Injectable({
    providedIn: 'root'
})
export class UsersService {
 
    constructor(private http: HttpClient) { }

    public getUsers(): Observable<IUsers> {
        const urls: string = `https://jsonplaceholder.typicode.com/users`;

        return this.http.get<IUsers>(urls);
    }

    public addUser(user): Observable<IUsers> {
        const urls: string = `https://jsonplaceholder.typicode.com/users`;

        return this.http.post<IUsers>(urls, user);
    }
}