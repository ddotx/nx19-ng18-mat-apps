import { AfterContentInit, Component, ElementRef } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-form-shared-ui-form-field-override',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './form-field-override.component.html',
  styleUrl: './form-field-override.component.scss',
})
export class FormFieldOverrideComponent implements AfterContentInit {
  isRounded = false;

  constructor(private hostRef: ElementRef) { }

  ngAfterContentInit(): void {
    // this.isRounded = this.hostRef.nativeElement.classList.contains('field-rounded');
    console.log('FormFieldOverrideComponent.ngAfterContentInit', this.isRounded);

  }

}
