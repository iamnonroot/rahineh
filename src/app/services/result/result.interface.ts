import { ICardResultTag } from 'src/app/components/result/card-result/card-result.component';

export interface IResultItineraryItem {
  ways: IResultItineraryItemWay[];
  price: IResultItineraryItemPrice;
  remaining: number;
  tags: ICardResultTag[];
}

export interface IResultItineraryItemWay {
  image: string;
  title: string;
  subtitle: string;
  fromText: string;
  fromValue: string;
  toText: string;
  toValue: string;
  start: string;
  end: string;
  duration: string;
  stops: string[];
}

export interface IResultItineraryItemPrice {
  adult: number;
  child: number;
  infant: number;
}
