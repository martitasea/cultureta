import {ChangedTypes, TypeItem} from '../domain/entities/common';

export const evaluateOccurrences = (
  allTypes: Array<string>,
  dictionary: Array<TypeItem>
): ChangedTypes => {
  // 1. Crear un Set con todos los tipos definidos en el objeto TYPE_CATEGORIZER
  const categorizedOcurrences = new Set(
    dictionary.flatMap(category => category.types)
  );

  // 2. Filtramos los elementos de allTypes que no están en categorizedOcurrences
  const unCategorizedOccurrences: Array<string> = allTypes
    .filter(type => !categorizedOcurrences.has(type))
    .filter(type => type !== '');

  // 3. Verificar que cada tipo en diccionario se encuentre en allTypes
  const unUsedOccurrences: Array<string> = dictionary.reduce<string[]>((acc, category) => {
    const unused = category.types.filter((type: string) => !allTypes.includes(type));
    return [...acc, ...unused];
  }, []);

  return {unCategorizedOccurrences, unUsedOccurrences};
};