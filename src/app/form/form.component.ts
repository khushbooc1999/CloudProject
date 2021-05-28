import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 alert:boolean = false;
  title='New Registration';
  form : FormGroup;
  constructor(
    private fb : FormBuilder,
    private auth:AuthService) {

      // this.form=this.fb.group({
      //   name:['', [Validators.required]]
      // })
     }
  ngOnInit(): void {

    this.form = this.fb.group(
      {
        name : [''],
        email : [''],
        department:[''],
        designation:[''],
        number:[''],
        vm:[''],
        os:[''],
        storage:['']
      }

    )
  }

  submit()
  {
    console.log('Submitted');
    console.log(this.form.value);
    this.auth.send_post_request(this.form.value).subscribe();
    this.alert=true;
    this.form.reset({});
  }
 closeAlert()
 {
   this.alert=false;
 }
}
