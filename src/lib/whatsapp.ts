const WHATSAPP_NUMBER = "573152905666";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola, quiero comprar el Drop 01 de Semilla. ¿Hay unidades disponibles?",
);

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
