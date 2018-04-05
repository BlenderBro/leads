// Imports and stores all angular-material UI components

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material UI imports
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    MatToolbarModule,
      MatButtonModule,
      MatIconModule
  ],
  declarations: []
})
export class MaterialModule { }
