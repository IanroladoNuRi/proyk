import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownButComponent } from './components/dropdown-but/dropdown-but.component';
import { GridLayoutComponent } from './components/grid-layout/grid-layout.component';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmpleadoformComponent } from './components/empleadoform/empleadoform.component';
import { VaccinationformComponent } from './components/vaccinationform/vaccinationform.component';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserlistComponent } from './components/userlist/userlist.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownButComponent,
    GridLayoutComponent,
    NavComponent,
    HeroComponent,
    FooterComponent,
    EmpleadoformComponent,
    VaccinationformComponent,
    UserComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
