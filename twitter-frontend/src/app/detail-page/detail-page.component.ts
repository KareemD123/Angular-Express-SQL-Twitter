import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  tweetDetail: Object;
  id: any; // available in our html template

  constructor(private route: ActivatedRoute, private _tweetService: TweetService) { }

  ngOnInit() {
    // Grabbed the route paramsfrom the route object
    this.route.params.subscribe(params => {
      console.log('params!', params)
      // we stored the id params in our own id property
      this.id = parseInt(params['id'])
    })
    // 1. Write the call to the service
    // 2. Define the service Get Tweet Detail function
    // 3. Define the route/controller for the tweet detail on the express side
    this._tweetService.fetchTweetDetail(this.id).subscribe(data => {
      console.log('TweetDetail: ', data)
      this.tweetDetail = data
    })

  }
}

    //Array.filter --> all elements that match the condition
    //Array.find ---> the first element that matches the condition
    // searched for the tweet with an id matching the params id
    // this.tweetDetail = this.tweets.find(tweet => tweet.id == this.id)
    // this.tweetDetail = this.tweets.find(function(tweet){
    //   return tweet.id == this.id
    // })
    // console.log('tweetDetail', this.tweetDetail)
