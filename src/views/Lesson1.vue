<template>
  <div>
    <h1>Lesson 1: Introduction to JavaScript</h1>
    <p>Welcome to the JavaScript course! Let's get started.</p>
    <button @click="startLesson">Start Lesson</button>
    <button @click="goToNextLesson">Next Lesson</button>
  </div>
</template>

<script>
export default {
  name: "LessonOne",
  methods: {
    startLesson() {
      window.SCORM.setValue("cmi.exit", "suspend");
    },
    goToNextLesson() {
      this.$router.push({ name: "lesson2" });
    },
  },
  mounted() {
    window.SCORM.init();
  },
  beforeUnmount() {
    window.SCORM.finish();
  },
};
</script>
