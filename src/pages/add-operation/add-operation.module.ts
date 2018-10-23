import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { AddOperationPage } from './add-operation';

@NgModule({
  declarations: [
    AddOperationPage,
  ],
  imports: [
    IonicPageModule.forChild(AddOperationPage),
  ],
})
export class AddOperationPageModule {}
