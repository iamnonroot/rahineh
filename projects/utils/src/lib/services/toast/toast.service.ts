import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TikToastService {
  private timeout: number = 3000;

  constructor() {}

  public make(message: string, option?: ToastOption): boolean {
    // random toast id
    const id = 'tik-toast-' + Math.floor(Math.random() * (300 - 100) + 100);
    // toast container
    let container = document.querySelector('.tik-toast-container');
    // if toast container not found use the body
    if (!container || option?.body) {
      container = document.body;
    }
    // create toast element
    const div = document.createElement('div');
    div.className = 'tik-toast';
    // if container was body, add more classes
    if (container === document.body) {
      div.classList.add(
        'fixed',
        'bottom-[16px]',
        'left-[16px]',
        '-sm:right-[16px]'
      );
    } else {
      div.classList.add('-sm:w-full');
    }
    div.id = id;
    if (option && option.icon != undefined) {
      let i = document.createElement('i');
      i.className = `tik-icon ti ti-${option.icon} ml-4`;
      div.appendChild(i);
    }
    // create message paragraph
    const p = document.createElement('p');
    p.innerText = message;
    div.appendChild(p);
    // create ok button
    if (option && (option.okable == undefined || option.okable != false)) {
      const button = document.createElement('button');
      button.className = 'tik-button';
      button.innerText = 'باشه';
      button.onclick = () => this.remove(id);

      div.appendChild(button);
    }
    // add custom class
    if (option?.class) {
      div.classList.add(...option.class.split(' '));
    }
    if (option?.fontSize) {
      div.style.setProperty('--tik-typography-base', `${option.fontSize}px`);
    }
    // append to parrent to show the toast
    container.appendChild(div);

    setTimeout(() => {
      this.remove(id);
    }, this.timeout);

    return true;
  }

  private remove(id: string) {
    // remove toast from its parrent
    document
      .getElementById(id)
      ?.parentElement?.removeChild(document.getElementById(id)!);
  }
}

interface ToastOption {
  body?: boolean;
  class?: string;
  fontSize?: number;
  icon?: string;
  okable?: boolean;
}
