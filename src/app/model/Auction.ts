import { AuctionItem } from "./AuctionItem";
import { Bid } from "./Bid";
import { Category } from "./Category";
import { User } from "./User";


export interface Auction {


  id:number

  auctionDescription:string

  category:Category

  minimumAmount:number

  dateOfIssue:Date

  endDate:Date

  winnerUsername:string

  creatorUsername:string

  participants:User[]

  auctionItems:AuctionItem[]

  bids:Bid[]

}
