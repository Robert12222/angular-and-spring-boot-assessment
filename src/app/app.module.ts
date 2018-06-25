import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AccountService } from './shared/account/account.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AccountListComponent } from './account-list/account-list.component';

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountEditComponent } from './account-edit/account-edit.component';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/car-list', pathMatch: 'full' },
  {
    path: 'account-list',
    component: AccountListComponent
  },
  {
    path: 'account-add',
    component: AccountEditComponent
  },
  {
    path: 'account-edit/:id',
    component: AccountEditComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    AccountEditComponent
  ],
  imports: [
    BrowserModule
    HttpClientModule
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
