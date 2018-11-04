import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarFilmePage } from './cadastrar-filme';

@NgModule({
  declarations: [
    CadastrarFilmePage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarFilmePage),
  ],
})
export class CadastrarFilmePageModule {}
