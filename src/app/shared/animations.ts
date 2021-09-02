import {animate, query, state, style, transition, trigger} from '@angular/animations';

export const fadeInOutAnimation = trigger('fadeInOutAnimation', [
  state('in', style({opacity: 1})),
  transition(':enter', [
    style({opacity: 0}),
    animate(500)
  ]),
  transition(':leave',
    animate(300, style({opacity: 0})))
]);


export const slideInOutAnimation = trigger('slideInOut', [
  transition(':enter', [
    style({transform: 'translateX(-100%)'}),
    animate('500ms ease-in', style({transform: 'translateX(0%)'}))
  ]),
  transition(':leave', [
    animate('500ms ease-out', style({transform: 'translateX(100%)'}))
  ])
]);
