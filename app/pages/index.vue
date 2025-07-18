<template>
    <div class="page-home">
        <nav class="realm-select-wrapper">
            <ul aria-label="Realm Selection">
                <li><IndexRealmSelect realm="gintoki">About Me</IndexRealmSelect></li>
                <li><IndexRealmSelect realm="kagura">Web Development</IndexRealmSelect></li>
                <li><IndexRealmSelect realm="shinpachi">Astronomy</IndexRealmSelect></li>
                <li><IndexRealmSelect realm="tama">Worldbuilding</IndexRealmSelect></li>
                <li><IndexRealmSelect realm="sadaharu">Definitely Not Government Secrets</IndexRealmSelect></li>
            </ul>
        </nav>
        <div class="realm-description-wrapper">
            <Transition>
                <IndexRealmDescription v-show="realmStore.realm === 'gintoki'">
                    <h1>Mugentoki</h1>
                    <p>Welcome to my personal space on the web. Here, I share my interests</p>
                    <p>Blah blah</p>
                </IndexRealmDescription>
            </Transition>
            <Transition>
                <IndexRealmDescription v-show="realmStore.realm === 'kagura'">
                    <h2>Web Development</h2>
                    <p>Blah blah</p>
                </IndexRealmDescription>
            </Transition>
            <Transition>
                <IndexRealmDescription v-show="realmStore.realm === 'shinpachi'">
                    <h2>Astronomy</h2>
                    <p>Blah blah</p>
                </IndexRealmDescription>
            </Transition>
            <Transition>
                <IndexRealmDescription v-show="realmStore.realm === 'tama'">
                    <h2>Worldbuilding</h2>
                    <p>Blah blah</p>
                </IndexRealmDescription>
            </Transition>
            <Transition>
                <IndexRealmDescription v-show="realmStore.realm === 'sadaharu'">
                    <h2>Definitely Not Government Secrets</h2>
                    <p>Blah blah</p>
                </IndexRealmDescription>
            </Transition>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRealmStore } from '~/stores/realm';

const realmStore = useRealmStore();

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
    border-radius: var(--rounded-xl);
    border: 3px solid var(--color-accent);
    background-color: rgba(0, 0, 0, 0.25);
    overflow: hidden;
    position: relative;
    color: var(--color-text);
}
</style>