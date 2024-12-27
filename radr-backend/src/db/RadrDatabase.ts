
export interface RadrDatabase {
  getVariants(): Promise<any[]>;
  getVariantById(id: number): Promise<any>;
}