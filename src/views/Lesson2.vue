<template>
  <div>
      <h1>Lesson 2: Variables and Data Types</h1>
      <p>In this lesson, we will learn about variables and data types in JavaScript.</p>
      <button @click="goToNextLesson">Next Lesson</button>
  </div>
</template>

<script>
export default {
  name: 'LessonTwo',
  methods: {
      goToNextLesson() {
          this.$router.push({ name: 'lesson3' });
      }
  }
}
</script>
