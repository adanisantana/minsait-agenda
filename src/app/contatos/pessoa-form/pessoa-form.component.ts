
import { Component } from '@angular/core';
import { FormBuilder, FormGroup,  ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pessoa-form',
  standalone:true,
  imports:[ReactiveFormsModule],

  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.scss'],
})
export class PessoaFormComponent {
  form : FormGroup;
  constructor(private formBuider: FormBuilder){
    this.form = this.formBuider.group({
      name:[null],
      endereco:[null]
    });
  }
}
