import { Component, OnInit } from '@angular/core';
import { UserPersonalDataService } from 'src/app/services/user-personal-data.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  public alldata: Array<any> = []

  constructor(private userData: UserPersonalDataService) {
    this.userData.getUserPersonalData().subscribe((resp:any) => {
      console.log(resp);
      this.alldata = resp;
    })
    console.log(this.alldata);
  }

  ngOnInit(): void {
  }

  eliminar(id: string){
    console.log(id);
    this.userData.deleteUserPersonalData(id).subscribe(() => status = 'Delete successful');
    this.ngOnInit();
  }
}
