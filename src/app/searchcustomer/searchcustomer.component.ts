import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global';

@Component({
  selector: 'app-searchcustomer',
  templateUrl: './searchcustomer.component.html',
  styleUrls: ['./searchcustomer.component.scss']
})
export class SearchcustomerComponent implements OnInit {

  tableRows: any = []; // array to place the json data
  searchText;
  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
    this.globalService.getJsonData('customerInfo').subscribe(data => {
      this.tableRows = data['customerInfo'];
    });
  }

}
