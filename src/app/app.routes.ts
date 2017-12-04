import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeRoutes } from './home/home.routes';
import { AuthRoutes as routes } from './auth/auth.routes';

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        RouterModule.forRoot(HomeRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
