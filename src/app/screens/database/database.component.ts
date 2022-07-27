import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {FirebaseService} from "../../service/firebase.service";
import {AngularFirestoreCollection, DocumentReference} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  dblist: { id: string, ref: DocumentReference<unknown>, data: any }[] = [];
  dbid: string = '';
  dbname: any = '';
  private dbref!: AngularFirestoreCollection<unknown>;

  constructor(private activatedRoute: ActivatedRoute, private fs: FirebaseService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.dbid = params['dbid'];
      this.connect();
    })
  }

  createNewDb(dbname: string) {
    this.fs.addDocument(dbname, this.dbref);
    this.dbname = '';
    this.fetchDbList();
  }

  fetchDbList() {
    let _this = this;
    this.dblist = [];
    this.dbref?.get().subscribe((next) => {
      next.docs.forEach(function (doc) {
        doc.ref.get().then((next) => {
          _this.dblist.push({id: doc.id, ref: doc.ref, data: next.data()});
        })

      })
      console.log(_this.dblist);
    })
  }

  private connect() {
    this.dbref = this.fs.getCollectionRef(this.dbid);
    this.fetchDbList();
  }
}
