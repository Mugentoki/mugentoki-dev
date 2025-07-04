export const useRealmStore = defineStore('realm', {
    state: () => ({
        activeRealm: 'about',
    }),
    getters: {
        getActiveRealm: (state) => {
            return state.activeRealm;
        },
    },
    actions: {
        setActiveRealm(realm: string) {
            this.activeRealm = realm;
            document.documentElement.classList.remove(
                'realm-about',
                'realm-web',
                'realm-astronomy',
                'realm-worldbuilding',
                'realm-fractal'
            );
            document.documentElement.classList.add(`realm-${realm}`);
        },
    }
});