import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.scss']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  upvote() {

    this.quote.upvote = this.quote.upvote + 1;

  }
  downvote() {

    this.quote.downvote = this.quote.downvote + 1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
