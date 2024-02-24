import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
signUp() {
this.router.navigate(['/createuser'])}
  featuredAuctions: any[];
  recentAuctions: any[];


  constructor(private http: HttpClient,private router : Router) {}

  ngOnInit() {
    // this.fetchFeaturedAuctions();
    // this.fetchRecentAuctions();
  }

  // fetchFeaturedAuctions() {
  //   this.http.get<any[]>('your-api-endpoint/featured-auctions')
  //     .subscribe((data: any[]) => this.featuredAuctions = data);
  // }

  // fetchRecentAuctions() {
  //   this.http.get<any[]>('your-api-endpoint/recent-auctions')
  //     .subscribe((data: any[]) => this.recentAuctions = data);
  //}
}

