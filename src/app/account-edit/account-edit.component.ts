import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {
  account: any ={};

  sub: subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private carService: CarService,
              private giphyService: GiphyService) {
               }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
     const id = params['id'];
     if (id) {
       this.AccountService.get(id).subscribe((account: any) => {
         if (account) {
           this.account = account;
           this.account.href = account._links.self.href;
           this.giphyService.get(account.name).subscribe(url => account.giphyUrl = url);
         } else {
           console.log(`account with id '${id}' not found, returning to list`);
           this.gotoList();
         }
       });
     }
   });
 }

 ngOnDestroy() {
   this.sub.unsubscribe();
 }

 gotoList() {
   this.router.navigate(['/account-list']);
 }

 save(form: NgForm) {
   this.accountService.save(form).subscribe(result => {
     this.gotoList();
   }, error => console.error(error));
 }

 remove(href) {
   this.accountService.remove(href).subscribe(result => {
     this.gotoList();
   }, error => console.error(error));
 }
}
