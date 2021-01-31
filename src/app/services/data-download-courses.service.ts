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
}
