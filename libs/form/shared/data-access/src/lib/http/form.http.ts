import { Injectable } from '@angular/core';
import { GenericHttpService } from '@nx19-ng18-mat-apps/shared-data-access';
import { FormDto, FormModel } from '../models/form.interface';
import { FormModelAdaptor } from '../adapters/form.adapter';

@Injectable({ providedIn: 'root' })
export class FormHttpService extends GenericHttpService<FormDto, FormModel> {
  constructor() {
    super('/form', '', new FormModelAdaptor());
  }
}
