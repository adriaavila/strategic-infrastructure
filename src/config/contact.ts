export const CONTACT_INFO = {
  phoneNumber: "+584220023684",
  whatsappMessage: "Hola, quiero explorar una automatización o sistema con IA para mi negocio.",
};

export const getWhatsAppUrl = (message?: string) => {
  const cleanNumber = CONTACT_INFO.phoneNumber.replace(/[^\d+]/g, "");
  const text = encodeURIComponent(message || CONTACT_INFO.whatsappMessage);
  return `https://wa.me/${cleanNumber}?text=${text}`;
};
