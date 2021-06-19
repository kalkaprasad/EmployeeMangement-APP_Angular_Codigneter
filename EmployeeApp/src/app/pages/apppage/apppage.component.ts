import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/services/API.service';
import { Empdatas} from 'src/Models/EmpData';


@Component({
  selector: 'app-apppage',
  templateUrl: './apppage.component.html',
  styleUrls: ['./apppage.component.scss'],
})
export class ApppageComponent implements OnInit {

  public check: boolean = true;
   listOfEmpdata!:Empdatas[];
   name!:String;
   status!:String;
  constructor(public Apiservices: APIService) {}


  ngOnInit() {
    this.Apiservices.getEmpData()
    .subscribe(data=> {
        this.listOfEmpdata=data;
        console.log("Test Data"+data);



    });


  }

  saveEmpData(datas:any)
  {
    var emDataSave= new Empdatas();
    emDataSave.enrolNo=datas.empid;
    emDataSave.name=datas.name;
    emDataSave.occupation=datas.occu;

    this.Apiservices.saveEmpData(emDataSave).subscribe(
    data=>{
      this.status=data;
      console.log(data);
    }
    )
    // name:String=data.name;

    // console.log(datas.name);
    if(this.status=="success")
    {
       console.log("Data Submited Successfully");
    }
    else{
      console.log("Data not ");
    }


  }
}
