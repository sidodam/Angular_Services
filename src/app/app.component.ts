import { Component, OnInit } from '@angular/core';
import { Joke } from './joke/joke.model';
import { BromasService } from './bromas.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BromasService],
})
export class AppComponent implements OnInit {
  title = 'my-project';

  jokes: Joke[] = [];

  constructor(private BromasService: BromasService) {}

  ngOnInit() {
    this.jokes = this.BromasService.jokes;
  }
}
