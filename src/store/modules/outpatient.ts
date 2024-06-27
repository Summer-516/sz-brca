import { defineStore } from "pinia";

export const useOutpatientStore = defineStore("outpatient", {
  state: () => ({
    selectedPatient: null
  }),

  actions: {
    setSelectedPatient(patient) {
      this.selectedPatient = patient;
    },

    clearSelectedPatient() {
      this.selectedPatient = null;
    }
  },

  getters: {
    getSelectedPatient() {
      return this.selectedPatient;
    }
  }
});
