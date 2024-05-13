import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producer } from '../model/Producer';

@Injectable({
  providedIn: 'root'
})
export class ProducerService {

  constructor(private http: HttpClient) { }

  getAllProducers(){
    return this.http.get<Producer[]>('http://localhost:5000/app/getAllProducers', {withCredentials: true});
  }

  /*delete(id: string){
    return this.http.delete('http://localhost:5000/app/deleteUser?id=' + id, {withCredentials: true});
  }*/
}
