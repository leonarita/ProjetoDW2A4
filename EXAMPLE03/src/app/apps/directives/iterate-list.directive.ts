import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor][myForFrom]'
})
export class IterateListDirective {

  @Input()
  set myForFrom(collection: Array<any>) {

    if(Array.isArray(collection)) {
      collection.forEach((item, index) => {
        this.view.createEmbeddedView(this.template, {$implicit: item, index})
      })
    }
  }

  constructor(private view: ViewContainerRef, private template: TemplateRef<any>) { }

}
