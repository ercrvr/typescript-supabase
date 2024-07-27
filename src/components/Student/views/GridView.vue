<template>
  <div class="grid grid-cols-2 gap-4">
    <div v-for="student in students" :key="student.id" class="bg-white p-4 rounded shadow">
      <div class="flex-shrink-0 w-10 h-10">
        <img class="w-10 h-10 rounded-full" :src="defaultAvatar" alt="" />
      </div>
      <h2 class="text-lg font-medium">{{ student.first_name }} {{ student.last_name }}</h2>
      <p id="student-email" class="text-gray-500">{{ student.email }}</p>
      <p id="student-age" class="text-gray-500">Age: {{ student.age }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Student } from '@/types/Student'
import defaultAvatar from '@/assets/images/defaultAvatar.png'
defineProps({
  students: {
    type: Array<Student>,
    required: true
  }
})
</script>
