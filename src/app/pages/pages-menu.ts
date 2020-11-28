import {NbMenuItem} from '@nebular/theme';
import {isDevMode} from '@angular/core';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Пользователи',
    icon: 'people-outline',
    link: '/pages/users',
    home: true,
  },
];
