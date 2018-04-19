import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  template: `
    <StackLayout>
      <Label text="Main Child"></Label>
      <Button text="Other Child" (tap)="main()"></Button>
    </StackLayout>
  `,
  styles: [`
  `]
})
export class MainChild implements OnInit {
  constructor(
    private router:RouterExtensions
  ) {}

  public ngOnInit() {}

  public main() {
    this.router.navigate(['/app/main/otherchild']);
  }
}
