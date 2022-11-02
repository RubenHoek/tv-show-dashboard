import { it, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SearchView from "../SearchView.vue";
import { createTestingPinia } from "@pinia/testing";

describe.concurrent("Render search view", () => {
  it("renders the search page template", () => {
    const wrapper = mount(SearchView, {
      global: {
        plugins: [createTestingPinia({ createSpy: () => {} })],
      },
    });

    expect(wrapper).toMatchSnapshot();
  });
});
