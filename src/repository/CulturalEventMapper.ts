import {CulturalEventDto} from './CulturalEventDto';
import {getLastWords} from '../utils/getLastWords';
import {CulturalEvent} from '../domain/entities/CulturalEvent';
import { FeatureCollection, Point } from 'geojson';
import {COLOR_BY_TYPE} from '../config';

export const fromDto = (dto: CulturalEventDto): CulturalEvent => {
  return {
    id: dto.uid || '',
    event: {
      type: dto['@type'] ? getLastWords(dto['@type']) : '',
      title: dto.title || '-',
      description: dto.description ?? '',
      link: dto.link || '-',
      references: dto.references && dto.references['@id'] || '-',
      organizer: dto.organization && dto.organization['organization-name'] || '-',
    },
    audience: dto.audience
      ? dto.audience.includes(',')
        ? dto.audience.split(',')
        : [dto.audience]
      : undefined,
    amount: {
      free: dto.free === 1,
      price: dto.free === 1 ? '0.00€' : dto.price || 'No hay información',
    },
    location: {
      eventLocation: dto['event-location'] || '-',
      coords: {
        latitude: dto.location && dto.location.latitude || undefined,
        longitude: dto.location && dto.location.longitude || undefined
      },
      address: {
        district: dto.address && dto.address.district && dto.address.district['@id'] && getLastWords(dto.address.district['@id']) || '-',
        neighborhood: dto.address && dto.address.area && dto.address.area['@id'] && getLastWords(dto.address.area['@id']) || '-',
        locality: dto.address && dto.address.area && dto.address.area.locality || '-',
        postalCode: dto.address && dto.address.area && dto.address.area['postal-code'] || '-',
        streetAddress: dto.address && dto.address.area && dto.address.area['street-address'] || '-',
      }
    },
    date: {
      time: dto.time || '-',
      excludedDays: dto['excluded-days'] ?? '',
      startDate: dto.dtstart ? new Date(dto.dtstart) : '-',
      endDate: dto.dtend ? new Date(dto.dtend) : '-',
      days: dto.recurrence && dto.recurrence.days
        ? dto.recurrence.days.includes(',')
          ? dto.recurrence.days.split(',')
          : [dto.recurrence.days]
        : undefined
    },
    accessibility: dto.organization && dto.organization.accesibility && parseFloat(dto.organization.accesibility) || '-',
  };
};

export const toFeatureCollection = (domain: Array<CulturalEvent>): FeatureCollection<Point> => {
  
  return {
    type: 'FeatureCollection',
    features: domain
      .filter(ev =>  ev.location.coords.latitude !== undefined && ev.location.coords.longitude !== undefined)
      .map(e => (
        {
          type: 'Feature',
          properties: {
            id: e.id,
            color: COLOR_BY_TYPE.filter(t => e.event.type === t.id)[0]?.color || '#6b6b6b',
            type: e.event.type,
            title: e.event.title,
            description: e.event.description,
            link: e.event.link,
            organizer: e.event.organizer,
            eventLocation: e.location.eventLocation,
            district: e.location.address.district,
            neighborhood: e.location.address.neighborhood,
            locality: e.location.address.locality,
            free: e.amount.free,
            price: e.amount.price,
            startDate: e.date.startDate,
            endDate: e.date.endDate,
            time: e.date.time,
            accessibility: e.accessibility,
          },
          geometry: {
            type: 'Point',
            coordinates: [e.location.coords.longitude!, e.location.coords.latitude!]
          }
        }
      ))
  };
};