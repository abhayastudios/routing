import { Component, OnInit } from "@angular/core";

@Component({
  template: `
    <StackLayout>
      <Label text="Main Parent"></Label>
      <router-outlet></router-outlet>
    </StackLayout>
  `,
  styles: [`
  `]
})
export class MainParent implements OnInit {
  constructor(
  ) {}

  public ngOnInit() {}
}
