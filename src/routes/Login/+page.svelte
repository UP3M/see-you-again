<script lang="ts">
	import { initializeApp } from 'firebase/app';
	import {
		getAuth,
		signInWithEmailAndPassword,
		type User,
		onAuthStateChanged
	} from 'firebase/auth';
	import { onMount } from 'svelte';
	import { firebaseConfig } from '$lib/scripts/config.js';
	import { goto } from '$app/navigation';
	import authStore from '../stores/authStore';
	import { fade } from 'svelte/transition';

	let email = '';
	let password = '';
	let user: User | null;

	let errorMessage: string | null;
	let errorCode: string | null;

	const app = initializeApp(firebaseConfig);

	const login = () => {
		const auth = getAuth(app);
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				authStore.set({
					isLoggedIn: userCredential !== null,
					firebaseController: true
				});
				goto('/Create');
			})
			.catch((error) => {
				errorCode = error.code;
				errorMessage = error.message;
				console.log(errorCode, errorMessage);
			});
	};

	onMount(async () => {
		const auth = getAuth(app);
		onAuthStateChanged(auth, (newUser) => {
			console.log(user);
			user = newUser;
		});
	});
</script>

<svelte:head>
	<title>Login</title>
	<meta name="description" content="Login for admin" />
	<html lang="en" />
</svelte:head>

<div
	class="flex justify-center items-center h-screen bg-center bg-cover bg-blend-overlay bg-fixed bg-black/60"
	style="background-image: url(https://png.pngtree.com/back_origin_pic/04/48/50/84cd2a9fbc6cbd5522b2f048a56703a8.jpg);"
>
	<div class="w-96 p-6 shadow-lg bg-white rounded-md">
		<h1 class="text-3xl block text-center font-semibold"><i class="fa-solid fa-user" /> Login</h1>
		<hr class="mt-3" />
		<div class="mt-3">
			<label for="username" class="block text-base mb-2">Username</label>
			<input
				type="text"
				id="username"
				class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
				placeholder="Enter Username..."
				bind:value={email}
				required
			/>
		</div>
		<div class="mt-3">
			<label for="password" class="block text-base mb-2">Password</label>
			<input
				type="password"
				id="password"
				class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
				placeholder="Enter Password..."
				bind:value={password}
				required
			/>
		</div>
		<div class="mt-5">
			<button
				on:click={login}
				type="submit"
				class="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"
				><i class="fa-solid fa-right-to-bracket" />&nbsp;&nbsp;Login</button
			>
		</div>
		{#if errorMessage !== null}
			<h2 class="text-brightRed font-bold text-center" transition:fade={{ duration: 150 }}>
				Email or Password incorrect
			</h2>
		{/if}f
	</div>
</div>
