import { Component, OnInit, Input } from '@angular/core';
import { BromasService } from '../bromas.service';
import { Joke } from '../joke/joke.model';

interface Ijoke {
  punchline: string;

  setup: string;
  hide: boolean;
}

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css'],
})
export class JokeComponent implements OnInit {
  @Input() jokee!: Joke;

  constructor(private BromasService: BromasService) {}

  ngOnInit(): void {}

  TargetedJoke(jokePlot: string, punchline: string) {
    // probably would be better to identify a joke by a unique ID instead

    let TargetedJoke: Joke = new Joke(jokePlot, punchline, true);
    // newDeletedJoke.emit(TargetedJoke);
    this.BromasService.DeleteJoke(TargetedJoke);
  }
}
