import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from '@angular/router'
import { jwtDecode } from 'jwt-decode';
import { JwtPayloadUpgraded } from '../../models/jwtPayloadUpgraded';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    const token = localStorage.getItem('token')??'';
    const decoded = jwtDecode<JwtPayloadUpgraded>(token);
  }
}
