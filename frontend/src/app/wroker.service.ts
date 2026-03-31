import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Workers } from './workers';

@Injectable({
  providedIn: 'root'
})
export class WrokerService {
   private getURL=' http://localhost:9090/worker';

  constructor(private http:HttpClient) { }



   getWorkerList(): Observable<Workers[]>{
    return this.http.get<Workers[]>(this.getURL);
   }

   createWorker(worker : Workers):Observable<Object>{
    return this.http.post(this.getURL ,worker);

   }

   getWorkerid(id:number):Observable<Workers>{
    return this.http.get<Workers>(`${this.getURL}/${id}`);
   }

   updateWorker(id:number, worker: Workers) :Observable<object>{
     return this.http.put<object>(`${this.getURL}/${id}`,worker);
   }

   deleteWorker(id: number):Observable<object>{
    return this.http.delete<object>(`${this.getURL}/${id}`);
   }
}
