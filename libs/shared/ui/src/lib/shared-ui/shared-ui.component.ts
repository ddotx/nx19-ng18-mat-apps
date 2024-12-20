import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'lib-shared-ui',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule],
  templateUrl: './shared-ui.component.html',
  styleUrl: './shared-ui.component.scss',
})
export class SharedUiComponent { }
