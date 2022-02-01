import api from "./api";

export default {
  calc: (data: {
    ddd_init: number,
    ddd_end: number,
    time: number,
    plan: number
  }) => {
    return api.post('calculator', data);
  }
}