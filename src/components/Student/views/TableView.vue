<template>
  <table id="students-table" class="min-w-full">
    <thead>
      <tr>
        <th
          class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
        >
          ID
        </th>
        <th
          class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
        >
          First Name
        </th>
        <th
          class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
        >
          Last Name
        </th>
        <th
          class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
        >
          Email Address
        </th>
        <th
          class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
        >
          Age
        </th>
      </tr>
    </thead>
    <tbody class="bg-white">
      <tr v-for="student in students" :key="student.id">
        <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
          <div class="text-sm leading-5 text-gray-900">{{ student.id }}</div>
        </td>
        <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
          <div class="text-sm leading-5 text-gray-900">{{ student.first_name }}</div>
        </td>
        <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
          <div class="text-sm leading-5 text-gray-500">{{ student.last_name }}</div>
        </td>
        <td
          class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
        >
          <div class="text-sm leading-5 text-gray-900">{{ student.email }}</div>
        </td>
        <td
          class="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap"
        >
          <div class="text-sm leading-5 text-gray-900">{{ student.age }}</div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type { Student } from '@/types/Student'

defineProps({
  students: {
    type: Array<Student>,
    required: true
  }
})
</script>
