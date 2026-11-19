import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { SerieComponent } from './components/serie-component/serie-component';
import { PersonajesComponent } from './components/personajes-component/personajes-component';

const routes: Routes = [
  {path: "", component: HomeComponent },
  {path: "serie/:idserie", component: SerieComponent},
  {path: "personajes/:idserie", component: PersonajesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
