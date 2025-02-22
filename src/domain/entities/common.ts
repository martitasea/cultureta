/*import {Point} from 'geojson';*/

export type TypeItem = {
  id: string,
  label: string,
  color: string,
  types: Array<string>
};

export type ChangedTypes = {
  unCategorizedOccurrences: Array<string>
  unUsedOccurrences: Array<string>
}

export type FeatureProperties = {
  id: string;
  color: string;
  type: string;
  title: string;
  description: string;
  link: string;
  organizer: string;
  eventLocation: string;
  district: string;
  neighborhood: string;
  locality: string;
  free: boolean;
  price: string;
  startDate: Date;
  endDate: Date;
  time: string;
  accessibility: number;
  excludedDays: Array<string>;
  days: Array<string>;
}

/*
export type PopUpInfo = {
  lng: number,
  lat: number,
  properties: FeatureProperties
}*/
