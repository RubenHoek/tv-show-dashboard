import { it, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";
import AboutView from "../AboutView.vue";
import { createTestingPinia } from "@pinia/testing";

describe.concurrent("Render about view", () => {
  it("renders the about view", () => {
    const wrapper = mount(AboutView, {
      global: {
        plugins: [createTestingPinia({ createSpy: () => {} })],
      },
    });

    expect(wrapper).toMatchSnapshot();
  });
});
