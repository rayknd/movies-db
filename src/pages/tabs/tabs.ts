import { Component } from '@angular/core';

import { LancamentoPage } from '../lancamento/lancamento';
import { PopularidadePage } from '../popularidade/popularidade';
import { GeneroPage } from '../genero/genero';
import { FilmesPage } from '../filmes/filmes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LancamentoPage;
  tab2Root = PopularidadePage;
  tab3Root = GeneroPage;
  tab4Root = FilmesPage

  constructor() {

  }
}
