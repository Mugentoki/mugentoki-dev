<template>
    <div class="page-home" @click="switchScreen()">
        <Transition name="hide-title-screen">
            <div v-show="showTitleScreen" class="title-screen">
                <div class="visually-hidden">
                    <hgroup>
                        <h1>Alex "Mugentoki" Berger</h1>
                        <p>Web Developer & Game Design Newbie</p>
                    </hgroup>
                </div>
                <UiPressEnter :pressed="!tmp" />
            </div>
        </Transition>
        <Transition name="hide-title-screen">
            <div v-show="!showTitleScreen" class="main-menu-screen">
                <h2>This is menu</h2>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'landing'
});

const showTitleScreen = ref(true);
const tmp = ref(true);

function switchScreen() {
    //showTitleScreen.value = false;
    tmp.value = !tmp.value;
}
</script>

<style lang="css">
.page-home {
    min-height: calc(100dvh - 2 * var(--spacing-md));
    max-height: calc(100dvh - 2 * var(--spacing-md));
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-lg);
    position: relative;
}

.title-screen,
.hide-title-screen {
    position: absolute;
}

.title-screen {
    z-index: 5;
}

.hide-title-screen {
    z-index: 10;
}
</style>