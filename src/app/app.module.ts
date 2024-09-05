import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PopularComponent } from './popular/popular.component';
import { TopratedComponent } from './toprated/toprated.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { FormsModule } from '@angular/forms';
import { SearchNPipe } from './search.pipe';
import { SearchnPipe } from './searchn.pipe';
;
@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    PopularComponent,
    TopratedComponent,
    UpcomingComponent,SearchNPipe, SearchnPipe

  ],

  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,FormsModule

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
