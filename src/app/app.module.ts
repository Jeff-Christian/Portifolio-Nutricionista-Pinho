import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PathDivComponent } from './components/path-div/path-div.component';
import { ApresentationComponent } from './components/apresentation/apresentation.component';
import { ContactComponent } from './components/contact/contact.component';
import { ObjetiveComponent } from './components/objetive/objetive.component';
import { BookComponent } from './components/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PathDivComponent,
    ApresentationComponent,
    ContactComponent,
    ObjetiveComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
