import { it, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";
import DashboardRating from "../DashboardRating.vue";

import { createTestingPinia } from "@pinia/testing";

describe.concurrent("Render Rating DashBoard", () => {
  it("renders the Rating dashboard", () => {
    const wrapper = mount(DashboardRating, {
      global: {
        plugins: [createTestingPinia({ createSpy: () => {} })],
      },
    });

    expect(wrapper).toMatchSnapshot();
  });
});
