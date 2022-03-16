import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularExampleComponent } from './angular-example/angular-example.component';
import { TesterComponent } from './tester/tester.component';

const routes: Routes = [
  { path: '', component: AngularExampleComponent },
  { path: 'tester', component: TesterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
