import loki from 'lokijs';
import pkg from 'xlsx';
const { readFile, utils } = pkg;
import {RadrDatabase} from "../RadrDatabase";

export class LokiDatabase implements  RadrDatabase{
  db: loki;

  constructor() {
      this.db = new loki('radr.db');
      const variants = this.db.addCollection('variants');
      const workbook = readFile('/Users/sydneynicoleachinger/Repositories/personal/radr/radr-backend/src/db/loki/data/radr_data_10-11.csv');
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      const jsonData = utils.sheet_to_json(worksheet);
      variants.insert(jsonData);
  }
  #mapVariants = (variants:any[]): any[]=> {
    if (!variants) return [];
    variants?.forEach((variant) => delete variant.meta);
    return variants?.map((variant) => ( {...variant, variant_id: variant.$loki}))
  }

  getVariants(): Promise<any[]> {
    const variants = this.db.getCollection('variants').find();
    return Promise.resolve(this.#mapVariants(variants));
  }

  getVariantById(id: number): Promise<any>  {
    const variant = this.db.getCollection('variants').get(id)
    return Promise.resolve(this.#mapVariants([variant])[0]);
  }
}