import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appScrollNearEnd]'
})
export class ScrollNearEndDirective implements OnInit {
  @Input() threshold = 120;
  @Output() nearEnd: EventEmitter<void> = new EventEmitter<void>();

  private window!: Window;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.window = window;
    setTimeout(() => {
      if (this.window.innerHeight >= this.window.document.documentElement.scrollHeight) {
        this.nearEnd.emit();
      }
    }, 100)
  }

  @HostListener('window:scroll', ['$event.target'])
  windowScrollEvent(event: KeyboardEvent) {
    const pageHeight = this.window.document.documentElement.scrollHeight;
    const elementHeight = this.element.nativeElement.scrollHeight;
    const currentScrolledY = this.window.scrollY;
    // height of opened window - shrinks if console is opened
    const innerHeight = this.window.innerHeight;
    const spaceAboveElement = pageHeight - elementHeight;
    const distanceToBottom = elementHeight - innerHeight - currentScrolledY + spaceAboveElement;

    if (distanceToBottom < this.threshold) {
      this.nearEnd.emit();
    }
  }
}