import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatSnackBarModule,
        MatNativeDateModule,
        MatMenuModule,
        MatStepperModule,
        MatToolbarModule,
        MatCardModule,
        MatSelectModule,
        MatDividerModule
    ],
    exports: [
        CommonModule,
        MatButtonModule,
        MatTooltipModule,
        MatInputModule,
        MatRippleModule,
        MatFormFieldModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatSnackBarModule,
        MatNativeDateModule,
        MatMenuModule,
        MatStepperModule,
        MatToolbarModule,
        MatCardModule,
        MatSelectModule,
        MatDividerModule
    ],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: 'pt-br'}
    ]
})
export class MaterialModule { }
