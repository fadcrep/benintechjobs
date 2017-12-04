import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ShareButtonsModule } from 'ngx-sharebuttons';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,             // (Required) for share counts
    HttpClientJsonpModule,        // (Optional) for linkedIn and tumblr share counts
    ShareButtonsModule.forRoot(),
    AuthModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
