<template>
    <div class="page-home">
        <nav class="realm-select-wrapper">
            <ul aria-label="Realm Selection">
                <li><IndexRealmSelect realm="gintoki">About Me</IndexRealmSelect></li>
                <li><IndexRealmSelect realm="kagura">Web Development</IndexRealmSelect></li>
                <li><IndexRealmSelect realm="shinpachi">Astronomy</IndexRealmSelect></li>
                <li><IndexRealmSelect realm="tama">Worldbuilding</IndexRealmSelect></li>
                <li><IndexRealmSelect realm="sadaharu">Definitely Not Government Secrets</IndexRealmSelect></li>
                <li><IndexRealmSelect realm="gintoki">Blog</IndexRealmSelect></li>
            </ul>
        </nav>
        <div class="realm-description-wrapper" style="background:red;"></div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'landing'
});
</script>

<style lang="css">
.page-home {
    min-height: calc(100dvh - 2 * var(--spacing-md));
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
}

.realm-select-wrapper {
    ul {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--spacing-sm);

        li {
            width: 100%;
        }
    }
}

.realm-description-wrapper {
    flex-grow: 1;
    min-height: 400px;
}
</style>