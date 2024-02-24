import { Component } from '@angular/core';

import { User } from '../model/User';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css'],
})
export class CreateuserComponent {
  user?:User
  userform: FormGroup;

  constructor(

    private userService: UserService,
    private login:LoginComponent,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initUserForm()
  }

  initUserForm() {

    this.userform= new FormGroup({
      username:new FormControl("",{validators:[Validators.required]}),
      password:new FormControl("",{validators:[Validators.required]}),
      email:new FormControl("",{validators:[Validators.required]}),
      // role:new FormControl("",{validators:[Validators.required]})
    })

  }

  
  gotoCreate() {
    this.router.navigate(['/createuser']);
  }

  onSubmit() {

  }

  gotoList() {
    this.router.navigate(['/user-list']);
  }
  registerUser(values: any) {
    const userdata=this.userform.value

    this.userService.registerUser(userdata).subscribe({
      next: (response) => {    
        this.login.loginUser(userdata)

      },
      error:(err) => {
        console.log("error ", err);

      }
    })
  }

}
