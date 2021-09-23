import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoinServices {

  // ceci est l'api url que j'ai travaillé avec vous devez le commenter
  apiUrl = 'https://api2.lunarcrush.com/v2/assets?data=market&type=fast&key=kfonjrsgithd7fzh1d7m9'

  //ceci est votre api url vous devez le decommenter
  // apiUrl="https://api2.lunarcrush.com/v2/assets?data=market&type=fast&key=65poucjn4jix84994qmajc  "
  constructor(private httpClient: HttpClient) {
  }

  public getCoins() {
    return this.httpClient.get<any[]>(this.apiUrl);
  }
}
