import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component'; // Adjust the path as needed


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
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
