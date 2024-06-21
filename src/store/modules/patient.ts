import { defineStore } from "pinia";
import { store } from "@/store";

export const usePatientStore = defineStore({
  id: "admin-patient",
  state: () => ({
    patientData: {}
  }),
  getters: {
    getPatientData() {
      return this.patientData;
    }
  },
  actions: {
    setData(data) {
      this.patientData = data;
    }
  }
});

export function usePatientStoreHook() {
  return usePatientStore(store);
}
