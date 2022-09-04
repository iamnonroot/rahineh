import { SearchDeafultRoom, SearchDefaultWay } from './search.default';
import { SEARCH_PASSENGERS, SEARCH_WAYS, SEARCH_WAY_TYPE } from './search.enum';
import {
  ILiveSearchPassenger,
  ILiveSearchRoom,
  ILiveSearchWay,
  ILiveSearchWayDate,
  ILiveSearchWayLocation,
  TLiveSearchPasenger,
  TLiveSearchType,
  TLiveSearchWayType,
} from './search.interface';
import { SearchService } from './search.service';

export class SearchVehacel<T> {
  constructor(protected search: SearchService, private type: TLiveSearchType) {}

  // get current search by type
  protected self() {
    return { ...this.search.Get(this.type) };
  }

  protected getSelf<T = any>(key: string): T {
    return this.self()[key];
  }

  protected setSelf(key: string, value: any) {
    let self = this.self();
    self[key] = value;
    this.search.Set(this.type, self);
  }

  public Value(): T {
    return this.self();
  }

  // ====== way type ======

  // set way type
  public SetWayType(type: TLiveSearchWayType) {
    this.setSelf(SEARCH_WAY_TYPE, type);
    let ways = this.GetWays();
    // remove all ways exept first one
    if (ways.length != 1) {
      for (let index in ways) {
        const i = Number(index);
        if (i != 0) ways.splice(i, 1);
      }
    }
    // add empty way on go-back and multi way
    if (type != 'go') {
      ways.push(SearchDefaultWay);
    }
    // reverse way origin and destination for new way
    if (type == 'go-back') {
      let first = ways[0];
      let second = ways[1];
      second.destination = first.origin;
      second.origin = first.destination;
    }

    this.setSelf(SEARCH_WAYS, ways);
  }

  // get way type
  public GetWayType(): TLiveSearchWayType {
    return this.getSelf(SEARCH_WAY_TYPE) ?? 'go';
  }

  // ====== passengers ======

  // set all passengers
  public SetPassengers(passengers: ILiveSearchPassenger) {
    this.setSelf(SEARCH_PASSENGERS, passengers);
  }

  // add passenger by type
  public AddPassengerByType(type: TLiveSearchPasenger) {
    let self = this.getSelf<ILiveSearchPassenger>(SEARCH_PASSENGERS);
    self[type] = self[type] + 1;
    this.setSelf(SEARCH_PASSENGERS, self);
  }

  // remove/less passenger by type
  public RemovePassengerByType(type: TLiveSearchPasenger) {
    let self = this.getSelf<ILiveSearchPassenger>(SEARCH_PASSENGERS);
    if (type == 'adult' && self[type] == 1) return;
    self[type] = self[type] - 1;
    this.setSelf(SEARCH_PASSENGERS, self);
  }

  // get count of passengers by type
  public CountPassengersByType(type: TLiveSearchPasenger) {
    return this.getSelf<ILiveSearchPassenger>(SEARCH_PASSENGERS)[type] ?? 0;
  }

  // get count of all passengers
  public CountPassengers(): ILiveSearchPassenger {
    return this.getSelf(SEARCH_PASSENGERS);
  }

  // ====== way ======

  // add a new way
  public AddWay() {
    let ways = this.getSelf<ILiveSearchWay[]>(SEARCH_WAYS);
    ways.push(SearchDefaultWay);
    this.setSelf(SEARCH_WAYS, ways);
  }

  // remove a way by index
  public RemoveWay(index: number) {
    let ways = this.getSelf<ILiveSearchWay[]>(SEARCH_WAYS);
    if (ways.length > 1) {
      ways.splice(index, 1);
      this.setSelf(SEARCH_WAYS, ways);
    }
  }

  // pop a way
  public PopWay() {
    let ways = this.getSelf<ILiveSearchWay[]>(SEARCH_WAYS);
    ways.pop();
    this.setSelf(SEARCH_WAYS, ways);
  }

  // set all ways
  public SetWay(ways: ILiveSearchWay[]) {
    this.setSelf(SEARCH_WAYS, ways);
  }

  // get all ways
  public GetWays() {
    return this.getSelf<ILiveSearchWay[]>(SEARCH_WAYS) ?? [];
  }

  // set way origin from way step
  public SetWayOriginByStep(
    location: ILiveSearchWayLocation,
    step: number = 0
  ) {
    let ways = this.getSelf<ILiveSearchWay[]>(SEARCH_WAYS);
    ways[step].origin = location;
    this.setSelf(SEARCH_WAYS, ways);
  }

