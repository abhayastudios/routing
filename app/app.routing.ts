import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { LoginParent } from './login.parent';
import { LoginChild } from './login.child';
import { AppComponent } from './app.component';
import { MainParent } from './main.parent';
import { MainChild } from './main.child';
import { OtherChild } from './other.child';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginParent,
    children: [
      { path: "", redirectTo: "loginchild", pathMatch: "full" },
      { path: "loginchild", component: LoginChild },
    ]
  },
  { path: "main", component: AppComponent,
    children: [
      { path: "", component: MainParent,
        children: [
          { path: "", redirectTo: "mainchild", pathMatch: "full" },
          { path: "mainchild", component: MainChild, data: { animation: 'main' } },
          { path: "otherchild", component: OtherChild, data: { animation: 'other' } },
        ]
      }
    ]
  }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
