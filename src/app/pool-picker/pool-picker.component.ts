import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-pool-picker",
  templateUrl: "./pool-picker.component.html",
  styleUrls: ["./pool-picker.component.css"]
})
export class PoolPickerComponent implements OnInit {
  poolSize: number;
  private sub: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.poolSize = +params["poolSize"];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
