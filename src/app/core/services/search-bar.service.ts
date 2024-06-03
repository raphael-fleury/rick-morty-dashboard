import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {
  private _text = "";
  textChanged = new EventEmitter<string>();

  set text(value: string) {
    if (this._text !== value) {
      this._text = value;
      this.textChanged.emit(value)
    }
  }
}
