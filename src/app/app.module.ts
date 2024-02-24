import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { NavbarComponent } from './navbar/navbar.component';


import { ReactiveFormsModule } from '@angular/forms';


import { LoginComponent } from './login/login.component';


import { CreateAuctionComponent } from './create-auction/create-auction.component';

import { CreateuserComponent } from './createuser/createuser.component';

import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';

import { AuctionListComponent } from './auction-list/auction-list.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { AuthInterceptor } from './utils/auth.interceptor';
import { UserService } from './service/user.service';
import { ParticipatingAuctionsComponent } from './userprofile/participating-auctions/participating-auctions.component';
import { CreatedAuctionsComponent } from './userprofile/created-auctions/created-auctions.component';
import { BidsComponent } from './userprofile/bids/bids.component';



@NgModule({
 declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    CreateAuctionComponent,

    CreateuserComponent,
    UserListComponent,

    HomeComponent,

         AuctionListComponent,
         UserprofileComponent,
         AdminprofileComponent,
         ParticipatingAuctionsComponent,
         CreatedAuctionsComponent,
         BidsComponent,


  ],
 imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
 ],
 providers: [
   UserprofileComponent,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  },
  UserService,
  LoginComponent

 ],
 bootstrap: [AppComponent]
})
export class AppModule { }

