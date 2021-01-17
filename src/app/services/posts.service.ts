import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IPosts } from '../interfaces/posts';
 
@Injectable({
    providedIn: 'root'
})
export class PostsService {
    [x: string]: any;
    
    constructor(private http: HttpClient) { }

    public getPosts(): Observable<IPosts>  {
        const url: string = `https://jsonplaceholder.typicode.com/posts`;
        return this.http.get<IPosts>(url);
    }

    public createPosts(post): Observable<IPosts> {
        const url: string = `https://jsonplaceholder.typicode.com/posts`;

        return this.http.post<IPosts>(url, post);
    }
}
