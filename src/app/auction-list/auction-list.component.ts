import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


import { Auction } from '../model/Auction';

import { DataService } from '../service/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActionService } from '../service/action.service';
import { User } from '../model/User';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.css']
})
export class AuctionListComponent implements OnInit {

  auctions: Auction[] = [];


  closeResult = ''

  @ViewChild('bid_modal', { static: true }) bidModal: ElementRef | undefined;
  @ViewChild('item_modal', { static: true }) itemModal: ElementRef | undefined;
  @ViewChild('update_bid_modal', { static: true }) update_bid_modal: ElementRef | undefined;


  bidForm:FormGroup
  itemForm: FormGroup;
  updateBidForm: FormGroup;

  constructor(private dataService:DataService,private modalService: NgbModal,private actionService:ActionService,private router :Router) { }

  auctionToEnterId:number = 0

  bidEnterId:number = 0
  bidUser:string = ""


  ngOnInit(): void {


    this.initBidForm()
    this.initItemForm()
    this.initUpdateBidForm()

    this.getAllAvailableAuctions()
  }

  initBidForm(){
    this.bidForm = new FormGroup({
      value:new FormControl("", {validators:[Validators.required]})
    })
  }
  initItemForm(){
    this.itemForm = new FormGroup({
      name:new FormControl("", {validators:[Validators.required]})
    })
  }
  initUpdateBidForm(){
    this.updateBidForm = new FormGroup({
      newbid:new FormControl("", {validators:[Validators.required]})
    })
  }

  getAllAvailableAuctions(){

    this.dataService.getAllAvailableAuctions().subscribe({
      next:(response) => {
        this.auctions = response
      },
      error:(err:HttpErrorResponse) => {

        console.log("error ", err);

      }
    })
  }

  openBidDialog(auctionId:number){

    this.auctionToEnterId = auctionId

    this.openModal(this.bidModal)

  }
  openItemDialog(auctionId:number){

    this.auctionToEnterId = auctionId

    this.openModal(this.itemModal)

  }
  updatebid(bidId: number,user: string) {
    this.bidEnterId = bidId
    this.bidUser=user

    this.openModal(this.update_bid_modal)    }

  placeBid(value:any){

    console.log("value ", value);
    console.log("value ", value.value);
    this.router.navigate(["/userprofile"])


    this.modalService.dismissAll()


    this.actionService.placeBid(this.auctionToEnterId, value.value).subscribe(response => {

      this.getAllAvailableAuctions()

    })


  }
  // addItem(value: any) {
  //   this.modalService.dismissAll()



  //   this.actionService.additem(this.auctionToEnterId, value).subscribe(response => {

  //     this.getAllAvailableAuctions()
  //   })
  // }
  newBid(newvalue: any) {
    this.modalService.dismissAll()

    this.actionService.newUpdatedBid(this.bidEnterId,this.updateBidForm.controls['newbid'].value).subscribe(response => {

      this.getAllAvailableAuctions()
    })
  }

  openModal(templateReference: ElementRef) {

    this.modalService.open(templateReference, { ariaLabelledBy: 'modal-basic-title',size:'lg',backdrop:'static' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );

  }

  private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

}
