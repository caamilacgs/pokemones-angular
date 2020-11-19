import { Component, OnInit } from '@angular/core';
import { PokemonesService } from '../../services/pokemones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public pokemonesService: PokemonesService
  ) {


  }

  ngOnInit(): void {
    this.loadPokemon(1);
  }

  loadPokemon(id: number) {
    this.pokemonesService.getpokemon(id)
      .subscribe(
        (result) => {
          console.log(result);

        }
      );
  }
}
