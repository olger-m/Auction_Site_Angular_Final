import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  isLoading = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.userService.getUserList().subscribe(
      (users: User[]) => {
        this.users = users;
        this.isLoading = false;
      },
      (error) => {
        console.log('Error fetching users:', error);
        this.isLoading = false;
      }
    );
  }

  goToUserDetails(id: number): void {
    this.router.navigate(['/userdetails', id]);
  }
}
