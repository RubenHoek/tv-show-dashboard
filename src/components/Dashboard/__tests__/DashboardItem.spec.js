import { it, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";
import DashboardItem from "../DashboardItem.vue";

// Mock props
const id = 1;
const name = "test-name";
const officialSite = "test-website";
const language = "test-English";
const premiered = "test-premiered";
const rating = 8.1;
const countryItem = true;
const airdate = "test-airdate";
const airtime = "test-airtime";

describe.concurrent("Render a DashboardItem", () => {
  it("renders the dashboardItem", () => {
    const wrapper = mount(DashboardItem, {
      props: { id, name, officialSite, language, premiered, rating },
    });

    expect(wrapper).toMatchSnapshot();
  });
  it("does render correct fields when prop !countryItem", () => {
    const wrapper = mount(DashboardItem, {
      props: {
        id,
        name,
        officialSite,
        language,
        premiered,
        rating,
        airdate,
        airtime,
      },
    });

    expect(wrapper.text()).toContain("test-website");
    expect(wrapper.text()).not.toContain("test-airdate");
    expect(wrapper.text()).not.toContain("test-airtime");
  });
  it("does render correct fields when prop countryItem = true and no website is passed", () => {
    const wrapper = mount(DashboardItem, {
      props: {
        id,
        name,
        language,
        premiered,
        rating,
        airdate,
        airtime,
        countryItem,
      },
    });

    expect(wrapper.text()).toContain(
      "There is no website known in our database"
    );
    expect(wrapper.text()).toContain("test-airdate");
    expect(wrapper.text()).toContain("test-airtime");
  });
});
