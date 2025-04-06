
import { toast } from 'react-toastify';

export const toastError = (msg) => toast.error(msg, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 60000,
    hideProgressBar: true
});
export const toastSuccess = (msg) => toast.success(msg, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 3000,
    hideProgressBar: true
});