import { Component, OnInit } from "@angular/core";

@Component({
  template: `
    <StackLayout>
      <Label text="Login Parent"></Label>
      <router-outlet></router-outlet>
    </StackLayout>
  `,
  styles: [`
  `]
})
export class LoginParent implements OnInit {
  constructor(
  ) {}

  public ngOnInit() {}
}
