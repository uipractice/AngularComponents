export const Code = {
    html: {
        content: `
        <div cdkDropListGroup>
          <div class="example-container">
            <h2>Container1</h2>

            <div
              cdkDropList
              [cdkDropListData]="container1"
              class="example-list"
              (cdkDropListDropped)="drop($event)">
              <!-- <div class="example-box" cdkDrag><select></select></div> -->
              <div class="example-box" *ngFor="let item of container1" cdkDrag><input type="{{item.type}}" value="{{item.name}}"/></div>

            </div>
          </div>

          <div class="example-container">
            <h2>Container2</h2>

            <div
              cdkDropList
              [cdkDropListData]="container2"
              class="example-list"
              (cdkDropListDropped)="drop($event)">
              <div class="example-box" *ngFor="let item of container2" cdkDrag>
                <input type="{{item.type}}" value="{{item.name}}"/>
              </div>
            </div>

          </div>
          <div class="example-container">
            <h2>Container3</h2>

            <div
              cdkDropList
              [cdkDropListData]="container3"
              class="example-list"
              (cdkDropListDropped)="drop($event)">
              <div class="example-box" *ngFor="let item of container3" cdkDrag>
                <input type="{{item.type}}" value="{{item.name}}"/>
              </div>
            </div>

          </div>
        </div>
    `,
        language: 'html'
        },
    ts: {
        content: `
        import { Component, OnInit, ViewChild } from '@angular/core';
        import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

        @Component({
          selector: 'e-mat-image-gallery',
          templateUrl: './filepath.html',
          styleUrls: ['./filepath.scss']
        })
        export class EMatDragDropComponent{
        container1:any = [
          {type:'text', name:'text'},
          {type:'email', name:'text'},
          {type:'password', name:'text'},
          {type:'button', name:'Button'},
          {type:'checkbox', name:'text'},
          {type:'radio', name:'text'}
        ];
        container2:any = [];
        container3:any = [];

        drop(event: CdkDragDrop<string[]>) {
         if (event.previousContainer === event.container) {
           moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
         } else {
           transferArrayItem(event.previousContainer.data,
                             event.container.data,
                             event.previousIndex,
                             event.currentIndex);
         }
        }
        }
            `,
        language: 'javascript'
        },
    css: {
        content: `
        .example-container {
          width: 400px;
          max-width: 100%;
          margin: 0 25px 25px 0;
          display: inline-block;
          vertical-align: top;
        }

        .example-list {
          border: solid 1px #ccc;
          min-height: 60px;
          background: white;
          border-radius: 4px;
          overflow: hidden;
          display: block;
        }

        .example-box {
          padding: 20px 10px;
          border-bottom: solid 1px #ccc;
          color: rgba(0, 0, 0, 0.87);
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
          cursor: move;
          background: white;
          font-size: 14px;
        }

        .cdk-drag-preview {
          box-sizing: border-box;
          border-radius: 4px;
          box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                      0 8px 10px 1px rgba(0, 0, 0, 0.14),
                      0 3px 14px 2px rgba(0, 0, 0, 0.12);
        }

        .cdk-drag-placeholder {
          opacity: 0;
        }

        .cdk-drag-animating {
          transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
        }

        .example-box:last-child {
          border: none;
        }

        .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {
          transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
        }


            `,
        language: 'css'
        }
    }
