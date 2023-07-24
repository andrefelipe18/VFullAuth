<script setup lang="ts">
defineProps({
    type: {
        typeButton: String,
        default: 'submit',
    },
    processing: {
        type: Boolean,
    },
});
</script>

<template>
    <button
        :typeButton="type"
        :processing="processing"
        :class="{ 'opacity-80': processing }"
        :disabled="processing"
        class="btn btn-accent">      
        <span v-if="processing"> <span class="loading loading-spinner text-primary"></span> </span>
        <span v-else>
            <slot />
        </span>
    </button>
</template>
