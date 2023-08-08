import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ECustomIconService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}
  init() {
    this.matIconRegistry.addSvgIcon(
      "evoke_logo",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/img/evoke_logo.png")
    );
  }
}
