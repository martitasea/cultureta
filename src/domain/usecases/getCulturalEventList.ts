import {CulturalEvent} from '../entities/CulturalEvent';
import {inject} from '../dependencyInjection';
import {REPOSITORIES, Repository} from '../services/Repository';

export type options<RequestType> = {
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE',
  headers?: Record<string, string>,
  body?: RequestType
}

export const getCulturalEventList = async (): Promise<Array<CulturalEvent>> => {
  const repository = inject<Repository<CulturalEvent>>(REPOSITORIES.culturalEvents);
  return repository.list();
};