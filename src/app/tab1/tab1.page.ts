import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  showSearch = false;
  searchQuery = '';
  selectedPlatform: string = '';
  priceRange: string = '';
  filteredGames: any[] = [];
  
  // Lista de juegos con precios simulados y plataformas
  allGames = [
    { name: 'Juego 1', price: 15.99, platform: 'PC', image: 'https://via.placeholder.com/150', isFavorite: false },
    { name: 'Juego 2', price: 30.99, platform: 'PS5', image: 'https://via.placeholder.com/150', isFavorite: false },
    { name: 'Juego 3', price: 49.99, platform: 'Xbox', image: 'https://via.placeholder.com/150', isFavorite: false },
    { name: 'Juego 4', price: 22.50, platform: 'PC', image: 'https://via.placeholder.com/150', isFavorite: false },
    { name: 'Juego 5', price: 60.00, platform: 'PS5', image: 'https://via.placeholder.com/150', isFavorite: false },
    { name: 'Juego 6', price: 110.00, platform: 'Xbox', image: 'https://via.placeholder.com/150', isFavorite: false }
  ];

  cart: any[] = [];

  constructor() {
    this.filteredGames = [...this.allGames]; // Inicializamos con todos los juegos
  }

  toggleSearchBar() {
    this.showSearch = !this.showSearch;
    this.searchQuery = ''; // Reset search query when toggling
    this.filteredGames = [...this.allGames]; // Reset filtered games
  }

  updateSearchResults() {
    // Filtrar los resultados basados en la búsqueda
    this.filteredGames = this.allGames.filter(game =>
      game.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.applyFilters();
  }

  applyFilters() {
    // Filtrar por plataforma
    if (this.selectedPlatform) {
      this.filteredGames = this.filteredGames.filter(game => game.platform === this.selectedPlatform);
    }

    // Filtrar por rango de precios
    if (this.priceRange) {
      let [minStr, maxStr] = this.priceRange.split('-');
      let min = parseFloat(minStr); // Convertir min a un número
      let max = maxStr ? parseFloat(maxStr) : Infinity; // Convertir max a un número o usar Infinity si no hay valor
      this.filteredGames = this.filteredGames.filter(game => game.price >= min && game.price <= max);
    }
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
    // Aquí puedes agregar la lógica para guardar en persistencia (localStorage, base de datos, etc.)
  }

  removeFavorite(game: any) {
    console.log(`Juego eliminado de favoritos: ${game.name}`);
    // Aquí puedes agregar la lógica para eliminar de favoritos en persistencia
  }

  viewCart() {
    console.log(this.cart);
    // Aquí puedes redirigir a la página de carrito
  }
}
