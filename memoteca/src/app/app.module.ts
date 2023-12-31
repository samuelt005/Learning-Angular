import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateContentComponent } from './components/content/create-content/create-content.component';
import { FormsModule } from '@angular/forms';
import { ListContentComponent } from './components/content/list-content/list-content.component';
import { CardComponent } from './components/content/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteContentComponent } from './components/content/delete-content/delete-content.component';
import { EditContentComponent } from './components/content/edit-content/edit-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateContentComponent,
    ListContentComponent,
    CardComponent,
    DeleteContentComponent,
    EditContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
