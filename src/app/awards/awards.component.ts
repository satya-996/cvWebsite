import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component'; // Adjust the path as needed

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent {
  constructor(public dialog: MatDialog) {}

  openModal(imageSrc: string, altText: string) {
    this.dialog.open(ImageDialogComponent, {
      data: {
        imageSrc,
        altText,
      },
    });
  }
}
