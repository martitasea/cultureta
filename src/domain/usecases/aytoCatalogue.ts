import {CulturalEventDto} from '../entities/CulturalEventDto';
import {getListEvent} from '../../serviceImpl/AytoImpl';

export const eventList = async (): Promise<Array<CulturalEventDto> | []> => await getListEvent();