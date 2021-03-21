import { HeroesService } from './../../services/heroes.service';
import { Heroe } from './../../interfaces/heroes.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class HeroesComponent implements OnInit {

  heroe!: Heroe

  constructor( private activatedRoute: ActivatedRoute,
               private herosService: HeroesService,
               private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.herosService.getHeroePorId(id) )
      )
      //.subscribe( console.log);
      .subscribe( heroe => this.heroe = heroe);
  }

  regresar(){
    this.router.navigate(['/heroes/listado']);
  }



}



