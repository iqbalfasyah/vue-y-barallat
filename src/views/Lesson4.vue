<template>
  <div>
      <h1>Lesson 4: Objects</h1>
      <p>Learn about objects in JavaScript and how to use them effectively.</p>
      <button @click="goToNextLesson">Next Lesson</button>
  </div>
</template>

<script>
export default {
  name: 'LessonFour',
  methods: {
      goToNextLesson() {
          this.$router.push({ name: 'lesson5' });
      }
  }
}
</script>
