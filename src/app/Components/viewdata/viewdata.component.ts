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
  constructor(private _UserService: UserService) { }


  loaduserItems(): void {
    const userData = localStorage.getItem('userData');

    this.userItems = userData ? JSON.parse(userData) : {};
  }

  getAddress() {
    this._UserService.getAddress().subscribe(
      {
        next: (res) => {
          this.userAddress= res.data;
        }

      })
  }

  ngOnInit(): void {
    this.loaduserItems();
    this.getAddress()
  }
}
