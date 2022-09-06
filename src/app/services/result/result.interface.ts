export interface IResultItineraryItem {
  price: IResultItineraryItemPrice;
  remaining: number;
  stopsCount: number;
  refrenceId: string;
  _provider: number;
  sellType: 'SYSTEM' | 'CHARTER';
  originDestinations: IResultItineraryItemOriginDestination[];
}

export interface IResultItineraryItemOriginDestination {
  connectionTimePerMinute?: number;
  journeyDurationPerMinute?: number;
  legs: IResultItineraryItemOriginDestinationLeg[];
}

export interface IResultItineraryItemOriginDestinationLeg {
  departureDateTime: Date | string;
  arrivalDateTime: Date | string;
  airlineFlightNumber?: string;
  airlineCode?: string;
  airlineName?: string;
  airlineImage?: string;
  flightType?: string;
  cabinType?: string;
  departureAirportName?: string;
  departureAirportCode?: string;
  departureCityName: string;
  departureCityCode: string;
  arrivalAirportName?: string;
  arrivalAirportCode?: string;
  arrivalCityName: string;
  arrivalCityCode: string;
  sellType: string;
  technicalStops: [];
}

export interface IResultItineraryItemPrice {
  adult: number;
  child: number;
  infant: number;
  currencyName: string;
  currencyCode: string;
}
