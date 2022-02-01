import api from "./api";

export default {
  newTariff: (data: {
    ddd_init : number
    ddd_end : number
    tariff : number
  }) => {
    return api.post('tariff', data);
  },

  getTariffs: () => {
    return api.get('tariffs');
  },

  removeTariff: (data: {
    id: number
  }) => {
    return api.post('tariff-remove/', data);
  }
}
