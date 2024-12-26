export interface FormDto {
  id: number | null;
  title: string;
  amount: number;
  vatPercentage: number;
  date: string;
  tags?: string[];
}

export interface FormModel {
  id: number | null;
  description: string;
  amount: {
    amountExclVat: number;
    vatPercentage: number;
  };
  date: string;
  tags?: string[];
}
