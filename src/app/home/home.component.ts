import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalService } from '../services/global';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showForm: boolean;

  formModel: any;

  rowIndex: number = 0;

  //For regionCode select
  regnCode; 
  regionCode: any[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
    { value: '4', viewValue: '4' },
    { value: '5', viewValue: '5' },
    { value: '6', viewValue: '6' },
    { value: '7', viewValue: '7' },
    { value: '8', viewValue: '8' }
  ];
  tsn;
  custName;
  custEmail;

  packages;
  packageList: string[] = ['Sports', 'Entertainment', 'Movies', 'Music'];
  packageObj = {
    Sports: 1,
    Entertainment: 2,
    Movies: 3,
    Music: 4
  };

  addons;
  addonList: string[] = ['PrimeVideo', 'Netflix', 'Hulu', 'YouTube'];
  addonObj = {
    PrimeVideo: 1,
    Netflix: 2,
    Hulu: 3,
    YouTube: 4
  };


  tableRows: any = []; // array to place the json data
  tableCols: any = [];

  panelOpenState: boolean = false;

  @ViewChild('custDetails') custDetails;

  constructor(private globalService: GlobalService, private formBuilder: FormBuilder) {

  }


  ngOnInit(): void {
    this.globalService.getJsonData('customerInfo').subscribe(data => {
      this.tableRows = data['customerInfo'];
    });
    this.resetFormdata();
  }

  custForm() {
    this.showForm = true;
  }
  tableClk(){
    this.rowIndex = -1;
  }

  onSubmit(event) {
    //creating the structure of jason object for new entries
    let Obj = {
      "regionCode": this.regnCode.value,
      "tsn": this.tsn.value,
      "personalInfo": {
        "name": this.custName.value,
        "email": this.custEmail.value,
        "img": "https://webstockreview.net/images/smiley-face-clip-art-human-face-2.png"
      },
      "package": this.packages.value.join(","),
      "addOnService": this.addons.value.join(",")
    }
    //creating an array for new row
    let newRow = [];
    newRow.push(Obj); //push the entries to array
    this.tableRows = newRow.concat(this.tableRows); //append the entries ti the row top

    if (!this.panelOpenState) {
      this.panelOpenState = true;
    }
    this.onClear();

  }
  onClear(){
    this.showForm = false;
    this.resetFormdata();
  }
  resetFormdata() {
    this.regnCode = new FormControl();
    this.tsn = new FormControl();
    this.custName = new FormControl();
    this.custEmail = new FormControl();
    this.packages = new FormControl();
    this.addons = new FormControl();
  }
}
