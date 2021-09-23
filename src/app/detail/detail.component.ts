import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoinServices } from 'src/service/coinservices';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  Id;

  coinSelected = {
    id: 0,
    s: '',//symboel
    n: "",// name
    gs: "", // galaxy score
    acr: 1, //ALTRank
    p: 0, //Price
    v: 0, //Volume (USD)
    sp: 0, //Tweet Spam
    sv: 0 //Social Volume
  }
  coin: any;
  topcoin: any;
  constructor(private services: CoinServices, private actroute: ActivatedRoute) { }
  ngOnInit(
  ) {
    this.Id = this.actroute.snapshot.paramMap.get('id');
    this.services.getCoins().subscribe(data => {
      this.coin = data;
      this.topcoin=this.coin.data
      let x = false;
     this.fiftytopcoin()
     this.select(x)


    },
      err => {
        console.log(err);
      }
    );
  }
  async select(x){
    let j = this.topcoin.length-1;
    for (let i = 0; i < j; i++) {
      if (parseInt(this.topcoin[i].id) == parseInt(this.Id)) {
        this.coinSelected.id = this.topcoin[i].id
        this.coinSelected.s = this.topcoin[i].s
        this.coinSelected.n = this.topcoin[i].n
        this.coinSelected.gs = this.topcoin[i].gs
        this.coinSelected.acr = this.topcoin[i].acr
        this.coinSelected.p = this.topcoin[i].p
        this.coinSelected.v = this.topcoin[i].v
        this.coinSelected.sp = this.topcoin[i].sp
        this.coinSelected.sv = this.topcoin[i].sv
        x = true
      }
    }
  }

  fiftytopcoin(){
    this.topcoin.sort((a, b) => {
     return b.gs - a.gs;
    })
  }

}
