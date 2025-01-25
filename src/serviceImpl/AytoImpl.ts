import {GET} from './HttpFetch';
import {CulturalEventDto} from '../domain/entities/CulturalEventDto';

const API_URL = process.env.BASE_URL;

export const getListEvent = async (): Promise<Array<CulturalEventDto>> =>
  GET(`${API_URL}/206974-0-agenda-eventos-culturales-100.json/`);