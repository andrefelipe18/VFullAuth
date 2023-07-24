<script setup lang="ts">
defineProps(['value']);
</script>

<template>
    <label class="block font-medium text-sm text-gray-700">
        <span v-if="value" class="label-text">{{ value }}</span>
        <span v-else class="label-text"><slot /></span>
    </label>
</template>
