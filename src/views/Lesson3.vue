<template>
  <div>
      <h1>Lesson 3: Functions</h1>
      <p>This lesson covers how to define and use functions in JavaScript.</p>
      <button @click="goToNextLesson">Next Lesson</button>
  </div>
</template>

<script>
export default {
  name: 'LessonThree',
  methods: {
      goToNextLesson() {
          this.$router.push({ name: 'lesson4' });
      }
  }
}
</script>
