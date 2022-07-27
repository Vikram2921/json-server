import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from "@angular/fire/compat/firestore";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private datePipe: DatePipe;

  constructor(private db: AngularFirestore) {
    this.datePipe = new DatePipe('en-us');
  }

  generateNewId() {
    return this.db.createId();
  }

  createCollection(id: string): Promise<DocumentReference<unknown>> {
    let dbinfo = {id: id, createdOn: new Date()};
    return this.db.collection(id).add('dbinfo');
  }

  getCollectionRef(dbid: string): AngularFirestoreCollection<unknown> {
    return this.db.collection(dbid);
  }

  createDocumentData() {

  }

  addDocument(docname: string, dbref: AngularFirestoreCollection<unknown>) {
    let meta = {name: docname, createdOn: this.getDateString(), updatedOn: this.getDateString()}
    dbref?.doc(docname).set(meta);
    return dbref?.doc(docname);
  }

  getDateString() {
    let date = new Date();
    return date.getDate() + "/" + (date.getMonth() + 1) + '/' + date.getFullYear();
  }
}
