import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "tik-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class ContentComponent implements AfterViewInit {
  @Input("injected")
  public Injected?: string;

  @ViewChild("ref") ref: ElementRef<HTMLDivElement> | undefined;

  constructor() {}

  ngAfterViewInit(): void {
    if (this.ref) {
      this.ref.nativeElement.innerHTML = this.Injected ?? "";
    }
  }
}
