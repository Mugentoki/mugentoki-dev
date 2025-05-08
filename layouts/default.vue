<template>
    <div class="layout default">
        <GlobalHeader />
        <GlobalMainNavigation />
        <slot />
        <GlobalFooter />
    </div>
</template>

<style lang="css">
    .layout {
        &.default {
            display: grid;
            position: relative;
            transition: grid-template-columns var(--transition-default);

            @media screen and (min-width: 768px) {
                grid-template-columns: var(--main-nav-width) 1fr;
                grid-template-rows: 1fr;
                grid-column-gap: 0px;
                grid-row-gap: 0px;
            }

            &:has(.main-navigation:hover) {
                grid-template-columns: var(--main-nav-width-expanded) 1fr;
            }
        }
    }
</style>