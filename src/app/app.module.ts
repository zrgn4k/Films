import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { NavComponent } from './nav/nav.component';

const appRoutes: Routes = [
  {path: '', component: FilmsComponent},
  {path: 'reviews', component: ReviewsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    ReviewsComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
