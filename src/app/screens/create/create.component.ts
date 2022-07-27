import {Component, OnInit} from '@angular/core';
import {FirebaseService} from "../../service/firebase.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  customId: string = '';

  constructor(public fs: FirebaseService, private router: Router) {
    this.generateNewId();
  }

  ngOnInit(): void {
  }

  generateNewId() {
    this.customId = this.fs.generateNewId();
  }

  activate() {
    this.fs.addDocument("Dummy DB", this.fs.getCollectionRef(this.customId));
    this.router.navigate(['/db/' + this.customId]);
  }

}
