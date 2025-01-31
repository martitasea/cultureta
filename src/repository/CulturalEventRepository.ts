import Http from '../domain/services/Http';
import {CulturalEventDto} from './CulturalEventDto';

import {fromDto} from './CulturalEventMapper';
import {Repository} from '../domain/services/Repository';
import {CulturalEvent} from '../domain/entities/CulturalEvent';

export const PATH = '/206974-0-agenda-eventos-culturales-100.json/';
export const API_BASE_URL = process.env.API_BASE_URL || '';

export const CulturalEventRepository = (http: Http): CulturalEventRepository => ({
  list: () =>
    http<Array<CulturalEventDto>>(new URL(PATH, API_BASE_URL), {method: 'GET'})
      .then((events: Array<CulturalEventDto>) => events.map(event => fromDto(event))),
});

export type CulturalEventRepository = Repository<CulturalEvent> & {
  list: () => Promise<Array<CulturalEvent>>
};