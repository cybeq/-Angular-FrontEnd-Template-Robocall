import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { WeatherService } from "../../services/weather/weather.service";

@Component({
  selector: "app-hello",
  templateUrl: "./hello.component.html",
  styleUrls: ["./hello.component.css"],
})
export class HelloComponent implements OnInit {
  // splitText = new SplitText('.splitText', {type:'chars'})
  // chars = this.splitText.chars
  @ViewChild("scrollable") scrollable!: ElementRef;
  @ViewChild("about") about!: ElementRef;
  currentWeather: any;
  state = "offer1";
  constructor(private weather: WeatherService) {}
  ngOnInit() {
    this.weather.getWeather().subscribe((res: any) => {
      this.currentWeather = res.current_weather.temperature;
      console.log(this.currentWeather);
    });

    gsap.from(".splitText", {
      duration: 9,
      opacity: 0,
      stagger: 2.5,
      ease: "power4.out",
    });
    window.addEventListener("resize", this.handleResize.bind(this));
    window.addEventListener("scroll", () => {
      console.log(window.outerHeight, window.innerHeight);
      // @ts-ignore
      document.getElementById("blackScreenHandler").style.height =
        window.outerHeight + 1200 + "px";
    });
  }
  ngAfterViewInit() {
    gsap.from(".singleOffer", {
      x: window.innerWidth,
      duration: 2,
      ease: "bounce.out",
    });
    if (window.innerWidth > 900) {
      gsap.fromTo(
        ".about",
        { backgroundSize: "100%", yoyo: true, repeat: -1, duration: 30.5 },
        {
          backgroundSize: "120%",
          yoyo: true,
          repeat: -1,
          duration: 30.5,
        }
      );
    }
  }

  onMouseMove(event: MouseEvent) {
    if (event.movementX > 0) {
      gsap.to(".singleOffer", {
        rotate: 5,
        duration: 6,
      });
    }
    if (event.movementX < 0) {
      gsap.to(".singleOffer", {
        rotate: -5,
        duration: 6,
      });
    }
  }

  onMouseEnter(id: string) {
    // @ts-ignore
    gsap.to(document.getElementById(id), {
      scale: window.innerWidth <= 900 ? 1.05 : 1.2,
      ease: "power2",
    });
    gsap.to(".blackScreenHandler", {
      opacity: 0.4,
      duration: 2,

      ease: "power2",
    });
    this.state = id;
  }

  onMouseLeave(id: string) {
    // @ts-ignore
    gsap.to(document.getElementById(id), {
      scale: 1.0,
    });
    gsap.to(".singleOffer", {
      rotate: 0,
      duration: 6,
    });
    gsap.to(".blackScreenHandler", {
      opacity: 0,
      duration: 2,
      ease: "power2",
    });
  }
  handleResize() {
    if (window.innerWidth <= 900) {
      // Remove the animations if the window width is less than or equal to 900px
      gsap.killTweensOf(".about");
      this.about.nativeElement.style.backgroundSize = "cover";
    } else {
      gsap.fromTo(
        ".about",
        { backgroundSize: "100%", yoyo: true, repeat: -1, duration: 30.5 },
        { backgroundSize: "120%", yoyo: true, repeat: -1, duration: 30.5 }
      );
    }
  }
  loadImage(id: string) {
    // @ts-ignore
    document.getElementById(id).style.visibility = "inherit";
    // @ts-ignore
    document.getElementById(id + "_loader").style.display = "none";
  }
}
