import { it, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SelectGenre from "../SelectGenre.vue";

import { createTestingPinia } from "@pinia/testing";

describe.concurrent("Render SelectGenre", () => {
  it("renders the SelectGenre", () => {
    const wrapper = mount(SelectGenre, {
      global: {
        plugins: [createTestingPinia({ createSpy: () => {} })],
      },
    });

    expect(wrapper).toMatchSnapshot();
  });
});
