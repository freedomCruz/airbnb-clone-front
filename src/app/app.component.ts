import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from "primeng/button";
import { FonstAwesomeIcons } from './shared/font-awesome-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  faIconLibrary: FaIconLibrary = inject(FaIconLibrary)

  ngOnInit(): void {
      this.initFontAwesome();
  }

  private initFontAwesome() {
    this.faIconLibrary.addIcons(...FonstAwesomeIcons)
  }

  
}
