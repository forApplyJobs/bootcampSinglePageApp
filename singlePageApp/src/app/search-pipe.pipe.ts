
// filter.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe',
  standalone:true
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter((item) => {
      const lowercaseTitle = (item.title || '').toLowerCase();
      const lowercaseName = (item.name || '').toLowerCase();
      return lowercaseTitle.includes(searchText) || lowercaseName.includes(searchText);
    });
  }
}
