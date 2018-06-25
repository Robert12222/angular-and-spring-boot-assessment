import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/account/account.service';
import { GiphyService } from '../shared/giphy/giphy.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  cars: Array<any>;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getAll().subscribe(data => {
       this.accounts = data;
     });
   }
 }
