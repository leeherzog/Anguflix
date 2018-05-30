import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FormsModule }   from '@angular/forms';
import { FilterPipe} from './filter.pipe';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';

import { MoviesService } from './movies.service';
import { MymoviesComponent } from './mymovies/mymovies.component';
import { AllmoviesComponent } from './allmovies/allmovies.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MymoviesComponent,
    AllmoviesComponent,
    UserInfoComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
