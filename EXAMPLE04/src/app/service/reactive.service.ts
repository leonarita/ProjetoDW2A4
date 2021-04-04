import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReactiveService {

  private $date: BehaviorSubject<moment.Moment>;
  private $name: BehaviorSubject<string>;
  private $lengthName: BehaviorSubject<number>;

  private date: Observable<moment.Moment>;
  private name: Observable<string>;
  private lengthName: Observable<number>;

  constructor() {
    this.$date = new BehaviorSubject(moment());
    this.$name = new BehaviorSubject("");
    this.$lengthName = new BehaviorSubject(0);

    this.date = this.$date.asObservable().pipe(filter(date => date !== undefined))
    this.name = this.$name.asObservable();
    this.lengthName = this.$lengthName.asObservable();

    timer(1000, 1000).subscribe(() => this.updateTime());
  }

  updateTime() {
    this.$date.next(moment());
  }

  updateData(name: string) {
    this.$name.next(name);
    this.$lengthName.next(name.length);
  }

  getDate(): Observable<moment.Moment> {
    return this.date;
  }

  getName(): Observable<string> {
    return this.name;
  }

  getLengthName(): Observable<number> {
    return this.lengthName;
  }
}
