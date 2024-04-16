import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncodingService {

  constructor() {
  }

  encodeToBase64(normalString: string): string {
    return btoa(normalString);
  }

  decodeFromBase64(base64String: string): string {
    return atob(base64String);
  }

}
