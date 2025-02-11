import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GameDetailPage } from '../game-detail/game-detail.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone:false,
})
export class Tab1Page {
  showSearch = false;
  searchQuery = '';
  selectedPlatform: string = '';
  priceRange: string = '';
  filteredGames: any[] = [];

  // Juegos destacados para el carrusel
  featuredGames = [
    { name: 'Halo Infinite', image: 'https://via.placeholder.com/300x150' },
    { name: 'Forza Horizon 5', image: 'https://via.placeholder.com/300x150' },
    { name: 'Gears 5', image: 'https://via.placeholder.com/300x150' }
  ];

  // Lista de juegos con 3 por plataforma
  allGames = [
    { name: 'Resident Evil 4 (Remake)', price: 15.99, platform: 'PC', image: 'https://via.placeholder.com/150', isFavorite: false },
    { name: 'Brawlhalla', price: 22.50, platform: 'PC', image: 'https://via.placeholder.com/150', isFavorite: false },
    { name: 'Minecraft', price: 30.00, platform: 'PC', image: 'https://via.placeholder.com/150', isFavorite: false },
    { name: 'Resident Evil 5', price: 30.99, platform: 'PS5', image: 'https://via.placeholder.com/150', isFavorite: false },
    { name: 'EA SPORTS FC 25 - PS5', price: 60.00, platform: 'PS5', image: 'https://via.placeholder.com/150', isFavorite: false },
    { name: 'Final Fantasy VII Remake', price: 45.99, platform: 'PS5', image: 'https://via.placeholder.com/150', isFavorite: false },
    { name: 'Super Mario Odyssey', price: 49.99, platform: 'Nintendo', image: 'https://via.placeholder.com/150', isFavorite: false },
    { name: 'Zelda: Breath of the Wild', price: 59.99, platform: 'Nintendo', image: 'https://via.placeholder.com/150', isFavorite: false },
    { name: 'Animal Crossing: New Horizons', price: 39.99, platform: 'Nintendo', image: 'https://via.placeholder.com/150', isFavorite: false },
    { name: 'Halo Infinite', price: 50.99, platform: 'Xbox', image: 'https://via.placeholder.com/150', isFavorite: false },
    { name: 'Forza Horizon 5', price: 60.00, platform: 'Xbox', image: 'https://via.placeholder.com/150', isFavorite: false },
    { name: 'Gears 5', price: 40.00, platform: 'Xbox', image: 'https://via.placeholder.com/150', isFavorite: false }
  ];

  cart: any[] = [];

  constructor(private modalController: ModalController) {
    this.filteredGames = [...this.allGames];
  }

  toggleSearchBar() {
    this.showSearch = !this.showSearch;
    this.searchQuery = '';
    this.filteredGames = [...this.allGames];
  }

  updateSearchResults() {
    this.filteredGames = this.allGames.filter(game =>
      game.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.applyFilters();
  }

  applyFilters() {
    let games = [...this.allGames];

    if (this.selectedPlatform) {
      games = games.filter(game => game.platform === this.selectedPlatform);
    }

    if (this.priceRange) {
      let [minStr, maxStr] = this.priceRange.split('-');
      let min = parseFloat(minStr) || 0;
      let max = maxStr ? parseFloat(maxStr) : Infinity;
      games = games.filter(game => game.price >= min && game.price <= max);
    }

    this.filteredGames = games;
  }

  toggleFavorite(game: any) {
    game.isFavorite = !game.isFavorite;
    if (game.isFavorite) {
      this.addFavorite(game);
    } else {
      this.removeFavorite(game);
    }
  }

  addFavorite(game: any) {
    console.log(`Juego añadido a favoritos: ${game.name}`);
  }

  removeFavorite(game: any) {
    console.log(`Juego eliminado de favoritos: ${game.name}`);
  }

  viewCart() {
    console.log(this.cart);
  }

  login() {
    console.log('Iniciar sesión...');
    // Aquí puedes redirigir a una página de login o realizar cualquier acción
  }

  async openGameDetail(game: any) {
    const modal = await this.modalController.create({
      component: GameDetailPage,
      componentProps: {
        game: game
      }
    });
    return await modal.present();
  }
}
