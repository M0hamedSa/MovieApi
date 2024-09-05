import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PopularComponent } from './popular/popular.component';
import { TopratedComponent } from './toprated/toprated.component';
import { UpcomingComponent } from './upcoming/upcoming.component';



const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "popular", component: PopularComponent},
  {path: "top", component: TopratedComponent},
  {path: "up", component: UpcomingComponent},
  {path: "", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
