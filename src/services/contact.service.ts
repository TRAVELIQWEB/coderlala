import api from '@/lib/axiosInterceptor';

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export const submitContact = async (data: ContactPayload) => {
  const response = await api.post('/contact', data);
  return response.data;
};
