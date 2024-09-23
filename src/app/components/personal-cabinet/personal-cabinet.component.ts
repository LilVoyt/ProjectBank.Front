import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { PersonalCabinetService } from '../../services/personal-cabinet.service';
import { Account } from '../../models/account';

@Component({
  selector: 'app-personal-cabinet',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './personal-cabinet.component.html',
  styleUrls: ['./personal-cabinet.component.css']  // Changed styleUrl to styleUrls
})
export class PersonalCabinetComponent implements OnInit {
  account: Account | null = null;

  constructor(private personalCabinetService: PersonalCabinetService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const login = this.route.snapshot.paramMap.get('id');
    if (login) {
      this.personalCabinetService.getAccountById(login).subscribe(account => {
        this.account = account;
      });
    }
  }
}
