import { it, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Dashboard from "../Dashboard.vue";

import { createTestingPinia } from "@pinia/testing";

// Mock props
const dashboardItems = [
  {
    id: 1,
    name: "test-name",
    officialSite: "test-site",
    language: "test-language",
    premiered: "test-premiered",
    rating: {
      average: 8.1,
    },
  },
];

describe.concurrent("Render DashBoard", () => {
  it("renders the dashboard", () => {
    const wrapper = mount(Dashboard, {
      props: { dashboardItems },
      global: {
        plugins: [createTestingPinia({ createSpy: () => {} })],
      },
    });

    expect(wrapper).toMatchSnapshot();
  });
});
