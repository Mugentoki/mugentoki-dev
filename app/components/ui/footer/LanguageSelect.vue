<template>
    <div class="footer-language-select">
        <button
            id="footer-language"
            class="footer-language-select__button"
            aria-haspopup="menu"
            aria-controls="footer-language-menu"
            :aria-expanded="languageMenuOpen"
            @click="toggleLanguageMenu"
            ref="togglebutton"
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
                    ref="languages"
                    :data-locale="locale.code"
                >
                    <button @click="selectLocale(locale.code)">{{ locale.name }}</button>
                </li>  
            </ul>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import type { LocaleObject } from '@nuxtjs/i18n';

    const { locale, locales, setLocale } = useI18n()

    const languageMenuOpen = ref(false)

    const languageRefs = useTemplateRef('languages');
    const toggleButtonRef = useTemplateRef('togglebutton');

    const toggleLanguageMenu = () => {
        languageMenuOpen.value = !languageMenuOpen.value;

        // If the language menu is closed, focus the toggle button.
        if (!languageMenuOpen.value) {
            toggleButtonRef.value?.focus()
            return
        }

        // Check the current selected locale and focus the corresponding button.
        const activeButton = languageRefs.value
            ?.find((ref: any) => ref.dataset.locale === locale.value)
            ?.querySelector('button')

        if (!activeButton) return

        nextTick(() => activeButton.focus())
    }

    const isCurrentLocale = (code: string) => {
        return locale.value === code;
    }

    const selectLocale = (code: 'en' | 'de' | 'ja') => {
        setLocale(code);
        toggleLanguageMenu();
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