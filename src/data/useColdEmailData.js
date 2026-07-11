import { coldEmails, coldEmailTemplates } from './coldEmail';

export function useColdEmailData() {
  return { emails: coldEmails, templates: coldEmailTemplates };
}
