import { Subscription, interval } from 'rxjs';

import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dvd-page',
  templateUrl: './dvd-page.component.html',
  styleUrls: ['./dvd-page.component.scss']
})
export class DvdPageComponent implements OnInit {
  isSingleClick: boolean = true;

  @ViewChild('dvd') dvd: ElementRef;
  private subscription: Subscription = new Subscription();

  constructor(private render: Renderer2, private readonly router: Router) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.render.listen('window', 'load', () => {
      this.handleSubscriptions();
    });
  }

  goToHome(): void {
    this.isSingleClick = false;
    this.router.navigate(['']);
  }

  goToNextModule(): void {
    this.isSingleClick = true;
    setTimeout(() => {
      if (this.isSingleClick) {
        this.router.navigate(['clock']);
      }
    }, 250)
  }

  private handleSubscriptions(): void {
    this.subscription.add(interval(15).subscribe(this.handleInterval));
  }

  private handleInterval = (): void => {
    const top = this.dvd.nativeElement.getBoundingClientRect().top;
    const bottom = this.dvd.nativeElement.getBoundingClientRect().bottom;
    const left = this.dvd.nativeElement.getBoundingClientRect().left;
    const right = this.dvd.nativeElement.getBoundingClientRect().right;

    if (Math.floor(top) === 0 || Math.floor(left) === 0 || Math.floor(bottom) > 478 || Math.floor(right) > 801) {
      this.render.setStyle(this.dvd.nativeElement, 'filter', `invert(27%) sepia(51%) saturate(2878%) hue-rotate(${Math.random() * 1000}deg) brightness(104%) contrast(97%)`)
    }

  }

}
