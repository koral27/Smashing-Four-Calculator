import { heroTypes, heroes } from './heroes';

export const fields = [
  {
    label: 'Герой',
    inputName: 'hero',
    inputType: 'select',
    options: heroes.map(({ name }) => name),
  },
  {
    label: 'Тип героя',
    inputName: 'heroType',
    inputType: 'select',
    options: heroTypes,
  },
  { label: 'Карточек', inputName: 'cards' },
  { label: 'Текущий уровень', inputName: 'currentLevel' },
];
