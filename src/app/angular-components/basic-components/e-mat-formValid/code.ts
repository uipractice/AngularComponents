export const Code = {
    html: {
        content: `
        <mat-card class="example-card">
        <mat-card-header>
          <mat-card-title>Login</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <form class="example-form" #loginForm="ngForm">
            <table class="example-full-width" cellspacing="0">
              <tr>
                <td>
                  <mat-form-field class="example-full-width">
                  <input matInput placeholder="username" [(ngModel)]="username" name="username" required>
                  </mat-form-field>
                </td>
              </tr>
              <tr>
              <td><mat-form-field class="example-full-width">
                <input matInput placeholder="password" [(ngModel)]="password" type="password" name="password" required>
              </mat-form-field></td>
            </tr></table>
          </form>
          <mat-spinner [style.display]="showSpinner ? 'block' : 'none'"></mat-spinner>
        </mat-card-content>
        <mat-card-actions>
          <button [disabled]="loginForm.invalid" mat-raised-button (click)="login()" color="primary">Login</button>
        </mat-card-actions>
      </mat-card>
    `,
        language: 'html'
        },
    ts: {
        content: `
        import { Component } from '@angular/core';
        @Component({
          selector: 'app-e-mat-formvalid',
          templateUrl: './e-mat-formvalid.component.html',
          styleUrls: ['./e-mat-formvalid.component.scss']
        })
        export class EMatFormValidComponent {
          username: string;
          password: string;

          login() : void {
            if(this.username == 'admin' && this.password == 'admin'){
            }else {
              alert("Invalid credentials");
            }
          }
        }
            `,
        language: 'javascript'
        },
    css: {
        content: `
        .example-form {
            min-width: 150px;
            max-width: 500px;
            width: 100%;
          }

          .example-full-width {
            width: 100%;
          }

          .example-card {
            max-width: 400px;
            padding-left: 200 px
          }
            `,
        language: 'css'
        }
    }
