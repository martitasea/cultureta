import {expect} from 'chai';
import {evaluateOccurrences} from './evaluateOccurrences';

describe('evaluateOccurrences test', () => {
  it('Evaluate Types', () => {

    //GIVEN
    const dictionary = [
      {
        id: 'music',
        label: 'Música',
        color: '#6e1c81',
        types: [
          'Musica',
          'Danza Baile',
        ]
      },
      {
        id: 'literature',
        label: 'Literatura',
        color: '#811c34',
        types: [
          'Recitales Presentaciones Actos Literarios',
          'Cuentacuentos Titeres Marionetas',
          'Clubes Lectura y debate'
        ]
      }
    ];
    const allTypes = [
      'Musica',
      'Danza Baile',
      'Recitales Presentaciones Actos Literarios',
      'Cuentacuentos Titeres Marionetas',
      'Folclore Etnica',
    ];

    const expectedEvaluation = {
      unCategorizedOccurrences: ['Folclore Etnica',],
      unUsedOccurrences: ['Clubes Lectura y debate'],
    };

    // WHEN
    const computedEvaluation = evaluateOccurrences(allTypes, dictionary);

    // SHOULD
    expect(computedEvaluation).to.deep.equal(expectedEvaluation);
  });

});