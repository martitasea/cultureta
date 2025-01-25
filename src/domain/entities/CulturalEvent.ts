export type CulturalEvent = {
  id: string,
  event: {
    type: string,
    title: string,
    description: string,
      link: string,
      references: string,
      organizer: string,
    },
  audience?: Array<string>,
  amount: {
    free: boolean,
  price: string,
  },
  location: {
    eventLocation: string,
    coords: {
      latitude?: number,
      longitude?: number
    },
    address: {
      district: string,
      neighborhood: string,
      locality: string,
      postalCode: string,
      streetAddress: string,
    }
  },
  date: {
    time: string,
    excludedDays: string,
    startDate: Date | string
    endDate: Date | string,
    days?: Array<string>
  },
  accessibility: number | string,
}
