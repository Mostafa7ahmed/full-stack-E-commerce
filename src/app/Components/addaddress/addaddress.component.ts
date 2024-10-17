import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressService } from 'src/app/Core/Service/address.service';
import { ConfirmService } from 'src/app/Core/Service/confirm.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-addaddress',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './addaddress.component.html',
  styleUrls: ['./addaddress.component.scss']
})
export class AddaddressComponent implements OnInit {
  constructor(private _AddressService: AddressService, private _ConfirmService: ConfirmService) { }
  userAddress: any[] = [];
  isloading: boolean = false;

  addAddressForm = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    details: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    city: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.minLength(11),
    ]),


  });

  addAddress(addaddres :FormGroup ){
    if (addaddres.valid){

      this._AddressService.addAddress(addaddres.value).subscribe({
        next :(res)=>{
          console.log(addaddres)
          this.isloading = true
          this.getAddress()
          this.togglePopup();

        }
      })
    }
  }

  getAddress() {
    this._AddressService.getAddress().subscribe(
      {
        next: (res) => {
          this.userAddress = res.data;
        }

      })
  }

  deleteAddress(id: string) {
    this._ConfirmService.confirmDeletion().then((isConfirmed) => {
      if (isConfirmed) {
        this._AddressService.deleteAddress(id).subscribe(
          (response) => {
            this.userAddress = this.userAddress.filter(item => item._id !== id);

            this.getAddress();
            Swal.fire({
              title: "تم الحف بنجاج",
              icon: "success"
            });
          },
          (error) => {
            Swal.fire({
              text: "حدث خطاء غير متوقع",
              icon: "error"
            });
          }
        );
      }
    });
  }

  @ViewChild('popup') popup: ElementRef | undefined;

  togglePopup() {
    if (this.popup) {
      this.popup.nativeElement.classList.toggle('show');
    }
  }

  ngOnInit(): void {
    this.getAddress()

  }
}
