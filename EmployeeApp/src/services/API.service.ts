import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient ,HttpHeaders} from "@angular/common/http";
import { Empdatas } from "src/Models/EmpData";

@Injectable({
  providedIn:'root'
})
export class APIService{
  APiBase:String="http://sbsproject.kalkaprasad.com/index.php/EmpAPI/";

   httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    })
  };


  constructor(private httpclient:HttpClient)
  {

  }

  // Save Data into Data Base..

 saveEmpData(empdata:Empdatas):Observable<any>{

  return this.httpclient.post(this.APiBase+"empSave",empdata,this.httpOptions);


 }

 // Get Data of Employees Record

 getEmpData():Observable<any>{


   return this.httpclient.get(this.APiBase+"getData");
 }

}
