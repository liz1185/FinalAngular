import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  links = [
  { path:"home",
    desc:"Inicio",
    isIcon:false
  },
  { path:"products",
    desc:"Productos",
    isIcon:false
  },

  {path:"contact",
   desc: "Contacto",
   isIcon:false
  },
  {path:"cart",
   desc:"shopping_cart",
   isIcon:true
  },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
