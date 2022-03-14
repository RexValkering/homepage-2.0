<template>
  <div>
    <div class="row">
      <div class="col col-12">
        <h3>Experience</h3>
      </div>
    </div>
    <template v-for="project in experience" :key="project.name">
      <div class="row mt-3">
        <div class="col col-12 mb-1">
          <h4 class="secondary-heading">
            {{ project.position }}
            <span class="text-muted experience-period mx-3"
              >{{ project.period.start }} -
              {{ project.period.end ?? "now" }}</span
            >
          </h4>
          <h5 class="tertiary-heading text-muted">
            {{ project.name }}
            <template v-if="project.organisation"
              >({{ project.organisation }})</template
            >
          </h5>
          <p class="description">
            {{ project.description }}<br />
            <span v-for="link in project.links" :key="link.url"
              ><a :href="link.url">{{ link.text }}</a
              ><br
            /></span>
            <span class="text-muted"
              >Techniques: {{ project.techniques.join(", ") }}</span
            >
          </p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { experience } from "../content.ts";

export default {
  data: function () {
    return {
      experience,
    };
  },
};
</script>

<style lang="scss" scoped>
h4 .experience-period {
  font-size: 14px;
}
</style>
