import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  template: `
    <StackLayout>
      <Label text="Login Child"></Label>
      <Button text="Main" (tap)="main()"></Button>
    </StackLayout>
  `,
  styles: [`
  `]
})
export class LoginChild implements OnInit {
  constructor(
    private router:RouterExtensions
  ) {}

  public ngOnInit() {}

  public main() {
    // this.router.navigate(['/main'],{ clearHistory: true });
    this.router.navigate(['/main']);
  }
}
