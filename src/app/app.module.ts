import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WidlcardComponent } from './widlcard/widlcard.component';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    HeaderComponent,
    FooterComponent,
    WidlcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
