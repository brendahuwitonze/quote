import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  quote:Quote[]=[
    new Quote (1, 'Education is the key to successs', 'Nelson mandela','Brendah',new Date(2020,3,14),0,0),
    new Quote(2,'Giving up is a birth of regrets','Grace','zilfa',new Date(2019,6,9),0,0),
    new Quote(3,'Get new Phone Case','Diana has her birthday coming up soon','sisse',new Date(2022,1,12),1,2),
    new Quote(4,'Get Dog Food','Pupper likes expensive snacks','diane',new Date(2019,0,18),3,5),
    new Quote(5,'Solve math homework','Damn Math','Thiery',new Date(2019,2,14),5,8),
    new Quote(6,'Plot my world domination plan','Cause I am an evil overlord','Uwase',new Date(2030,3,14),6,7),
  ];
  toggleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].quote}?`)

      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quote.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quote.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}