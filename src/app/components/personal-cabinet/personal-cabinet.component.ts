import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { PersonalCabinetService } from '../../services/personal-cabinet.service';
import { Account } from '../../models/account';

@Component({
  selector: 'app-personal-cabinet',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './personal-cabinet.component.html',
  styleUrl: './personal-cabinet.component.css'
})
export class PersonalCabinetComponent {

  account: Account | null = null;

  
  constructor(private personalCabinetService: PersonalCabinetService, private route: ActivatedRoute){
    
  }
  ngOnInit() : void {
    const login = this.route.snapshot.paramMap.get('id');
    if(login){
      this.personalCabinetService
    .getAccountById(login).subscribe(account => {
      this.account = account;
    })
  }
  }
}
