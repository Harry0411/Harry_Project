import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule, routingComponents } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LeftnavComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
