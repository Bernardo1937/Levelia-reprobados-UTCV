import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favoriteGames: any[] = [];

  constructor() {}

  // Obtener los juegos favoritos
  getFavoriteGames() {
    return this.favoriteGames;
  }

  addFavorite(game: any) {
    this.favoriteGames.push(game);
    console.log('Juego agregado a favoritos:', game); // Verificación
  }
  
  removeFavorite(game: any) {
    const index = this.favoriteGames.indexOf(game);
    if (index > -1) {
      this.favoriteGames.splice(index, 1);
      console.log('Juego eliminado de favoritos:', game); // Verificación
    }
  }
}  
