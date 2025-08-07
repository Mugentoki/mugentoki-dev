<template>
    <div class="footer-social-link" :class="{ 'inverted' : inverted, 'last' : last }">
        <a
            :href="href"
            target="_blank"
            rel="noopener noreferrer"
            :title="title"
            :aria-label="title"
        >
            <Icon :name="iconName" />
        </a>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    href: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    iconName: {
        type: String,
        required: true
    },
    inverted: {
        type: Boolean,
        default: false
    },
    last: {
        type: Boolean,
        default: false
    }
});
</script>

<style lang="css">
.footer-social-link {
    &.inverted {
        .iconify {
            filter: invert(1);
        } 
    }
    &.last {
        margin-right: auto;
    }
}
</style>