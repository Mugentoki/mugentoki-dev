<template>
    <nav class="main-navigation">
        <ul>
            <li>
                <NuxtLink to="/projects">
                    <Icon name="wi:solar-eclipse" />Projects
                </NuxtLink>
                <Icon name="mdi-light:chevron-double-down" class="toggle-subnav" @click="toggleSubNav" />
                <ul>
                    <li>
                        <NuxtLink to="/projects/project-xy">Project XY
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/projects/project-yz">Project YZ
                        </NuxtLink>
                    </li>
                </ul>
            </li>
            <li>
                <NuxtLink to="/css-art">
                    <Icon name="wi:solar-eclipse" />CSS Art
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/worldbuilding">
                    <Icon name="wi:solar-eclipse" />Worldbuilding
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/astronomy">
                    <Icon name="wi:solar-eclipse" />Astronomy
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/now">
                    <Icon name="wi:solar-eclipse" />Now
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/contact">
                    <Icon name="wi:solar-eclipse" />Contact
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about">
                    <Icon name="wi:solar-eclipse" />About Me
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/bookmarks">
                    <Icon name="wi:solar-eclipse" />Bookmarks
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
function toggleSubNav(event: Event) {
    const subNav = (event.target as HTMLElement).closest('li')?.querySelector('ul');
    if (subNav) {
        subNav.classList.toggle('open');
    }
}
</script>

<style lang="css">
    .main-navigation {
        width: 100%;
        height: 100%;
        background-color: var(--ui-background-color);
        transition: left var(--transition-default);
        overflow: hidden;
        padding: var(--spacing-medium);


        @media screen and (max-width: 767px) {
            position: absolute;
            left: -100%;
            top: 0;
            z-index: 10;
        }

        @media screen and (min-width: 768px) {
            grid-column-start: 1;
            grid-row-start: 1;
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        li, a {
            white-space: nowrap;
            font-size: var(--font-size-sm);
        }

        li {
            margin-bottom: var(--spacing-small);

            a ~ ul {
                li {
                    padding-left: calc(var(--main-nav-width) - var(--spacing-medium));
                }

                li, a {
                    font-size: var(--font-size-xs);
                }
            }
        }

        a {
            text-decoration: none;
        }

        .iconify {
            width: calc(var(--main-nav-width) - var(--spacing-medium) * 2);
            height: calc(var(--main-nav-width) - var(--spacing-medium) * 2);
            margin-right: var(--spacing-medium);
            position: relative;
            top: 8px;
        }

        .toggle-subnav {
            cursor: pointer;
        }
    }
</style>