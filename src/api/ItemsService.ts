import Api from './index';
import { AxiosPromise } from 'axios';

export const getItems = (): AxiosPromise => {
  return Api().get('/search', {
    params: {
      country: 'Russian Federation',
    },
  });
};
