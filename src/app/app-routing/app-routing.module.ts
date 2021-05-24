import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Directive1Component } from '../directive1/directive1.component';
import { Directive2Component } from '../directive2/directive2.component';
import { HomeComponent } from '../home/home.component';

const routes:Routes = [
  {'path':'', 'component': HomeComponent },
  {'path': 'directive1', 'component': Directive1Component},
  {'path': 'directive2', 'component': Directive2Component}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
