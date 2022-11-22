import { Component, OnInit } from '@angular/core';
import { Joke } from '../joke/joke.model';
import { BromasService } from '../bromas.service';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css'],
})
export class JokeFormComponent implements OnInit {
  constructor(private BromasService: BromasService) {}

  ngOnInit(): void {}

  CreateJoke(jokePlot: string, punchline: string) {
    this.BromasService.CreateJoke(jokePlot, punchline);
  }
}
