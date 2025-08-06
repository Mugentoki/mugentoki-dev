<template>
    <div class="footer-language-select">
        <button
            id="footer-language"
            class="footer-language-select__button"
            aria-haspopup="menu"
            aria-controls="footer-language-menu"
            :aria-expanded="languageMenuOpen"
            @click="toggleLanguageMenu"
            ref="languageButtonRef"
        >
            <Icon name="iconoir:language" />
        </button>
        <Transition name="slidexy">
            <ul
                v-show="languageMenuOpen"
                id="footer-language-menu"
                class="footer-language-select__list"
                role="menu"
                aria-labelledby="footer-language"
            >
                <li
                    v-for="locale in locales"
                    :key="locale.code"
                    class="footer-language-select__list-item"
                    :class="{ 'is-active': isCurrentLocale(locale.code) }"
                    role="menuitem"
                >
                    <button @click="setLocale(locale.code)">{{ locale.name }}</button>
                </li>  
            </ul>
        </Transition>
    </div>
</template>

<script setup lang="ts">
    const { locale, locales, setLocale } = useI18n()

    const languageMenuOpen = ref(false)

    console.log(locale);

    const toggleLanguageMenu = () => {
        languageMenuOpen.value = !languageMenuOpen.value;

        if (languageMenuOpen.value) {
            // focus the current active button
        } else {
            // focus the language menu toggle button
        }
    }

    const isCurrentLocale = (code: string) => {
        return locale.value === code;
    }
</script>

<style lang="css">
.footer-language-select {
    position: relative;
}

.footer-language-select__button {
    display: flex;
    padding: var(--spacing-xs);
    border: var(--default-ui-border);
}

.footer-language-select__list {
    position: absolute;
    bottom: calc(100% - var(--default-ui-border-width));
    right: 0;
    border: var(--default-ui-border);
    padding-block: var(--spacing-xs);
    padding-right: var(--spacing-md);
    padding-left: var(--spacing-xl);
    transform-origin: bottom right;
}

.footer-language-select__list-item {
    position: relative;

    &.is-active {
        button {
            text-decoration: underline;
        }
    }

    button {
        &:focus {
            &:before {
                content: '>';
                position: absolute;
                right: calc(100% + var(--spacing-xs));
                top: -2px;
            }
        }
    }
}
</style>