import { EditPageComponent } from './edit-page/edit-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NewTweetPageComponent } from './new-tweet-page/new-tweet-page.component'
import { DetailPageComponent } from './detail-page/detail-page.component';


const routes: Routes = [
  // HomePageComponent
  {path: '', component: HomePageComponent },
  {path: 'home', component: HomePageComponent },
  // NewTweetPageComponent
  {path: 'new', component: NewTweetPageComponent },
  // DetailPageComponent 
  {path: 'detail/:id', component: DetailPageComponent},
  //EditPageComponent
  {path: 'edit/:id', component: EditPageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
