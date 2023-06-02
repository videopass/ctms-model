export interface BaseLocation {
  common: Common
  custom?: any
}

interface Common {
  name: string;
}