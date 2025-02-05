import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  // Variables para manejar la búsqueda
  showSearch = false; // Para mostrar u ocultar la barra de búsqueda
  searchQuery = ''; // Para almacenar la consulta actual
  searchHistory: string[] = []; // Para almacenar el historial de búsqueda

  constructor() {}

  // Método para alternar la visibilidad de la barra de búsqueda
  toggleSearchBar() {
    this.showSearch = !this.showSearch;
  }

  // Método para actualizar el historial de búsqueda
  updateSearchHistory() {
    // Si la consulta no está vacía y no está repetida en el historial, agregarla al inicio
    if (this.searchQuery && !this.searchHistory.includes(this.searchQuery)) {
      this.searchHistory.unshift(this.searchQuery);
      // Limitar el historial a 5 elementos
      if (this.searchHistory.length > 5) {
        this.searchHistory.pop(); // Eliminar el último elemento si excede el límite
      }
    }
  }

  // Método para seleccionar una búsqueda del historial
  selectSearch(item: string) {
    this.searchQuery = item;
  }
}
