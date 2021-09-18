import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dropdown-but',
  templateUrl: './dropdown-but.component.html',
  styleUrls: ['./dropdown-but.component.css']
})

export class DropdownButComponent {

  constructor(private elem: ElementRef) { }

  isActive: boolean = false;

  name:string = "Usuario";
  logout_text:string = "Cerrar Sesion";

  roles:string[] = ["admin","usuario"];



  @HostListener("document:click", ['$event'])
  clickout(event: Event) {
    if (!this.elem.nativeElement.contains(event.target))
      this.isActive = false;
  }


  clickInside() {
    this.isActive = !this.isActive;
  }
}