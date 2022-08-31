import {
  AfterViewInit,
  Component,
  OnInit,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'a[mat-breadcrumb], a[matBreadcrumb]',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BreadcrumbComponent implements OnInit, AfterViewInit {
  public Linked: boolean = false;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      const a = this.viewContainerRef.element.nativeElement as HTMLLinkElement;
      const linked =
        a.getAttribute('href') ||
        a.getAttribute('matBreadcrumbActive') ||
        a.getAttribute('mat-breadcrumb-active');

      this.Linked = linked != 'false';
      if (this.Linked == false) {
        a.classList.add('opacity-70');
      } else {
        (a.firstChild as HTMLDivElement).classList.add('hover:text-primary');
      }
    }, 0);
  }
}
