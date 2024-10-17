import { AddressService } from './../../Core/Service/address.service';
import { UserService } from './../../Core/Service/user.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-viewdata',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.scss']
})
export class ViewdataComponent {


  userItems: any = {};
  userAddress :any ={}
  selectedImage:string ="";
  constructor(private _AddressService:AddressService) { }


  loaduserItems(): void {
    const userData = localStorage.getItem('userData');

    const storedImage = localStorage.getItem('userImage'); 

    this.userItems = userData ? JSON.parse(userData) : {};
    this.selectedImage = storedImage ? storedImage : '../../../assets/Image/man.png';
  
  }

  getAddress() {
    this._AddressService.getAddress().subscribe(
      {
        next: (res) => {
          this.userAddress= res.data[0];
        }

      })
  }



  ngOnInit(): void {
    this.loaduserItems();
    this.getAddress()
  }
}
