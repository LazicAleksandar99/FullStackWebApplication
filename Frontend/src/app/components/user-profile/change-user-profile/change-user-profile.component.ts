import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetails, UserUpdate } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-change-user-profile',
  templateUrl: './change-user-profile.component.html',
  styleUrls: ['./change-user-profile.component.css']
})
export class ChangeUserProfileComponent implements OnInit {
  user: UserDetails;
  updatedUser: UserUpdate;
  id: any;
  selectedFile: File
  updateForm: FormGroup ;

  constructor(private profileService: UserService,
              private fb: FormBuilder,
              private route: Router,
              private toastr: ToastrService) {

                this.createUpdateForm();
  }

  ngOnInit() {
    this.getUserDetails();

  }

  createUpdateForm() {
    this.updateForm = this.fb.group({
      username: [null,Validators.required],
      email: [null,[Validators.required,Validators.email]],
      firstname: [null,[Validators.required,Validators.minLength(3)]],
      lastname: [null,[Validators.required,Validators.minLength(3)]],
      birthday: [null,[Validators.required]],
      address: [null,[Validators.required]],
      oldpassword: [null,Validators.minLength(8)],
      newpassword: [null,Validators.minLength(8)],
    });

  }


  getUserDetails(){
    this.id = localStorage.getItem('id');

    this.profileService.getUserDetails(this.id).subscribe(
      data=>{
        this.user = data;
        this.updateForm.patchValue({
          username: this.user.username,
          email: this.user.email,
          firstname: this.user.firstname,
          lastname: this.user.lastname,
          address: this.user.address,
        });
        this.updateForm.controls['birthday'].setValue(formatDate(this.user.birthday,'yyyy-MM-dd','en'));

      }, error =>{
        console.log('Profile change user details error')
      }

    );
  }

  onFileChanged(imageInput: any){
    this.selectedFile = imageInput.files[0];
  }

  SaveChanges(): void {
    //ice prvo update ostalo pa onda update slike

    this.profileService.updateUserDetails(this.id, this.userData()).subscribe(
      data=>{
        this.toastr.success('Your profile has been successfully updated', 'Succes!', {
          timeOut: 3000,
          closeButton: true,
        });
        if(this.selectedFile){
          let formData = new FormData();
          formData.append("myfile",this.selectedFile);
          this.profileService.updateUserPhoto(this.id,formData).subscribe(
            data=>{
              this.toastr.success('Your profile has been successfully updated', 'Succes!', {
                timeOut: 3000,
                closeButton: true,
              });
            }, error => {
              this.toastr.error(error.error.errorMessage, 'Error!', {
                timeOut: 3000,
                closeButton: true,
              });
            }


          );
        }
        this.route.navigateByUrl('/home/dashboard')
      }, error=> {
        this.toastr.error(error.error.errorMessage, 'Error!', {
          timeOut: 3000,
          closeButton: true,
        });
      }
    )


  }

  userData(): UserUpdate {
    return this.updatedUser = {
        username: this.username.value,
        email: this.email.value,
        firstname: this.firstname.value,
        lastname: this.lastname.value,
        birthday: this.updateForm.value['birthday'],
        address: this.address.value,
        oldpassword: this.oldpassword.value,
        newpassword: this.newpassword.value
    };
  }


  handleAddressChange(address: any) {
  }

  get username() {
    return this.updateForm.get('username') as FormControl;
  }
  get email() {
    return this.updateForm.get('email') as FormControl;
  }
  get firstname() {
    return this.updateForm.get('firstname') as FormControl;
  }
  get lastname() {
    return this.updateForm.get('lastname') as FormControl;
  }
  get address() {
    return this.updateForm.get('address') as FormControl;
  }
  get oldpassword() {
      return this.updateForm.get('oldpassword') as FormControl;
  }
  get newpassword() {
      return this.updateForm.get('newpassword') as FormControl;
  }


}
