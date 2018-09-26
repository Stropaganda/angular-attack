import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  poolSize: number;

  constructor(private router: Router) {}

  ngOnInit() {}

  createPool() {
    this.router.navigate(["/pool-picker", this.poolSize]);
  }
}
