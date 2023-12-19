import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);

  getData(startIndex: number, endIndex: number): string[] {
    return this.data.slice(startIndex, endIndex);
  }
}
