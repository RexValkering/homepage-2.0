<template>
  <div>
    <div class="row">
      <div class="col col-12">
        <h3>{{ title }}</h3>
      </div>
    </div>
    <template v-for="project in projects">
      <div class="row mt-3" v-if="isVisible(project)" :key="project.name">
        <div class="col col-12 mb-1">
          <h4 class="secondary-heading">{{ project.name }}</h4>
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
import { projects } from "../content.ts";

export default {
  props: ["category", "title"],
  data: function () {
    const sortedProjects = [...projects];
    sortedProjects.sort((a, b) => b.year - a.year);
    return {
      projects: sortedProjects,
    };
  },
  methods: {
    isVisible(project) {
      return (
        project.tags.includes(this.category) || this.category == project.type
      );
    },
  },
};
</script>
