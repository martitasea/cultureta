export type CulturalEventDto = {
  '@id'?: string,
  '@type'?: string,
  'id'?: string,
  'title'?: string,
  'description'?: string,
  'free': number,
  'price': string,
  'dtstart'?: string,
  'dtend'?: string,
  'time'?: string,
  'excluded-days'?: string,
  'uid'?: string,
  'link'?: string,
  'event-location'?: string,
  'references'?: {
    '@id'?: string
  },
  'audience': string,
  'relation'?: {
    '@id'?: string
  },
  'address'?: {
    'district'?: {
      '@id'?: string
    },
    'area'?: {
      '@id'?: string,
      'locality'?: string,
      'postal-code'?: string,
      'street-address'?: string
    }
  },
  'location'?: {
    'latitude'?: number,
    'longitude'?: number
  },
  'organization'?: {
    'organization-name'?: string,
    'accesibility'?: string
  },
  'recurrence'?: {
    'days'?: string,
    'frequency'?: string,
    'interval'?: number
  }
}