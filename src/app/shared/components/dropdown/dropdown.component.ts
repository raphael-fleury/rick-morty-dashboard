import { Component, ContentChild, ElementRef, Input, Renderer2, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  @ViewChild('menu') container!: ElementRef;
  @Input() controller!: HTMLElement
  @Input() top: string | undefined
  @Input() bottom: string | undefined 
  @Input() left: string | undefined
  @Input() right: string | undefined

  hidden = true

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      const isTarget = this.container.nativeElement.contains(e.target)
      const controllerIsTarget = (this.controller as any).contains(e.target)
      if (!isTarget && !controllerIsTarget) {
        this.hidden = true;
      }
    });
  }

  get style() {
    return `display: ${this.hidden ? 'none; ' : 'block; '}`
    + (this.top ? `top: ${this.top}; ` : '')
    + (this.bottom ? `bottom: ${this.bottom}; ` : '')
    + (this.left ? `left: ${this.left}; ` : '')
    + (this.right ? `right: ${this.right}; ` : '')
  }

  toggle() {
    this.hidden = !this.hidden
  }
}
