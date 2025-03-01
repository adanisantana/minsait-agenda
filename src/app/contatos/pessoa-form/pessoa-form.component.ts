
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pessoa-form',
  standalone:true,
  imports:[FormsModule],
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
