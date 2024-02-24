import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auction } from '../model/Auction';
import { Category } from '../model/Category';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  leaveAuction(arg0: number) :Observable<any> {
  
    let url  = this.baseUrl + 'auction/leave'

    return this.http.get<User>(url,{params:{id: arg0}})
  }
  

  getAuctionWinner(arg0: number) :Observable<any> {
  
    let url  = this.baseUrl + 'auction/winner'

    return this.http.get<User>(url,{params:{id: arg0}})
  }
  
  

  baseUrl = 'http://localhost:8080/biddingapp/v1/data/'

  constructor(private http:HttpClient) { }

  getAllAvailableAuctions():Observable<Auction[]>{

    let url  = this.baseUrl + 'auction/all'

    return this.http.get<Auction[]>(url)
  }
  getAllAvailableCategories():Observable<Category[]>{

    let url  = this.baseUrl + 'category/all'

    return this.http.get<Category[]>(url)
  }
}
