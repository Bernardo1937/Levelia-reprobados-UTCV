import { Component } from '@angular/core';
import { FavoriteService } from '../../app/favorite.service';  // Importamos el servicio

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  favoriteGames: any[] = [];

  constructor(private favoriteService: FavoriteService) {
    this.favoriteGames = this.favoriteService.getFavoriteGames();  // Obtenemos los favoritos del servicio
  }
}
