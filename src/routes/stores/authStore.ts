import { writable } from 'svelte/store';

const authStore = writable<{
    isLoggedIn: boolean,
    firebaseController: boolean
}>({
    isLoggedIn: false,
    firebaseController: false,
});

export default {
    subscribe: authStore.subscribe,
    set: authStore.set
}
