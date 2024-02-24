import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { LoginComponent } from './login/login.component';
import { CreateAuctionComponent } from './create-auction/create-auction.component';

import { CreateuserComponent } from './createuser/createuser.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';

import { AuctionListComponent } from './auction-list/auction-list.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';



const routes: Routes = [
{ path: 'user-list', component: UserListComponent },
{ path: 'search/:id/food-page/:id',redirectTo:'food-page/:id' },
{ path: 'biddingapp/v1/login', component:LoginComponent },
{ path: 'createauction', component: CreateAuctionComponent },

{ path: 'createuser', component: CreateuserComponent },

{path:'auction-list', component :AuctionListComponent},
{path : 'home', component: HomeComponent},
{path: 'userprofile',component:UserprofileComponent},
{path: 'biddingapp/v1/admin/test',component:AdminprofileComponent},
{path: 'login',component:LoginComponent},

{ path: '', component:HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CollapseModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
