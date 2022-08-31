import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
})
export class InputSearchComponent implements OnInit {
  @Input()
  public error: boolean = false;

  @Input()
  public icon: string = '';

  @Input()
  public title: string = '';

  @Input()
  public subtitle: string = '';

  @Input()
  public value: any = undefined;

  @Input()
  public readonly: boolean = false;

  @Output()
  public valueChange: EventEmitter<any> = new EventEmitter();

  @ViewChild('input')
  public input!: ElementRef<HTMLInputElement>;

  constructor() {}

  ngOnInit(): void {}

  public OnClick() {
    if (this.readonly == false) {
      this.input.nativeElement.focus();
    }
  }
}
