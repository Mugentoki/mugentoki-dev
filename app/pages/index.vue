<template>
    <div class="page-home" @click="switchScreen()">
        <Transition name="hide-title-screen">
            <div v-show="showTitleScreen" class="title-screen">
                <div class="visually-hidden">
                    <hgroup>
                        <h1>{{ $t('Alex "Mugentoki" Berger') }}</h1>
                        <p>{{ $t('Web Developer & Game Design Newbie') }}</p>
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
                            <UiMainMenuItem to="/about">{{ $t('About Me') }}</UiMainMenuItem>
                        </li>
                        <li>
                            <UiMainMenuItem to="/projects">{{ $t('Web Development') }}</UiMainMenuItem>
                        </li>
                        <li>
                            <UiMainMenuItem to="/contact">{{ $t('Game Design') }}</UiMainMenuItem>
                        </li>
                        <li>
                            <UiMainMenuItem to="/contact">{{ $t('Now') }}</UiMainMenuItem>
                        </li>
                        <li>
                            <UiMainMenuItem to="/contact">{{ $t('Settings') }}</UiMainMenuItem>
                        </li>
                    </ul>
                </nav>
                <UiTurbulenceFilter />
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
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
    if (event.target instanceof HTMLElement &&
        (event.target?.tagName === 'BUTTON' || event.target?.closest('button'))) { 
            return;
    }

    if (event.key === 'Enter') {
        switchScreen();
    }
}

function handleClickAnywhere(event: MouseEvent) {
    if (event.target instanceof HTMLElement &&
        (event.target?.tagName === 'BUTTON' || event.target?.closest('button'))) { 
            return;
    }
    
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
    flex-grow: 1;
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