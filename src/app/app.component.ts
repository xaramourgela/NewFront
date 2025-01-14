import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { AdminHomeComponent } from "./pages/admin/admin-home/admin-home.component";
import { LoginComponent } from "./pages/login/login.component";
import { NgIf } from '@angular/common';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { AuthService } from './services/auth/auth.service';
import { FooterComponent } from "./shared/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdminHomeComponent, LoginComponent, NgIf, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Technico';
  showFooter = true;

  constructor(private router: Router, private authService: AuthService) {}


	  currentRoute: string = '';
	  hiddenNavbarRoutes: string[] = ['/login', '/signup']; // Navbar δε θα εμφανίζεται εδώ
	  hiddenFooterRoutes: string[] = ['/login', '/signup', '/create-repair']; // Footer δε θα εμφανίζεται εδώ
    
	  ngOnInit(): void {
		// Ακούμε για αλλαγές στη διαδρομή
		this.router.events.subscribe(event => {
		  if (event instanceof NavigationEnd) {
			this.currentRoute = event.urlAfterRedirects;
		  }
		});
  }
}
