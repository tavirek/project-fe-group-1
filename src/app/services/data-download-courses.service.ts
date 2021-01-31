import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataDownloadCoursesService {

  private _selectedCoursesID: number[] = [];

  get selectedCoursesID(): number[] {
    return this._selectedCoursesID;
  }

  set selectedCoursesID(value: number[]) {
    this._selectedCoursesID = value;
  }

  clearCoursesAfterSubmit(): void {
    this._selectedCoursesID = [];
  }

  handleCheckboxClick(id: number, value: boolean): void {
    value === true ? this._selectedCoursesID.push(id) : this._selectedCoursesID = this._selectedCoursesID.filter(x => x !== id);
    console.log(this._selectedCoursesID);


    // TODO
    // 1 jesli value == true, to dopisz do tablicy
    // 2 jesli valie == false to usun element z tablicy
    // 3 pilnuj aby nie zduplikowac elementow w  tablicy



  }
}
