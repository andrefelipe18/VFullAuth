<script setup lang="ts">


defineProps(['modelValue'])

defineEmits(['update:modelValue'])

const input = ref()

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus()
    }
});
</script>

<template>
    <input
        ref="input"
        class="input input-bordered border-2 bg-primary-content"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)" />
</template>
