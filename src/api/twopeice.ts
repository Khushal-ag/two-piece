import axios from "axios";

import { param } from "@/types";

const url = import.meta.env.VITE_CONSUMET_API_URL;
const params: param = {
  page: 1,
  perPage: 20,
};

export function twoPeiceGetData() {
  return axios.get(url, { params }).then((res) => res);
}
