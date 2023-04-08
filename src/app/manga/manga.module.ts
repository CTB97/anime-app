import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MangaComponent } from './manga/manga.component';



@NgModule({
  declarations: [
    MangaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MangaComponent
  ]
})
export class MangaModule { }
