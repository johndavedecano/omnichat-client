import OmniWebChatApp from "./OmniWebChatApp.svelte";

import store from "./store.js";

export const OmniWebChat = {
  initialize(element, props) {
    // initialize store attributes
    if (props.title) {
      store.setAttribute("title", props.title);
    }

    if (props.placeholder) {
      store.setAttribute("placeholder", props.placeholder);
    }

    if (props.screen) {
      store.setAttribute("screen", props.screen);
    }

    if (!element) {
      console.error("element is required to initialize the webchat");
      return;
    }

    const app = new OmniWebChatApp({
      target: element,
    });
  },
};
