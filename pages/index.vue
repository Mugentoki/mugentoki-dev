<template>
    <div class="relative w-full h-dvh overflow-hidden">
        <div
            class="absolute left-1/2 top-1/2 -translate-1/2 flex justify-center items-center relative
            w-[80%] max-w-[650px] aspect-square rounded-full overflow-hidden z-20 shadow-[0px_0px_10px_7px_var(--realm-primary-color)] transition-shadow duration-500">
            <div class="relative text-black z-20 bg-white rounded-full w-1/2 h-1/2 flex justify-center items-center overflow-hidden text-center">
                <Transition name="fade" mode="out-in">
                    <div v-show="isRealmActive('about')" class="absolute w-full h-full flex flex-col justify-center items-center">
                        <h1 class="text-3xl">Alex "Mugentoki" Berger</h1>
                        <p>Some stuff about myself</p>
                    </div>
                </Transition>
                <Transition name="fade" mode="out-in">
                    <div v-show="isRealmActive('web')" class="absolute w-full h-full flex flex-col justify-center items-center">
                        <h1 class="text-3xl">Web Projects</h1>
                        <p>Super cool web projects</p>
                    </div>
                </Transition>
                <Transition name="fade" mode="out-in">
                    <div v-show="isRealmActive('astronomy')" class="absolute w-full h-full flex flex-col justify-center items-center">
                        <h1 class="text-3xl">Astronomy</h1>
                        <p>Spacy Astronomy projects</p>
                    </div>
                </Transition>
                <Transition name="fade" mode="out-in">
                    <div v-show="isRealmActive('worldbuilding')" class="absolute w-full h-full flex flex-col justify-center items-center">
                        <h1 class="text-3xl">Worldbuilding</h1>
                        <p>Fantastic fantasy world building projects</p>
                    </div>
                </Transition>
                <Transition name="fade" mode="out-in">
                    <div v-show="isRealmActive('fractal')" class="absolute w-full h-full flex flex-col justify-center items-center">
                        <h1 class="text-3xl">Fractal Drift</h1>
                        <p>Feel the randomness</p>
                    </div>
                </Transition>
            </div>
            <a
                id="about"
                class="cake-slice transition-bg duration-500"
                :class="isRealmActive('about') ? 'bg-black/75': 'bg-orange-700'"
                @mouseenter="setRealm('about')"
                @focus="setRealm('about')"
            >
                <div class="w-full h-full flex justify-center items-end pb-8">About Me</div>
            </a>
            <a
                id="web"
                class="cake-slice bg-red-800 rotate-[72deg] transition-bg duration-500"
                :class="isRealmActive('web') ? 'bg-transparent': ''"
                @mouseenter="setRealm('web')"
                @focus="setRealm('web')"
            >
                <div class="w-full h-full flex justify-center items-end pb-8">Web Projects</div>
            </a>
            <a
                id="astronomy"
                class="cake-slice bg-blue-800 rotate-[144deg] transition-bg duration-500"
                :class="isRealmActive('astronomy') ? 'bg-transparent': ''"
                @mouseenter="setRealm('astronomy')"
                @focus="setRealm('astronomy')"
            >
                <div class="w-full h-full flex justify-center items-end pb-8">Astronomy Projects</div>
            </a>
            <a
                id="worldbuilding"
                class="cake-slice bg-orange-800 rotate-[216deg] transition-bg duration-500"
                :class="isRealmActive('worldbuilding') ? 'bg-transparent': ''"
                @mouseenter="setRealm('worldbuilding')"
                @focus="setRealm('worldbuilding')"
            >
                <div class="w-full h-full flex justify-center items-end pb-8">World-Building Projects</div>
            </a>
            <a
                id="fractal"
                class="cake-slice bg-purple-800 rotate-[288deg] transition-bg duration-500"
                :class="isRealmActive('fractal') ? 'bg-transparent': ''"
                @mouseenter="setRealm('fractal')"
                @focus="setRealm('fractal')"
            >
                <div class="w-full h-full flex justify-center items-end pb-8">Fractal Drift</div>
            </a>
        </div>
        <div class="absolute top-0 left-0 w-full h-full z-10">
            <!-- Todo: need to replace images with own ones. For now it's just placeholders -->
            <Transition name="fade" mode="out-in">
                <div v-show="isRealmActive('about')" class="absolute w-full h-full bg-orange-700">
                    <img class="w-full h-full object-cover" src="/images/spaceship-bridge.png" alt="About me realm cover image" />
                </div>
            </Transition>
            <Transition name="fade" mode="out-in">
                <div v-show="isRealmActive('web')" class="absolute w-full h-full bg-red-800">
                    <img class="w-full h-full object-cover" src="/images/virtual-reality.jpg" alt="Web projects realm cover image" />
                </div>
            </Transition>
            <Transition name="fade" mode="out-in">
                <div v-show="isRealmActive('astronomy')" class="absolute w-full h-full bg-blue-800">
                    <img class="w-full h-full object-cover" src="/images/galaxy.jpg" alt="Astronomy realm cover image" />
                </div>
            </Transition>
            <Transition name="fade" mode="out-in">
                <div v-show="isRealmActive('worldbuilding')" class="absolute w-full h-full bg-orange-800">
                    <img class="w-full h-full object-cover" src="/images/world-building.jpg" alt="World building realm cover image" />
                </div>
            </Transition>
            <Transition name="fade" mode="out-in">
                <div v-show="isRealmActive('fractal')" class="absolute w-full h-full bg-purple-800">
                    <img class="w-full h-full object-cover" src="/images/glitch.jpg" alt="Fractal drift realm cover image" />
                </div>
            </Transition>
        </div>
    </div>
</template>

<script setup lang="ts">
    const activeRealm = ref<string>('about');

    const setRealm = (realm: string) => {
        activeRealm.value = realm;
        document.documentElement.classList.remove('realm-about', 'realm-web', 'realm-astronomy', 'realm-worldbuilding', 'realm-fractal');
        document.documentElement.classList.add(`realm-${realm}`);
    };

    const isRealmActive = (realm: string) => {
        return activeRealm.value === realm;
    };
</script>