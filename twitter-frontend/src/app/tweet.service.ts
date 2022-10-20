import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  private SERVER_URL: string = 'http://localhost:4100/'

  constructor(private http: HttpClient) { }

  fetchAllTweets() {
    return this.http.get(this.SERVER_URL + 'tweets')
  }

  createTweet(newTweet){
    return this.http.post(this.SERVER_URL + 'tweets', newTweet)
  }

  fetchTweetDetail(id) {
    return this.http.get(this.SERVER_URL + `tweets/${id}`)
    // Create a route that matches /tweets/:id on express server
  }

  updateTweet(id, updatedTweet) {
    return this.http.patch(this.SERVER_URL + `tweets/${id}`, updatedTweet)
  }

  deleteTweet(id) {
    return this.http.delete(this.SERVER_URL + `tweets/${id}`)
  }

}
