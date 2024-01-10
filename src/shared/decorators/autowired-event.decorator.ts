import { EventClsRegistry } from '../infrastructure/event-store/event-cli.registry';

export const AutowiredEvent: ClassDecorator = (target: any) => {
  EventClsRegistry.add(target);
};
