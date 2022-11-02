import { it, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SearchBar from "../SearchBar.vue";

import { createTestingPinia } from "@pinia/testing";

//Mock props
const placeholder = "Test placholder";

describe.concurrent("Render the SearchBar", () => {
  it("renders the SearchBar", () => {
    const wrapper = mount(SearchBar, {
      props: { placeholder },
      global: {
        plugins: [createTestingPinia({ createSpy: () => {} })],
      },
    });

    expect(wrapper).toMatchSnapshot();
  });
});
