<script setup>
import { useWebsiteStore } from "../stores/website";
import Hero from "../components/Hero.vue";

useWebsiteStore().showFilters = false;
</script>

<template>
  <Hero
    titel="About this project"
    subtitle="Thank you for visiting this project. The following is a small explanation about this website."
  />

  <section class="section">
    <h1 class="title">Setup</h1>
    <h2 class="subtitle">The Vue cli was used to setup the project.</h2>
    <p>
      I did use <strong>Pinia</strong> because this is the best store for Vue3
      IMO. <strong>Vue router</strong> for navigating pages,
      <strong>eslint and prettier</strong> for code quality and error catching.
      I didn't use <strong>TypeScipt</strong> because this is not used at ABN
      yet.
    </p>
    <br />
    <p>
      After this setup i did setup <strong>Bulma</strong> for the styling in the
      Main.scss. Because at ABN I will follow the design system, i think it's
      not logic to spend time in this assignment on showing i can come up with
      cool css stuff myself.
    </p>
    <br />
    <p>
      In the end i also decided to use <strong>Vitest</strong> for testing,
      because this seems to be the best testing library for Vue3 at the moment.
    </p>
  </section>

  <section class="section">
    <h1 class="title">Structure</h1>
    <h2 class="subtitle">Different pages and functinality.</h2>
    <p>There are 4 pages:</p>
    <p>
      - The <strong>home page</strong> which can be found when clicking on the
      Vue icon. This page get's shows for a selected country (the tab you did
      select) and the shows can be filterd on Genre.
    </p>
    <p>
      - The <strong>Rating page</strong>. This is where you can find shows with
      high rating on the top and you can use a Genre filter again.
    </p>
    <p>
      - The <strong>search page</strong>. On this page you can search for any
      show you like. It will return all shows that can be the show you are
      searching for.
    </p>
    <p>
      - The <strong>about page</strong>. Is this page where you can find some
      information about the website.
    </p>
  </section>

  <section class="section">
    <h1 class="title">Data</h1>
    <h2 class="subtitle">Handling the data.</h2>
    <p>
      I decided to fetch the data with <strong>Axios</strong>, because this
      makes it a bit easier to react on different error codes coming back from
      the api, and also handling the data.
    </p>
    <br />
    <p>
      The filtering on Genre i do with a getter so the data stays the same and
      you only have to do the API call once. Also the genres itself i get from
      the shows and store in the state.
    </p>
    <br />
    <p>
      The data from the api is stored in the state of the store. But not for the
      search page, because we don't have to store anything that's coming from
      this data (like genres), and we also do not have to filter it. That's why
      i decided to not store this data but just directly use it in the
      component.
    </p>
  </section>

  <section class="section">
    <h1 class="title">Testing</h1>
    <h2 class="subtitle">Testing application with Vitest.</h2>
    <p>
      I wanted to have the website working before i started writing the tests.
      Normally i would do this at the same time, but because i did not know how much time everything would take i decided to write the test in the end.
    </p>
    <br />
    <p>
      In the end i was very happy about this decision because i didn't have much time left. That's why i decided to make a snapshot of as many components as i could in the time that i had left. This way i still have a large portion of the app tested without having to spend a lot of time on testing. 
    </p>
    <br/>
    <p>
      The <strong>DashboardItem.spec.js</strong> is more than just a snapshot, to atleast have a component tested the way i would. For the rest the time ran out.
    </p>
  </section>
</template>
