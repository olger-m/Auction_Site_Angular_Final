import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {


  searchForm = new FormGroup({
    search: new FormControl(''),
  });
  @Input() input: any = '';
  @Output() searchEvent = new EventEmitter<string>();



  constructor(
    private router: Router,
    private userService:UserService
  ) {}

  isUserAdmin(){

    return this.userService.isUserAdmin()
  }

  isUserLoggedIn(){

    return this.userService.isUserPresent()
  }


  logoutUser(){

    this.userService.logOutUser().subscribe({
      next:(response:any )=> {


        if(Object.values(response).find((value:any) => value === true)){

          sessionStorage.clear()
          this.router.navigate(['home'])
         }

      },
      error:(err) => {

      }
    })
  }


  gotoLogin() {
    this.router.navigate(['/login']);
  }


  gotoSignUp() {
    this.router.navigate(['/createuser']);
  }

  ngOnInit(): void {}

}
