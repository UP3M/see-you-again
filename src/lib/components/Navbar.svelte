<script lang="ts">
	import { goto } from '$app/navigation';
	import authStore from '../../routes/stores/authStore';
	async function logout() {
		authStore.set({
					isLoggedIn: false,
					firebaseController: false
				});
		goto ('/#')
	}
</script>

<nav
	class="sticky top-0 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white z-10"
>
	<div class="flex justify-between max-w-screen-xl mx-auto">
		<div class="flex items-center space-x-28">
			<img src="/logo.png" alt="Screeno Logo" class="w-40 h-20" />
			<div class="flex space-x-20 font-bold">
				<a href="/">Home</a>
				<a href="/Workspace">Find Workspace</a>
				<a href="/About">About</a>
			</div>
		</div>
		{#if $authStore.isLoggedIn}
			<button class="font-bold px-10" on:click={logout}>Logout</button>
		{:else}
			<button class="font-bold px-10"><a href="/Login">Login</a></button>
		{/if}
		
	</div>
</nav>
