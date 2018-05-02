import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

const SlideLeft = [
  query(':leave', style({ transform: 'translateX(0)' })),
  query(':enter', style({ transform: 'translateX(-400)' })),

  group([
    query(':leave', animate(500, style({ transform: 'translateX(400)' })), { optional: true }),
    query(':enter', animate(500, style({ transform: 'translateX(0)' })), { optional: true }),
  ], { delay: 10 }) // needed because a weird animation scheduling bug in iOS
]

const SlideRight = [
  query(':leave', style({ transform: 'translateX(0)'})),
  query(':enter', style({ transform: 'translateX(400)'})),

  group([
    query(':leave', animate(500, style({ transform: 'translateX(-400)' })), { optional: true }),
    query(':enter', animate(500, style({ transform: 'translateX(0)' })), { optional: true }),
  ], { delay: 10 }) // needed because a weird animation scheduling bug in iOS
]

 export const RouteAnimations = [
  trigger('routeAnimation', [
    // transition('* <=> *', SlideLeft),
    transition('main => other', SlideRight),
    transition('other => main', SlideLeft),
  ])
]