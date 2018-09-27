import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-pool-picker",
  templateUrl: "./pool-picker.component.html",
  styleUrls: ["./pool-picker.component.css"]
})
export class PoolPickerComponent implements OnInit {
  poolSize: number;
  pool: Array<boolean>;

  private sub: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.poolSize = +params["poolSize"];
      this.pool = new Array(this.poolSize).fill(true);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  take(index) {
    this.pool[index] = false;
  }

  give(index) {
    this.pool[index] = true;
  }

  findLowestNumber(element) {
    return element == true;
  }

  takeLowest() {
    this.pool[this.pool.findIndex(this.findLowestNumber)] = false;
  }
}
