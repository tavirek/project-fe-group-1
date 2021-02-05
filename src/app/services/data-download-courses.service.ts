import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DataDownloadCoursesService {

  constructor(private router: Router) {
  }

  private _selectedCoursesID: number[] = [];
  private _mail: string;

  get mail(): string {
    return this._mail;
  }

  set mail(value: string) {
    this._mail = value;
  }

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
    console.log(this._selectedCoursesID);}

  goToSummary(){
    this.router.navigate(['summary']);

  }
}
