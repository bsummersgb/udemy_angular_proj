import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
  selector: '[autoGrow]',
  host: {
    '(focus)': 'onFocus()', // The key is the event. The value is the eventHandler.
    '(blur)': 'onBlur()' // '(blur)' is the event name. 'onFocus()' is a method in the AutoGrowDirective class.
  }
})

export class AutoGrowDirective {
  constructor(private el:ElementRef, private renderer: Renderer) {

  }
  onFocus() {
    this.renderer.setElementStyle(this.el.nativeElement, 'width', '20em');
  }
  onBlur(){
    this.renderer.setElementStyle(this.el.nativeElement, 'width', '120px');
  }
}
