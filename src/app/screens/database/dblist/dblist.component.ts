import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DocumentReference} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-dblist',
  templateUrl: './dblist.component.html',
  styleUrls: ['./dblist.component.css']
})
export class DblistComponent implements OnInit {

  @Input() dblist: { id: string, ref: DocumentReference<unknown>, data: any }[] = []
  @Output() onSelectDb = new EventEmitter<{ id: string, ref: DocumentReference<unknown>, data: any }>();
  @Output() onDeleteDone = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(db: { id: string, ref: DocumentReference<unknown>, data: any }) {
    this.onSelectDb.emit(db);
  }

  getDate(json: any): Date {
    let date = new Date();
    date.setMilliseconds(json);
    date.setDate(date.getDate() - 3)
    return date;
  }

  delete(db: { id: string, ref: DocumentReference<unknown>, data: any }) {
    db.ref.delete().then((next) => {
      this.onDeleteDone.emit();
    })
  }
}