  // get way origin from way step
  public GetWayOriginByStep(
    step: number = 0
  ): ILiveSearchWayLocation | undefined {
    let ways = this.getSelf<ILiveSearchWay[]>(SEARCH_WAYS);
    return ways[step] ? ways[step].origin : undefined;
  }

  // set way destination from way step
  public SetWayDestinationByStep(
    location: ILiveSearchWayLocation,
    step: number = 0
  ) {
    let ways = this.getSelf<ILiveSearchWay[]>(SEARCH_WAYS);
    ways[step].destination = location;
    this.setSelf(SEARCH_WAYS, ways);
  }

  // get way destination from way step
  public GetWayDestinationByStep(
    step: number = 0
  ): ILiveSearchWayLocation | undefined {
    let ways = this.getSelf<ILiveSearchWay[]>(SEARCH_WAYS);
    return ways[step] ? ways[step].destination : undefined;
  }

  // set way date from way step
  public SetWayDateByStep(date: ILiveSearchWayDate, step: number = 0) {
    let ways = this.getSelf<ILiveSearchWay[]>(SEARCH_WAYS);
    ways[step].date = date;
    this.setSelf(SEARCH_WAYS, ways);
  }

  // get way date by way step
  public GetWayDateByStep(step: number = 0): ILiveSearchWayDate | undefined {
    let ways = this.getSelf<ILiveSearchWay[]>(SEARCH_WAYS);
    return ways[step] ? ways[step].date : undefined;
  }

  // ====== Validator =======
  public Validate() {
    let errors: { step: number; type: string }[] = [];
    const ways = this.GetWays();
    for (let i in ways) {
      const item = ways[i];
      if (item.date == undefined)
        errors.push({ step: Number(i), type: 'date' });
      if (item.destination == undefined)
        errors.push({ step: Number(i), type: 'destination' });
      if (item.origin == undefined)
        errors.push({ step: Number(i), type: 'origin' });
    }

    return {
      valid: errors.length == 0,
      value: this.Value(),
      errors,
    };
  }
}

export class SearchHotel<T> {
  protected type: TLiveSearchType = 'hotel';

  constructor(protected search: SearchService) {}

  // get current search by type
  protected self() {
    return { ...this.search.Get(this.type) };
  }

  protected getSelf<T = any>(key: string): T {
    return this.self()[key];
  }

  protected setSelf(key: string, value: any) {
    let self = this.self();
    self[key] = value;
    this.search.Set(this.type, self);
  }

  public Value(): T {
    return this.self();
  }

  // ======= room =======
  public AddRoom() {
    let rooms = this.GetRooms();
    rooms.push({ ...SearchDeafultRoom });
    this.setSelf('room', rooms);
  }

  public RemoveRoomByIndex(index: number = 0) {
    let rooms = this.GetRooms();
    if (rooms.length > 1) rooms.splice(index, 1);
    this.setSelf('room', rooms);
  }

  public GetRooms(): ILiveSearchRoom[] {
    return this.getSelf('room') ? [...this.getSelf('room')] : [];
  }

  public CountAdultInRoomByIndex(index: number): number {
    let rooms = this.GetRooms();
    return rooms[index].adult;
  }

  public AddAdultToRoomByIndex(index: number = 0) {
    let rooms = this.GetRooms();
    rooms[index].adult = rooms[index].adult + 1;
    this.setSelf('room', rooms);
  }

  public LessAdultInRoomByIndex(index: number = 0) {
    let rooms = this.GetRooms();
    if (rooms[index].adult > 1) {
      rooms[index].adult = rooms[index].adult - 1;
      this.setSelf('room', rooms);
    }
  }

  public CountChildInRoomByIndex(index: number): number {
    let rooms = this.GetRooms();
    return rooms[index].child.length;
  }

  public AddChildToRoomByIndex(index: number = 0) {
    let rooms = this.GetRooms();
    rooms[index].child.push(0);
    this.setSelf('room', rooms);
  }

  public LessChildInRoomByIndex(index: number = 0) {
    let rooms = this.GetRooms();
    rooms[index].child.pop();
    this.setSelf('room', rooms);
  }

  public SetChildInRoomByIndexes(
    roomIndex: number = 0,
    childIndex: number = 0,
    value: number = 0
  ) {
    let rooms = this.GetRooms();
    rooms[roomIndex].child[childIndex] = value;
    this.setSelf('room', rooms);
  }

  public GetChildrenInRoomByIndex(index: number): number[] {
    let rooms = this.GetRooms();
    return rooms[index].child;
  }
}
