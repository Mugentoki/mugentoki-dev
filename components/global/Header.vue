<template>
    <header class="header-main">
        <div>Test Header</div>
    </header>
</template>

<style class="css">
    .header-main {
        grid-column-start: 1;
        grid-row-start: 1;
        position: relative;
        z-index: 2;
        align-self: flex-start;

        @media screen and (min-width: 768px) {
            grid-column-start: 2;
            grid-row-start: 1;
        }
    }
</style>