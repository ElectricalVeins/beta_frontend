import { toast } from 'react-toastify';

export const notificateError = (error) => {
    toast.error(error?.message || JSON.stringify(error));
}

export const notificateInfo = (info) => {
    toast(info);
}
