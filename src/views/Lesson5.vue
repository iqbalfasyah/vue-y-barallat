<template>
  <div>
      <h1>Lesson 5: DOM Manipulation</h1>
      <p>This lesson will teach you how to manipulate the DOM using JavaScript.</p>
      <button @click="finishCourse">Finish Course</button>
  </div>
</template>

<script>
export default {
  name: 'LessonFive',
  methods: {
      finishCourse() {
          window.SCORM.finish();
      }
  }
}
</script>
