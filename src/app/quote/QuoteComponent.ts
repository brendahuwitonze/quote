import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  quote: Quote[] = [
    new Quote(1, 'Education is the key to successs', 'Nelson mandela', 'Brendah', new Date(2018,2,3), 0, 0),
    new Quote(2, 'Giving up is a birth of regrets', 'Grace', 'zilfa', new Date(2019, 12, 9), 0, 0),
    new Quote(3, 'Get new Phone Case', 'Diana has her birthday coming up soon', 'sisse', new Date(2022, 9, 12), 0, 0),
   
  ];
  toggleDetails(index) {
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].quote}?`);

      if (toDelete) {
        this.quote.splice(index, 1);
      }
    }
  }
  addNewQuote(quote) {
    let quoteLength = this.quote.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quote.push(quote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
