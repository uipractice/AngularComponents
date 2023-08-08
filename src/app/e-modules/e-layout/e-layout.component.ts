import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';
import {  FormBuilder } from '@angular/forms';
import { EShareDataService } from '../../e-shared/e-sharedata.service';
import { HighlightAutoResult } from 'ngx-highlightjs';
import { Code } from './code'
@Component({
  selector: 'e-layout',
  templateUrl: './e-layout.component.html',
  styleUrls: ['./e-layout.component.scss']
})
export class ELayoutComponent implements OnInit {

 // response: HighlightAutoResult;
  componentName: string = "";
  componentType: String = "";
  code_subscription: Subscription;
  notApplicable = false;
  code: any;
  activeUrl:any;
  focusElement:any;
  bootstrapCode = false;
  materialpCode = false;
  nobootstrapnmaterialCode = false;
  bootstrapOnly = false;
  noBootstraopnMaterial = false;
  tempCode:any=`.wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .container {
    flex: 1;
    margin: 1em;
    position: relative;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }`;
  constructor(

    private _ActivatedRoute: ActivatedRoute, public fb: FormBuilder, public eShareDataService: EShareDataService, private router: Router,
  ) {
    this.code_subscription = this.eShareDataService.getCode().subscribe(
      code => {
        this.code = code;
        this.eShareDataService.set('code', this.code);
      });
    this._ActivatedRoute.url.subscribe(() => {

      // console.log(this.route.snapshot.url);
      this.componentName = this._ActivatedRoute.snapshot.children[0].data.name;
      this.componentType = this._ActivatedRoute.snapshot.children[0].data.type;

        this.router.events.subscribe(event => {

          if(event instanceof NavigationStart) {
              this.activeUrl = event.url.replace('/', '');

              this.focusElement = this.activeUrl;
              // console.log(this.activeUrl+' : This is Focus Element');
              // this.focusElement.focus();

          }

        })
    });


  }

  ngOnInit() {
    if (this.eShareDataService.get('code')) {
      this.code = this.eShareDataService.get('code');
    } else {
      this.code = Code;
    }

   
    if (this.eShareDataService.notApplicableComponents.indexOf(this.router.url) !== -1){
      this.notApplicable = true;
      this.eShareDataService.bootstrapCode = false;
      this.eShareDataService.materialpCode = true;
      this.eShareDataService.nobootstrapnmaterialCode = false;
    } else if (this.eShareDataService.onlyBootstrapComponents.indexOf(this.router.url) !== -1){
      this.bootstrapOnly = true;
      this.eShareDataService.bootstrapCode = true;
      this.eShareDataService.materialpCode = false;
      this.eShareDataService.nobootstrapnmaterialCode = false;
    } else if (this.eShareDataService.noBootstrapnMaterialComponents.indexOf(this.router.url) !== -1){
      this.noBootstraopnMaterial = true;
      this.eShareDataService.bootstrapCode = false;
      this.eShareDataService.materialpCode = false;
      this.eShareDataService.nobootstrapnmaterialCode = true;
    }
  }

  copyToClipboard(content: string) {
    const el = document.createElement('textarea');
    el.value = content;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }

  //  onHighlight(e: HighlightAutoResult) {
  //   this.response = {
  //     language: e.language,
  //     relevance: e.relevance,
  //     secondBest: '{...}',
  //     value: '{...}'
  //   }
  //   console.log(this.response);
  // }
}
