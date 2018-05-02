import { Component, OnInit } from "@angular/core";

import { RouteAnimations } from './app.routing.animations';

@Component({
  template: `
    <StackLayout>
      <Label text="Main Parent"></Label>
      <AbsoluteLayout id="body" [@routeAnimation]="prepRouteState(routerOutlet)">
        <router-outlet #routerOutlet="outlet"></router-outlet>
      </AbsoluteLayout>
    </StackLayout>
  `,
  animations: RouteAnimations,
  styles: [`
  `]
})
export class MainParent implements OnInit {
  constructor(
  ) {}

  public ngOnInit() {}

  /* Determine routing state to pass to router-outlet for animation */
  public prepRouteState(outlet: any) {
    console.log(JSON.stringify(outlet.activatedRouteData['animation']));
    return outlet.activatedRouteData['animation'] || 'main';
  }
}
