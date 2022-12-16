import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { UsersComponent } from './user/users/users.component';
import { HeaderComponent } from './header/header/header.component';
import { BannerComponent } from './banner/banner/banner.component';
import { GalleryComponent } from './gallery/gallery/gallery.component';
import { TugasComponent } from './tugas/tugas/tugas.component';
import { PbbComponent } from './pbb/pbb/pbb.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoComponent } from './todo/todo/todo.component';
import { MenuComponent } from './menu/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    UsersComponent,
    HeaderComponent,
    BannerComponent,
    GalleryComponent,
    TugasComponent,
    PbbComponent,
    TodoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
