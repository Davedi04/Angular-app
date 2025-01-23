import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {

  transform(products: any[], sortOrder: string): any[] {
    if (!products || !sortOrder) {
      return products;
    }

    return products.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else if (sortOrder === 'desc') {
        return b.price - a.price;
      } else {
        return 0;
      }
    });
  }
}
