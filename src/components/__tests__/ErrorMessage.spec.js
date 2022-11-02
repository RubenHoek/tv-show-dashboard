import { it, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ErrorMessage from "../ErrorMessage.vue";

import { createTestingPinia } from "@pinia/testing";

describe.concurrent("Render ErrorMessage", () => {
  it("renders the Error Message", () => {
    const wrapper = mount(ErrorMessage, {
      global: {
        plugins: [createTestingPinia({ createSpy: () => {} })],
      },
    });

    expect(wrapper).toMatchSnapshot();
  });
});
