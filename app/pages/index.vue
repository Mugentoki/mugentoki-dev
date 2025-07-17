<template>
    <div class="page-home">
        <nav class="realm-select">
            <ul aria-label="Realm Selection">
                <li><IndexRealmSelect realm="gintoki">About Me</IndexRealmSelect></li>
                <li><IndexRealmSelect realm="kagura">Web Development</IndexRealmSelect></li>
                <li><IndexRealmSelect realm="shinpachi">Astronomy</IndexRealmSelect></li>
                <li><IndexRealmSelect realm="tama">Worldbuilding</IndexRealmSelect></li>
                <li><IndexRealmSelect realm="gintoki">Blog</IndexRealmSelect></li>
                <li><IndexRealmSelect realm="sadaharu">Definitely Not Government Secrets</IndexRealmSelect></li>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'landing'
});
</script>

<style lang="css">
.page-home {
    min-height: 100dvh;
    min-width: 100vw;
    max-width: 100vw;
    width: 100vw;
}

.realm-select {
    ul {
        display: grid;
        grid-template-columns: 1fr;
        gap: 8px;

        li {
            width: 100%;
        }
    }
}
</style>