"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
let ModalComponent = class ModalComponent {
    ngOnInit() {
        this.visible = false;
        this.componentStyle = {
            display: 'none'
        };
    }
    updateStyle() {
        this.componentStyle = {
            display: this.visible ? 'block' : 'none'
        };
    }
    show() {
        this.visible = true;
        this.updateStyle();
        console.log(this.visible);
    }
    hide() {
        this.visibleAnimate = false;
        this.updateStyle();
        console.log(this.visibleAnimate);
    }
    onContainerClicked(event) {
    }
};
ModalComponent = __decorate([
    core_1.Component({
        selector: 'app-modal',
        template: `
<div class="modal" tabindex="-1" role="dialog" [ngStyle]="componentStyle">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Add new Note</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <ng-content select=".app-modal-body"></ng-content>
      </div>
    </div>
  </div>
</div>
    `
    })
], ModalComponent);
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.component.js.map