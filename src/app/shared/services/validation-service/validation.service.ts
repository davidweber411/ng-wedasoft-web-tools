import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() {
  }

  isValidJsonArrayOfStringOrNumber(string: string): boolean {
    try {
      const json = JSON.parse(string);
      return Array.isArray(json) && json.every(item => typeof item === 'string' || typeof item === 'number');
    } catch (error) {
      return false;
    }
  }

}
