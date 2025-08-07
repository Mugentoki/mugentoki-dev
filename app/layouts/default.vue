<template>
    <div class="layout-wrapper">
        <slot />
        <div class="layout-footer">
            <UiFooterSocialLink
                href="https://github.com/Mugentoki"
                :title="$t('Mugentoki on GitHub')"
                iconName="logos:github-icon"
                :inverted="true"
            />
            <UiFooterSocialLink
                href="https://mastodon.social/@mugentoki"
                :title="$t('Mugentoki on Mastodon')"
                iconName="logos:mastodon-icon"
            />
            <UiFooterSocialLink
                href="https://www.instagram.com/mugentoki"
                :title="$t('Mugentoki on Instagram')"
                iconName="logos:instagram-icon"
                :inverted="true"
            />
            <UiFooterSocialLink
                href="https://www.linkedin.com/in/berger-alex"
                :title="$t('Alex Berger on LinkedIn')"
                iconName="logos:linkedin-icon"
                :last="true"
            />
            <UiFooterLanguageSelect />
        </div>
    </div>
</template>

<script setup lang="ts">
import { UiFooterLanguageSelect } from '#components';

</script>

<style lang="css">
.layout-wrapper {
    min-height: calc(100dvh - 2 * var(--spacing-md));
    max-height: calc(100dvh - 2 * var(--spacing-md));
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
}

.layout-footer {
    width: 100%;
    display: flex;
    gap: var(--spacing-md);
    justify-content: flex-end;
    align-items: center;
    position: relative;
    z-index: 100;
}
</style>