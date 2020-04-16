import { Component, Input } from '@angular/core';

@Component({
    selector: 'rating',
    templateUrl: 'rating.component.html',
    styles: [`
        .rating {
            color: red;
        }
        .glyphicon-star {
            color: orange;
        }
    `]
})
export class RatingComponent{
    @Input('rating-value') rating = 0;
    @Input() numOfReviews = 0;

    onClick(ratingValue){
        this.rating = ratingValue;
    }
}