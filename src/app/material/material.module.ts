// Imports and stores all angular-material UI components

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material UI imports
import { MatButtonModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
      MatButtonModule
  ],
  declarations: []
})
export class MaterialModule { }
