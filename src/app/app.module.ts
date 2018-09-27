import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatGridListModule,
  MatCardModule
} from "@angular/material";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { PoolPickerComponent } from "./pool-picker/pool-picker.component";

const routes: Routes = [
  { path: "pool-picker/:poolSize", component: PoolPickerComponent },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, PoolPickerComponent],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatListModule,
    MatGridListModule,
    FlexLayoutModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatListModule,
    MatGridListModule,
    FlexLayoutModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
