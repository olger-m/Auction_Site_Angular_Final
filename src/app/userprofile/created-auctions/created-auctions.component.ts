import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Auction } from 'src/app/model/Auction';
import { ActionService } from 'src/app/service/action.service';
import { UserprofileComponent } from '../userprofile.component';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-created-auctions',
  templateUrl: './created-auctions.component.html',
  styleUrls: ['./created-auctions.component.css']
})
export class CreatedAuctionsComponent {
id:number;
auction:Auction
itemForm: FormGroup;
closeResult = ''
@ViewChild('item_modal', { static: true }) itemModal: ElementRef | undefined;



 
constructor (private actionservice : ActionService,private modalService: NgbModal, private userprofile:UserprofileComponent,private dataService:DataService){

}
getWinner(auctionId: number) {
  return this.dataService.getAuctionWinner(auctionId).subscribe(data=>{
    setTimeout(()=>{
      this.userprofile.ngOnInit();
    },500)
  })

}
addItem(value: any) {
  this.modalService.dismissAll()

  this.actionservice.additem(this.id, value).subscribe(response => {
    this.userprofile.ngOnInit()

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
openItemDialog(auctionId:number){

  this.id = auctionId
  this.initItemForm()
  this.openModal(this.itemModal)

}
initItemForm(){
  this.itemForm = new FormGroup({
    name:new FormControl("", {validators:[Validators.required]})
  })
}


  @Input()
  createdAuctions:Auction[]


}
