import { Component, OnInit } from '@angular/core';
import { Credit } from '../../models/credit';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CreditService } from '../../services/credit.service';
import { jwtDecode } from 'jwt-decode';
import { JwtPayloadUpgraded } from '../../models/jwtPayloadUpgraded';

@Component({
  selector: 'app-credit-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './credit-management.component.html',
  styleUrl: './credit-management.component.css'
})
export class CreditManagementComponent implements OnInit {
  credits: Credit[] = [];
  decodedToken :JwtPayloadUpgraded;

  constructor(private router: Router, private creditService: CreditService) {
    const token = localStorage.getItem('token')??'';
    this.decodedToken = jwtDecode<JwtPayloadUpgraded>(token);
  }

  ngOnInit(): void {
    this.loadCredits();
  }

  loadCredits(): void {
    this.creditService.getCredits(this.decodedToken?.certserialnumber).subscribe(credits => {
      this.credits = credits;
      console.log(credits, "here")
    })
  }

  createCredit(): void {
    this.router.navigate([`/create-credit`]);
  }
}