import { Component, EventEmitter , Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit {

  @Input()
  public placeholder:string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emitValue( value:string ): void {
    console.log("entra", value);

    this.onValue.emit( value );
  }

}
