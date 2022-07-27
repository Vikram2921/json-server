import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {ToasterComponent} from './components/toaster/toaster.component';
import {DatabaseComponent} from './screens/database/database.component';
import {CreateComponent} from './screens/create/create.component';
import {DblistComponent} from './screens/database/dblist/dblist.component';
import {FormsModule} from "@angular/forms";

const firebaseConfig = {
  apiKey: "AIzaSyCJtklPD9tw_xjBt3xWAbvBKEPwQGKie_E",
  authDomain: "jsondb-56fcd.firebaseapp.com",
  projectId: "jsondb-56fcd",
  storageBucket: "jsondb-56fcd.appspot.com",
  messagingSenderId: "1081192472138",
  appId: "1:1081192472138:web:cfb12801fe53b67dc210b3",
  measurementId: "G-FG7K30NTW8"
};

@NgModule({
  declarations: [
    AppComponent,
    ToasterComponent,
    DatabaseComponent,
    CreateComponent,
    DblistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
