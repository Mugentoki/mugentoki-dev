<template>
    <div class="template-wrapper">
        <slot />
        <div>
            <button v-for="locale in locales" @click="setLocale(locale.code)">
            {{ locale.name }}
            </button>
        </div>
    </div>
</template>

<script setup>
    const { locales, setLocale } = useI18n()
</script>