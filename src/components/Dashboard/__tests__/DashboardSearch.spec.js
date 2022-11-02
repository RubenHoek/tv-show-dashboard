import { it, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";
import DashboardSearch from "../DashboardSearch.vue";

import { createTestingPinia } from "@pinia/testing";

describe.concurrent("Render Search DashBoard", () => {
  it("renders the Search dashboard", () => {
    const wrapper = mount(DashboardSearch, {
      global: {
        plugins: [createTestingPinia({ createSpy: () => {} })],
      },
    });

    expect(wrapper).toMatchSnapshot();
  });
});
