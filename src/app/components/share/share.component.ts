import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})
export class ShareComponent implements OnInit {
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() link: string = '';

  public Apps: Application[] = [
    {
      key: 'whatsapp',
      logo: '/assets/images/logo/applications/whatsapp.png',
      title: 'واتساپ',
    },
    {
      key: 'telegram',
      logo: '/assets/images/logo/applications/telegram.png',
      title: 'تلگرام',
    },
    {
      key: 'twitter',
      logo: '/assets/images/logo/applications/twitter.png',
      title: 'توییتر',
    },
    {
      key: 'facebook',
      logo: '/assets/images/logo/applications/facebook.png',
      title: 'فیسبوک',
    },
    {
      key: 'clipboard',
      logo: '/assets/images/logo/applications/clipboard.png',
      title: 'کپی کردن لینک',
    },
    {
      key: 'more',
      logo: '/assets/images/logo/applications/more.png',
      title: 'گزینه های بیشتر',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

interface Application {
  key: string;
  logo: string;
  title: string;
}
