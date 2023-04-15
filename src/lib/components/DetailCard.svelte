<script lang="ts">
	import type { Post } from '$lib/models/post';
  import authStore from '../../routes/stores/authStore';

	export let post_final: Post;
	export let id: string;
</script>

<svelte:head>
	<title>Detail of {post_final.title}</title>
	<meta name="description" content="{post_final.location}, price:{post_final.price}" />
	<html lang="en" />
</svelte:head>

<div class="font-sans text-gray-900">
	<main class="pt-10 pb-12 pl-20">
		<button class="font-bold"><a href="/Workspace">&larr; Back</a> </button>
		<div class="flex">
			<div class="flex flex-col w-1/2">
				<div class="max-w-md">
					<div class="pt-10">
						<h1 class="text-4xl font-bold tracking-wide">{post_final.title}</h1>
					</div>
					<div class="flex items-center justify-between pt-4">
						<span class="text-3xl">${post_final.price}</span>
						<div class="flex items-center">
							<div class="pl-2 leading-none">
								{post_final.created}
							</div>
						</div>
					</div>
					<p class="pt-8 leading-relaxed">
						{post_final.description}
					</p>
					<div class="flex space-x-6 pt-9">
						<button
							class="py-4 text-sm font-bold text-white uppercase bg-teal-500 rounded-sm px-14 hover:bg-teal-600"
						>
							<a href="mailto:m.wedamerta@innopolis.university">Take the workspace</a>
						</button>
					</div>
					<div class="pt-8">
						{post_final.content}
					</div>
				</div>
			</div>
			<div class="relative flex flex-col items-center w-1/2 p-4">
				<img class="w-100 rounded-lg" src={post_final.cover} alt="" />
        {#if $authStore.firebaseController}
				<a href="/Workspace/{id}/Update" class="py-10"
					><button
						class="py-4 text-sm font-bold text-white uppercase bg-teal-500 rounded-sm px-14 hover:bg-red-600"
						>Update</button
					></a>
        {/if}
			</div>
		</div>
	</main>
</div>
