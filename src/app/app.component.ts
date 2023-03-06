import {
  AfterContentInit,
  AfterViewInit,
  Component,
  HostListener,
  OnInit,
} from "@angular/core";
import { gsap } from "gsap";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "nexp";

  ngOnInit() {}

  constructor(private router: Router) {}

  barMouseEnter(id: string) {
    gsap.fromTo(
      document.getElementById(id),
      {
        rotate: "360deg",
      },
      { rotate: "0" }
    );
  }
  barMouseOut(id: string) {
    // gsap.from(document.getElementById(id),{
    //   rotate:'0'
    // })
  }

  ngAfterContentInit(): void {
  }
  navigateHome() {
    if (this.router.url === "/") {
      this.scrollToTop();
    } else {
      this.router.navigateByUrl("/");
    }
  }

  scrollToTop() {
    const scrollStep = -window.scrollY / (500 / 15); // Adjust speed here
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }
}
