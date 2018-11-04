import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PopularidadePage } from '../pages/popularidade/popularidade';
import { LancamentoPage } from '../pages/lancamento/lancamento';
import { GeneroPage } from '../pages/genero/genero';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CadastrarFilmePage } from '../pages/cadastrar-filme/cadastrar-filme';
import { FilmesPage } from '../pages/filmes/filmes';

@NgModule({
  declarations: [
    MyApp,
    PopularidadePage,
    LancamentoPage,
    GeneroPage,
    TabsPage,
    CadastrarFilmePage,
    FilmesPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PopularidadePage,
    LancamentoPage,
    GeneroPage,
    TabsPage,
    CadastrarFilmePage,
    FilmesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
