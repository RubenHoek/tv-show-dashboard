import { it, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Hero from "../Hero.vue";

import { createTestingPinia } from "@pinia/testing";

//Mock props
const titel = "Test title for Hero"
const subtitle = "Test subtitle for Hero"

describe.concurrent("Render the Hero", () => {
  it("renders the Hero", () => {
    const wrapper = mount(Hero, {
      props: { titel, subtitle },
      global: {
        plugins: [createTestingPinia({ createSpy: () => {} })],
      },
    });

    expect(wrapper).toMatchSnapshot();
  });
});
