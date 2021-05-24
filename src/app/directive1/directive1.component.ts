import { Component, Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: "[custom-attr]"
})

export class DemoDirective {
  constructor(element: ElementRef) {
    element.nativeElement.classList.add( "custom-class");    
 } 
}


@Directive({
  selector: "[highlight]"
})

export class appHighlight {
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  
  highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

@Directive({
  selector: "[inputHighlight]"
})

export class inputHighlight { 
  @Input() inputHighlight = '';
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.inputHighlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}


@Component({
  selector: 'app-directive1',
  templateUrl: './directive1.component.html',
  styleUrls: ['./directive1.component.css']
})
export class Directive1Component  {
  items = ['chicken', 'mutton', 'fish'];
  color = '';
}
