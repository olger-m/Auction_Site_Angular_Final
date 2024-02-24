import { Component } from '@angular/core';
import { Auction } from '../model/Auction';
import { Route, Router } from '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../model/Category';
import { DataService } from '../service/data.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-create-auction',
  templateUrl: './create-auction.component.html',
  styleUrls: ['./create-auction.component.css'],
})
export class CreateAuctionComponent {
  c:string

  auctionForm!: FormGroup;

  categories: Category[] = []

  constructor(

    private router: Router,
    private dataservice:DataService,
    private userservice:UserService,
  ) {}

  ngOnInit() {
    this.initForm();

    this.initCategories()
  }

  initCategories(){
    this.dataservice.getAllAvailableCategories().subscribe(cat => {
      this.categories = cat
      console.log(cat);

    })
  }

  initForm() {
    this.auctionForm = new FormGroup({
      minimumAmount: new FormControl('', { validators: [Validators.required] }),
      endDate: new FormControl('', { validators: [Validators.required] }),
      dateOfIssue: new FormControl('', { validators: [Validators.required] }),
      auctionDescription: new FormControl('', { validators: [Validators.required] }),
      categories: new FormControl('', { validators: [Validators.required] }),
      // winnerUsername:null,
        creatorUsername:new FormControl(''),
    
      // participants:User[]
    
      // auctionItems:AuctionItem[]
    
      // bids:Bid[]
    });
  }



  // resetform() {
  //   this.auctionForm.controls['minamount'].patchValue('');
  //   this.auctionForm.controls['eDate'].patchValue('');
  //   this.auctionForm.controls['sdate'].patchValue('');
  //   this.auctionForm.controls['description'].patchValue('');
  //   this.auctionForm.controls['categories'].patchValue('1');
  // }


  onSubmit(value:any) {
    console.log(this.auctionForm.value);
    
    if (this.auctionForm.valid) {
      this.auctionForm.controls['creatorUsername'].patchValue(this.userservice.getUserFromStorage().username);

      // auction.minimumAmount = this.auctionForm.controls['minamount'].value;
      // auction.endDate = this.auctionForm.controls['eDate'].value;
      // auction.endDate = this.auctionForm.controls['sdate'].value;
      // auction.auctionDescription =
      //   this.auctionForm.controls['description'].value;
      // this.category = this.auctionForm.controls['categories'].value;     


      this.userservice.createAuction(this.auctionForm.value,this.auctionForm.controls['categories'].value).subscribe({
        next: (res) => {
          console.log('auction u ktrijua ', res);
          // this.resetform();
          this.router.navigate(['/auction-list']);
        },
        error: (err) => {
          console.log('ndodhi nje problem gjate krijimit te nje auction', err);
        },

      });
    }
  }


}

// export interface Category {
//   category_id: number;
//   categoryName: string;
//   categoryDescription: string;
//   auctionList: Auction[];
// }
