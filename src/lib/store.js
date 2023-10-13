import { writable } from "svelte/store";

function createStore() {
  const initialState = {
    title: "",
    placeholder: "Send a message",
    screen: "fullscreen",
    messages: [],
    user: null,
  };

  // Create a writable store with an initial value
  const { subscribe, update, set } = writable(initialState);

  return {
    subscribe,
    update,
    set,
    setAttribute: (key, val) => {
      return update((state) => {
        return {
          ...state,
          [key]: val,
        };
      });
    },
  };
}

export default createStore();
