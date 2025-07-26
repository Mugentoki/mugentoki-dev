
<template>
    <li class="ui-select__item">
        <slot />
    </li>
</template>

<style lang="css">
.ui-select__item {
    position: relative;

    a,
    button {
        &:hover,
        &:focus {
            &:before {
                content: '';
                display: block;
                position: absolute;
                top: 50%;
                right: 100%;
                transform: translateY(-50%);
                width: 26px;
                height: 8px;
                background-image: var(--content-pixelsword-image);
                background-size: contain;
            }
        }
    }
}
</style>