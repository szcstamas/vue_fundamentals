import EventService from "@/services/EventService";
import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    user: { id: "abc123", name: "Adam Jahr" },
    categories: [
      "sustainability",
      "nature",
      "animal welfare",
      "housing",
      "education",
      "food",
      "community",
    ],
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false },
      { id: 3, text: "...", done: true },
      { id: 4, text: "...", done: false },
    ],
    events: [],
  },
  getters: {
    catLength: (state) => {
      return state.categories.length;
    },
    doneTodos: (state) => {
      return state.todos.filter((todo) => todo.done);
    },
    activeTodosCount: (state) => {
      return state.todos.filter((todo) => !todo.done).length;
    },
    activeTodosCountWithGetters: (state, getters) => {
      return state.todos.length - getters.doneTodos.length;
    },
    getEventById: (state) => (id) => {
      return state.events.find((event) => event.id === id);
    },
    firstCategory: (state) => {
      return state.categories[0];
    },
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    SET_EVENTS(state, events) {
      state.events = events;
    },
    INCREASE_NUMBER(state, value) {
      state.count += value;
    },
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit("ADD_EVENT", event);
      });
    },
    fetchEvents({ commit }) {
      EventService.getEvents()
        .then((response) => {
          commit("SET_EVENTS", response.data);
        })
        .catch((error) => console.log(error));
    },
    updateCount({ commit }, value) {
      commit("INCREASE_NUMBER", value);
    },
  },
  modules: {},
});
