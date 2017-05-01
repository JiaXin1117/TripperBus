import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyNewDirectiveDirective } from './my-new-directive.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [MyNewDirectiveDirective]
})
export class CustomModuleModule { }
