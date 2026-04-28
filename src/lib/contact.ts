export const WHATSAPP_NUMBER = "5547991826787";
export const WHATSAPP_DISPLAY = "(47) 99182-6787";
export const LINKEDIN_URL = "https://www.linkedin.com/in/dianejanaineruthes/";
export const GITHUB_URL = "https://github.com/diane-ruthes";
export const EMAIL = "diane@email.com";

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
