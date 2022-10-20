import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NewTweetPageComponent } from './new-tweet-page/new-tweet-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { FormsModule } from '@angular/forms';
import { EditPageComponent } from './edit-page/edit-page.component';

@NgModule({
  // registering components
  declarations: [
    AppComponent,
    HomePageComponent,
    NewTweetPageComponent,
    DetailPageComponent,
    EditPageComponent
  ],
  // importing other modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
