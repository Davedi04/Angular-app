import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName',
  standalone: true,
})
export class FilterByNamePipe implements PipeTransform {

  transform(products: any[], searchText: string): any[] {
    if (!products || !searchText) {
      return products; // Retourne tous les produits si aucun terme de recherche n'est fourni
    }

    const lowerCaseSearchText = searchText.toLowerCase();

    return products.filter(product =>
      product.name.toLowerCase().includes(lowerCaseSearchText)
    );
  }

}
