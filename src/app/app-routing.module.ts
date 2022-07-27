import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DatabaseComponent} from "./screens/database/database.component";
import {CreateComponent} from "./screens/create/create.component";

const routes: Routes = [
  {path: 'db/:dbid', component: DatabaseComponent},
  {path: 'create', component: CreateComponent},
  {path: 'db', component: CreateComponent},
  {path: '', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
