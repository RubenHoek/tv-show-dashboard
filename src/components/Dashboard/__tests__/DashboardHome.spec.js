import { it, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";
import DashboardHome from "../DashboardHome.vue";

import { createTestingPinia } from "@pinia/testing";

describe.concurrent("Render DashBoard Home", () => {
  it("renders the Home dashboard", () => {
    const wrapper = mount(DashboardHome, {
      global: {
        plugins: [createTestingPinia({ createSpy: () => {} })],
      },
    });

    expect(wrapper).toMatchSnapshot();
  });
});
