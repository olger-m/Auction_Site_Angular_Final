import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Auction } from '../model/Auction';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  leaveauction(auctionId: number) {
    let url = this.baseUrl + "leave?auctionId=" + auctionId
    console.log(url);
    
    return this.http.post<any>(url,{})    }


  baseUrl = "http://localhost:8080/biddingapp/v1/"

  constructor(private http:HttpClient) { }


  placeBid(auctionId:number,bidAmount:number):Observable<Response>{

    let url = this.baseUrl + "bid/add?auctionId=" + auctionId + "&bidAmount=" + bidAmount

    return this.http.post<any>(url,{})
  }
  additem(auctionToEnterId: number, value: any) {
let url = this.baseUrl + "additem?auctionId=" + auctionToEnterId

    return this.http.post<any>(url,value)  
  }

    newUpdatedBid(bidEnterId: number, newvalue: any):Observable<Response> {
      let url = this.baseUrl + "updateBid?bidId=" + bidEnterId+ "&bidAmount=" + newvalue

      return this.http.post<any>(url,{})      }


      getWinner(auctionId: number,auction:Auction) :Observable <Response> {
        let url = "http://localhost:8080/biddingapp/v1/winner?auctionId=" + auctionId
        console.log(url);
        
        return this.http.post<any>(url,auction)
        
      }


}
