import {getUniqueValues} from '../../utils/getUniqueValues';

type Resultado = { [key: string]: string[] };

export const getDistrictAndNeighborhood = (area: Array<string>) => {
  const uniqueArea = getUniqueValues(area);
  
  uniqueArea.reduce<Resultado | undefined>((acc, url) => {
    const items = url && url.split('/');
    const district = items && items[7]; // El distrito está en la posición 7
    const neighborhood = items && items[9];   // El barrio está en la posición 9

    if(!district && !neighborhood) return;
    // Si el distrito ya está en el acumulador, añadir el barrio
    if (district && neighborhood && acc && acc[district]) {
      acc[district].push(neighborhood);
    } else if (district && neighborhood && acc) {
      // Si no, inicializar el array con el barrio
      acc[district] = [neighborhood];
    }

    return acc;
  }, {}); // El acumulador comienza como un objeto vacío
};