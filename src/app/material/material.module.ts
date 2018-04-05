// Imports and stores all angular-material UI components

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material UI imports
import { MatToolbarModule, MatButtonModule, MatInputModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatTabsModule,
  ],
  exports: [
    MatToolbarModule,
      MatButtonModule,
      MatIconModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      MatMenuModule,
      MatTabsModule,
  ],
  declarations: []
})
export class MaterialModule { }
