import { Component, OnInit } from '@angular/core';
import { TweetService } from '../tweet.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-new-tweet-page',
  templateUrl: './new-tweet-page.component.html',
  styleUrls: ['./new-tweet-page.component.css']
})
export class NewTweetPageComponent implements OnInit {

  newTweet: Object = {
    id: 0,
    name: '',
    description: ''
  }

  constructor(private _tweetService: TweetService, private _router: Router) { }

  ngOnInit() {
  }

  onChange() {
    // console.log(this.newTweet)
  }

  submitForm() {
    // Finalize your api call
    // Send the data over somewhere else/make an operation
    //validation functions
    // this.tweetsList.push(this.newTweet)

    //Overall Steps we need to cover:
    // Update the component to send data to service
    // Create service function to send api call
    // Create the route and controlelr function on our backend api

    console.log(this.newTweet)
    this._tweetService.createTweet(this.newTweet).subscribe(responseData => {
      console.log('This is the response data:', responseData)
      this._router.navigate(['/'])
    })
  }

}
