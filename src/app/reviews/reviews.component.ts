import { Component, OnInit } from '@angular/core';

import { Review } from '../models/review.model';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  name: string;
  comment: string;

  reviewsCollection: Review[] = [
    {
      name: "Anonym",
      review: "Site is so good, i found the film that i wanted to watch for a long time."
    },
    {
      name: "Anonym",
      review: "Visited site for the first time, but experience is perfect. I'll definetely use it again."
    }
  ]

  Submit($event: any) {
    this.reviewsCollection.push(
      {
        name: this.name,
        review: this.comment
      }
    );

    this.name = "";
    this.comment = "";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
