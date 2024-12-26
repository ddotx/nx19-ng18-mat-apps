import { ModelAdapter } from '@nx19-ng18-mat-apps/shared-data-access';
import { FormDto, FormModel } from '../models/form.interface';

export class FormModelAdaptor implements ModelAdapter<FormDto, FormModel> {
  /**
   * Maps the Form DTO to the Form Model
   * @param dto
   * @returns
   */
  fromDto(dto: FormDto): FormModel {
    return {
      id: dto.id,
      description: dto.title,
      amount: {
        amountExclVat: dto.amount,
        vatPercentage: dto.vatPercentage,
      },
      date: dto.date,
      tags: dto.tags,
    };
  }

  /**
   * Maps the Form Model to the Form DTO
   * @param model
   * @returns
   */
  toDto(model: FormModel): FormDto {
    return {
      id: model.id ? model.id : null,
      title: model.description,
      amount: model.amount.amountExclVat,
      vatPercentage: model.amount.vatPercentage,
      date: model.date,
      tags: model.tags ? model.tags : [],
    };
  }
}
