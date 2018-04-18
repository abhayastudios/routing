import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  template: `
    <StackLayout>
      <Label text="Other Child"></Label>
      <Button text="Main Child" (tap)="main()"></Button>
    </StackLayout>
  `,
  styles: [`
  `]
})
export class OtherChild implements OnInit {
  constructor(
    private router:RouterExtensions
  ) {}

  public ngOnInit() {}

  public main() {
    this.router.navigate(['/main']);
  }
}
