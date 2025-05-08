<template>
    <footer class="footer-main">
        <div>Test Footer</div>
    </footer>
</template>

<style class="css">
    .footer-main {
        grid-column-start: 1;
        grid-row-start: 1;
        position: relative;
        z-index: 2;
        align-self: flex-end;

        @media screen and (min-width: 768px) {
            grid-column-start: 2;
            grid-row-start: 1;
        }
    }
</style>