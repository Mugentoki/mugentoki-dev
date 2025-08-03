<template>
    <svg>
        <defs>
            <filter id="turbulence-filter">
                <feTurbulence type="fractalNoise" :baseFrequency="frequency" numOctaves="20" result="turbulence" />
                <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="50" />
            </filter>
        </defs>
    </svg>
</template>

<script setup lang="ts">
const frequency = ref(0.01);

onMounted(() => {
    const updateFrequency = () => {
        frequency.value += 0.01;
        setTimeout(updateFrequency, 66);
    };
    updateFrequency();
});
</script>