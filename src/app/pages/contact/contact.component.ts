import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigatorComponent } from '../../components/navigator/navigator.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, NavigatorComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
