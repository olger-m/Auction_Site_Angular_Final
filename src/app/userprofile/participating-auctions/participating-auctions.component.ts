import { AuctionItem } from './../../model/AuctionItem';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Auction } from 'src/app/model/Auction';
import { ActionService } from 'src/app/service/action.service';
import { DataService } from 'src/app/service/data.service';
import { UserprofileComponent } from '../userprofile.component';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-participating-auctions',
  templateUrl: './participating-auctions.component.html',
  styleUrls: ['./participating-auctions.component.css']
})
export class ParticipatingAuctionsComponent implements OnInit {
  @ViewChild('update_bid_modal', { static: true }) update_bid_modal: ElementRef | undefined;

  updateBidForm: FormGroup;
  closeResult = ''
  bidEnterId:number = 0
  bidUser:string = ""

  auctions: Auction[] = [];


user: User=this.userprofile.user;
updatebid(bidId: number,user: string) {
  this.bidEnterId = bidId
  this.bidUser=user

  this.openModal(this.update_bid_modal)    }
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

  initUpdateBidForm(){
    this.updateBidForm = new FormGroup({
      newbid:new FormControl("", {validators:[Validators.required]})
    })
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


  newBid(newvalue: any) {
    this.modalService.dismissAll()

    this.actionService.newUpdatedBid(this.bidEnterId,this.updateBidForm.controls['newbid'].value).subscribe(response => {

      this.getAllAvailableAuctions()
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
  constructor(private dataService:DataService,private actionService:ActionService,private userprofile:UserprofileComponent,private modalService: NgbModal){

  }
  ngOnInit(): void {
    this.initUpdateBidForm()
  }
  leave(auctionId: number) {
    alert("Leaving auction was successful");
    return this.dataService.leaveAuction(auctionId).subscribe(data=>{
      setTimeout(()=>{
        this.userprofile.ngOnInit();
      },500)
    })
  
  }



  @Input()
  participatingAuctions:Auction[]


  getAuctionname(auctionItems:AuctionItem[]){

    auctionItems.forEach(auctionItem => {

      console.log("auct item ",auctionItem.name);

    })

  }
}
