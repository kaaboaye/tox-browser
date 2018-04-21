import { Person } from '../person/person';
import { JobRepairType } from './job-repair-type.enum';

export class JobDiagnosis {
  id: number;
  prev: JobDiagnosis;
  createdAt: Date;
  diagnosis: string;

  hydraulicNominalDimension: number;
  th01: number;
  th02: number;
  th03: number;
  th91: number;
  th92: number;
  th93: number;

  pneumaticNominalDimension: number;
  tp01: number;
  tp02: number;
  tp03: number;
  tp91: number;
  tp92: number;
  tp93: number;

  plungerNominalDimension: number;
  n01: number;
  n02: number;
  n03: number;
  n91: number;
  n92: number;
  n93: number;

  partsToReplace: string;
  estimatedRepairTime: string;
  expertiseDate: Date;
  serviceman: Person;
  repairType: JobRepairType;
}
