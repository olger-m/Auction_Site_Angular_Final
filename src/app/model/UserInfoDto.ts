import { Auction } from "./Auction";
import { Bid } from "./Bid";

export interface UserInfoDto{

  participatingAuctions:Auction[]

  createdAuctions:Auction[]
  placedBids:Bid[]
}
