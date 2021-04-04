import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-container-input-button',
  templateUrl: './container-input-button.component.html',
  styleUrls: ['./container-input-button.component.css']
})
export class ContainerInputButtonComponent implements OnInit {

  @Output() click = new EventEmitter<any>();
  @Input() label: string;

  variable: string;

  constructor() { }

  ngOnInit(): void {
  }

  updateData($event: Event) {
    $event.stopPropagation();
    console.log(this.label)
    if(this.label !== "[object MouseEvent]")
      this.click.emit(this.variable);
  }

}
