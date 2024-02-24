import { Component, Input } from '@angular/core';
import { Bid } from 'src/app/model/Bid';

@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})
export class BidsComponent {

  @Input()
  placedBids:Bid[]
}
