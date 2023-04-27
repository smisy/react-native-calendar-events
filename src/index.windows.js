export default {
  async checkPermissions(readOnly = false) {
  },
  async requestPermissions(readOnly = false) {
  },

  async fetchAllEvents(startDate, endDate, calendars = []) {
  },

  async findCalendars() {
  },

  async saveCalendar(options = {}) {
  },

  async removeCalendar(id) {
  },

  async findEventById(id) {
  },

  async saveEvent(title, details, options = { sync: false }) {
  },

  async removeEvent(id, options = { sync: false }) {
  },

  async uriForCalendar() {
  },

  openEventInCalendar(eventID) {
  },
};
