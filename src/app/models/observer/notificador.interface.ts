import { articulosSubscriptor } from "./articulosSubscriptor.interface";

export interface notificador{
    suscribe(newSubscriptor : articulosSubscriptor): void;
    unsuscribe(existentSubscriptor : articulosSubscriptor): void;
    notifySuscriptors(): void;
}