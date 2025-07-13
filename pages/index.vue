<template>
    <div class="relative w-full h-dvh overflow-hidden">
        <div class="absolute z-20 flex wrap flex-col lg:flex-row w-full lg:f-auto">
            <IndexRealmSelect id="about" title="About Me" />
            <IndexRealmSelect id="web" title="Webdev" />
            <IndexRealmSelect id="astronomy" title="Astronomy" />
            <IndexRealmSelect id="worldbuilding" title="Worldbuilding" />
            <IndexRealmSelect id="fractal" title="Fractal Drift" />
        </div>

        <div
            class="left-1/2 top-1/2 -translate-1/2 flex justify-center items-center relative
            w-[80%] max-w-[650px] aspect-square rounded-full overflow-hidden z-20 shadow-[0px_0px_10px_7px_var(--realm-primary-color)] transition-shadow duration-500">
            <div class="relative text-black z-30 bg-white/80 rounded-full w-full h-full flex justify-center items-center overflow-hidden text-center">
                <Transition name="fade" mode="out-in">
                    <IndexRealmDescription realm="about">
                        <h1 class="text-3xl">Mugentoki</h1>
                        <p>Some stuff about myself - needs something else background</p>
                    </IndexRealmDescription>
                </Transition>
                <Transition name="fade" mode="out-in">
                    <IndexRealmDescription realm="web">
                        <h2 class="text-3xl">Web Projects</h2>
                        <p>Super cool web projects - needs hologram background</p>
                    </IndexRealmDescription>
                </Transition>
                <Transition name="fade" mode="out-in">
                    <IndexRealmDescription realm="astronomy">
                        <h2 class="text-3xl">Astronomy</h2>
                        <p>Astronomy and astrophysics projects - needs space background</p>
                    </IndexRealmDescription>
                </Transition>
                <Transition name="fade" mode="out-in">
                    <IndexRealmDescription realm="worldbuilding">
                        <h2 class="text-3xl">Worldbuilding</h2>
                        <p>Fantastic fantasy world building projects - needs magical book background</p>
                    </IndexRealmDescription>
                </Transition>
                <Transition name="fade" mode="out-in">
                    <IndexRealmDescription realm="fractal">
                        <h2 class="text-3xl">Fractal Drift</h2>
                        <p>Feel the randomness - needs some glitch background</p>
                    </IndexRealmDescription>
                </Transition>
            </div>
        </div>
        <div class="absolute top-0 left-0 w-full h-full z-10">
            <!-- Todo: need to replace images with own ones. For now it's just placeholders -->
            <Transition name="fade" mode="out-in">
                <IndexRealmBackground realm="about" src="/images/spaceship-bridge.png" alt="About me realm cover image" />
            </Transition>
            <Transition name="fade" mode="out-in">
                <IndexRealmBackground realm="web" src="/images/virtual-reality.jpg" alt="Web projects realm cover image" />
            </Transition>
            <Transition name="fade" mode="out-in">
                <IndexRealmBackground realm="astronomy" src="/images/galaxy.jpg" alt="Astronomy realm cover image" />
            </Transition>
            <Transition name="fade" mode="out-in">
                <IndexRealmBackground realm="worldbuilding" src="/images/world-building.jpg" alt="World building realm cover image" />
            </Transition>
            <Transition name="fade" mode="out-in">
                <IndexRealmBackground realm="fractal" src="/images/glitch.jpg" alt="Fractal drift realm cover image" />
            </Transition>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>