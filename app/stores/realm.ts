export const useRealmStore = defineStore('realm', () => {
    /* ref() -> state properties */
    const realm = ref('gintoki');

    /* computed() -> getters */
    const currentRealm = computed(() => realm.value);

    /* function() -> actions */
    function setRealm(newRealm: string) {
        realm.value = newRealm;
    }

  return { realm, currentRealm, setRealm }
});