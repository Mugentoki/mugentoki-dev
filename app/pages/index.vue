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
                <UiPressEnter :pressed="feedbackButtonPress" />
            </div>
        </Transition>
        <Transition name="hide-title-screen">
            <div v-show="!showTitleScreen" class="main-menu-screen">
                <nav>
                    <ul>
                        <li>
                            <UiMainMenuItem to="/about">About Me</UiMainMenuItem>
                        </li>
                        <li>
                            <UiMainMenuItem to="/projects">Web Development</UiMainMenuItem>
                        </li>
                        <li>
                            <UiMainMenuItem to="/contact">Game Design</UiMainMenuItem>
                        </li>
                        <li>
                            <UiMainMenuItem to="/contact">Now</UiMainMenuItem>
                        </li>
                        <li>
                            <UiMainMenuItem to="/contact">Settings</UiMainMenuItem>
                        </li>
                    </ul>
                </nav>
                <UiTurbulenceFilter />
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'landing'
});

const showTitleScreen = ref(true);
const feedbackButtonPress = ref(false);

function switchScreen() {
    unmountSwitchScreenEvents();

    feedbackButtonPress.value = true;

    setTimeout(() => {
        showTitleScreen.value = false;
    }, 1000);
}

function handleKeyDownEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
        switchScreen();
    }
}

function handleClickAnywhere() {
    switchScreen();
}

function unmountSwitchScreenEvents() {
    window.removeEventListener('keydown', handleKeyDownEnter);
    window.removeEventListener('click', handleClickAnywhere);
}

onMounted(() => {
    window.addEventListener('keydown', handleKeyDownEnter);

    window.addEventListener('click', handleClickAnywhere);
});

onBeforeUnmount(() => {
    unmountSwitchScreenEvents();
});
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
.main-menu-screen {
    position: absolute;
}

.title-screen {
    z-index: 5;
}

.main-menu-screen {
    z-index: 10;
    text-align: center;
}
</style>