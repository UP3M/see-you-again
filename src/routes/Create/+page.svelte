<script lang="ts">
	import { push, ref} from 'firebase/database';
	import { db } from '$lib/scripts/firestore';
	import { Post } from '$lib/models/post';
	import { fade } from 'svelte/transition';

	import { goto } from '$app/navigation';
	import authStore from '../stores/authStore';

	let hasError = false;
	let isSuccessVisible = false;
	let submitted = false;

	const errMessage = 'All the fields are mandatory';

	function handleSubmit() {
		push(ref(db, '/posts'), post);
		post = new Post('', 1, '', '', false, '', null, '');
		isSuccessVisible = true;

		setTimeout(function () {
			isSuccessVisible = false;
		}, 4000);
	}

	let post = new Post('', 1, '', '', false, '', null, '');

	authStore.subscribe(async ({ isLoggedIn, firebaseController }) => {
		if (!isLoggedIn && firebaseController) {
			await goto('/Login');
		}
	});
</script>

<svelte:head>
	<title>Create</title>
	<meta name="description" content="Create a post for workspace" />
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>

<div
	class="flex justify-center items-center bg-center bg-cover bg-blend-overlay bg-fixed bg-black/60"
	style="background-image: url(https://png.pngtree.com/back_origin_pic/04/48/50/84cd2a9fbc6cbd5522b2f048a56703a8.jpg);"
>
	<div class="w-2/3 m-6 shadow-lg bg-white rounded-md">
		<h1 class="text-3xl block text-center font-semibold">
			<i class="fa-solid fa-user" /> Create New Post
		</h1>
		<form
			class="flex flex-col item-center m-10 space-y-6"
			class:submitted
			on:submit|preventDefault={handleSubmit}
		>
			<label for="Title" class="block text-base mb-2">Title:</label>
			<input
				type="text"
				class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
				bind:value={post.title}
				placeholder="Title"
				required
			/>

			<label for="Location" class="block text-base mb-2">Location:</label>
			<input
				type="text"
				class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
				bind:value={post.location}
				placeholder="Location"
				required
			/>

			<label for="Description" class="block text-base mb-2">Description:</label>
			<textarea
				class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
				bind:value={post.description}
				placeholder="Description"
				required
			/>

			<label for="URL of Image" class="block text-base mb-2">URL of Image:</label>
			<input
				type="url"
				class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
				bind:value={post.cover}
				placeholder="URL of Cover"
				required
			/>

			{#if post.cover}
				<img class="w-25" src={post.cover} alt="" />
			{/if}

			<label for="Date" class="block text-base mb-2">Date:</label>
			<input
				type="date"
				class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
				bind:value={post.created}
				required
			/>

			<label for="Content" class="block text-base mb-2">Content:</label>
			<textarea
				class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
				bind:value={post.content}
				placeholder="Content"
				required
			/>

			<label for="Price" class="block text-base mb-2">Price:</label>
			<input
				type="number"
				class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
				bind:value={post.price}
				placeholder="Price"
				required
			/>

			<button
				class="border-2 border-indigo-700 bg-indigo-700 text-white m-10 p-2 rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"
				on:click={() => {
					submitted = true;
				}}
				type="submit">Save</button
			>
		</form>
		{#if hasError == true}
			<p class="error-alert">{errMessage}</p>
		{:else if isSuccessVisible}
			<h2 class="text-3xl block text-center font-semibold" transition:fade={{ duration: 150 }}>
				<i class="fa-solid fa-user" />Data uploaded successfully !
			</h2>
		{/if}
	</div>
</div>
