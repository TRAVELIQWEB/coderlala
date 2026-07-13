import { ContactFormData } from '@/app/components/ContactForm';
import api from '@/lib/axios';

export type ContactPayload = ContactFormData;

export const submitContact = async (data: ContactPayload) => {
  const payload: Partial<ContactPayload> = {
    name: data.name?.trim(),
    phone: data.phone?.trim(),
    message: data.message?.trim() || undefined,
    pageUrl: data.pageUrl ?? (typeof window !== 'undefined' ? window.location.href : ''),
  };

  // Optional fields: only include them if the user actually filled them in.
  // Sending an empty string instead of omitting the key trips up backend
  // validators that expect either a valid value or the field to be absent.
  if (data.email?.trim()) payload.email = data.email.trim();
  if (data.company?.trim()) payload.company = data.company.trim();
  if (data.budget?.trim()) payload.budget = data.budget.trim();

  try {
    const response = await api.post(`/contact`, payload);
    return response.data;
  } catch (error: any) {
    // Surface a clean message so ContactForm's catch block / error modal has something useful
    const message =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      error?.message ||
      'Something went wrong. Please try again.';
    throw new Error(message);
  }
};