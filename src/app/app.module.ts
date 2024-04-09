import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AgregarAnimalComponent } from './agregar-animal/agregar-animal.component';
import { MostrarMujerComponent } from './mostrar-mujer/mostrar-mujer.component';
import { MostrarHombreComponent } from './mostrar-hombre/mostrar-hombre.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AgregarAnimalComponent,
    MostrarMujerComponent,
    MostrarHombreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
