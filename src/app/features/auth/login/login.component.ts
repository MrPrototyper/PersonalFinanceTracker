import { Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user.model';

@Component({
  standalone: true,
  selector: 'app-login-component',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnChanges{
  @Input() currentUser: User | null = null;
  @Output() login: EventEmitter<{ email: string, password: string }> = new EventEmitter<{ email: string, password: string }>();

  public form: FormGroup;
  private fb = inject(FormBuilder);
  private router = inject(Router);

  constructor() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  };

  public ngOnChanges(changes: SimpleChanges): void {
      if(changes['currentUser'] && changes['currentUser'].currentValue) {        
        this.router.navigate(['/dashboard']);
      }
  }

  onSubmit() {    
    if (this.form.valid) {      
      const { email, password } = this.form.value;      
      this.login.emit({ email: email, password: password });
    }
  }
}
