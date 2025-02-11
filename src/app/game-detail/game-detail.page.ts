import { Component } from '@angular/core';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.page.html',
  styleUrls: ['./game-detail.page.scss'],
  standalone: false  // Se asegura de que el componente no sea standalone
})
export class GameDetailPage {
  game: any; // Aquí puedes almacenar el objeto del juego que se pasa como prop

  constructor() {}

  ngOnInit() {
    console.log(this.game); // Verifica que el objeto `game` está llegando correctamente
  }
}
