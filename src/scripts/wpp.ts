const phoneNumber = '593980734572';
const messageBaseUrl = 'https://wa.me/';

export const sendDefaultMessage = (): string => {
  const message = 'Hola, estoy interesado en hablar mas sobre los servicios que ofrecen.';
  return `${messageBaseUrl}${phoneNumber}?text=${encodeURIComponent(message)}`;
};

export const sendBasePricingMessage = (): string => {
  const message =
    'Hola, estoy interesado en hablar mas sobre el servicio base de $100 que ofrecen.';
  return `${messageBaseUrl}${phoneNumber}?text=${encodeURIComponent(message)}`;
};

export const sendMediumPricingMessage = (): string => {
  const message =
    'Hola, estoy interesado en hablar mas sobre el servicio medio de $200 que ofrecen.';
  return `${messageBaseUrl}${phoneNumber}?text=${encodeURIComponent(message)}`;
};
