import { Component, OnInit } from '@angular/core';
import { CoinServices } from 'src/service/coinservices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  image: "https://dkhpfm5hits1w.cloudfront.net/terra.png";

  constructor(private services: CoinServices, private router: Router,) { }
  coin: any;
  topcoin:any;
  j=0;
  ngOnInit(): void {

    this.services.getCoins().subscribe(data => {
      this.coin = data;
      this.topcoin=this.coin.data
     this.fiftytopcoin()
    },
      err => {
        console.log(err);
      }
    );
  }
  fiftytopcoin() {
    this.topcoin.sort((a, b) => {
     return b.gs - a.gs;
    })
  //  this.router.navigate(['detail/', id]);
  }
  coindetail(id) {
   this.router.navigate(['detail/', id]);
  }

}
