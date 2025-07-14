<template>
    <div
        v-show="isRealmActive()"
        class="absolute w-full h-full flex flex-col justify-center items-center p-4"
        :class="{
            'bg-black/50': isAbout(),
            'bg-blue-500/50': isWeb(),
            'bg-purple-500/50': isAstronomy(),
            'bg-[url(/images/realm-description/scroll.png)] bg-contain px-20 text-black bg-no-repeat bg-center': isWorldbuilding(),
            'bg-[url(/images/realm-description/glitch.png)] bg-contain px-20 text-white bg-no-repeat bg-center': isFractal(),
        }">
        <slot />
    </div>
</template>

<script setup lang="ts">
    import { useRealmStore } from '~/stores/realm';

    const realmStore = useRealmStore();

    const { realm } = defineProps<{
        realm: string
    }>()

    const isRealmActive = () => {
        return realmStore.getActiveRealm === realm;
    };

    const isAbout = () => {
        return realm === 'about';
    };

    const isWeb = () => {
        return realm === 'web';
    };

    const isAstronomy = () => {
        return realm === 'astronomy';
    };

    const isWorldbuilding = () => {
        return realm === 'worldbuilding';
    };

    const isFractal = () => {
        return realm === 'fractal';
    };
</script>