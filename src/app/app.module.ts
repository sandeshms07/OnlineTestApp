import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResultComponent } from './result/result.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    QuizComponent,
    NavbarComponent,
    ResultComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
