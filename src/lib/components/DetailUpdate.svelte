<script lang="ts">
	import type { Post } from '$lib/models/post';
	import { db } from '$lib/scripts/firestore';
	import { push, ref, set, remove } from 'firebase/database';

	import Updating from './Updating.svelte';

	export let post_final: Post;
	export let key: string;

	function removePost(n: string) {
		remove(ref(db, `/posts/${n}`));
	}
</script>

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
							class="py-4 text-sm font-bold text-white uppercase bg-blue-500 rounded-sm px-14 hover:bg-red-600"
							on:click={() => removePost(key)}
							>Delete the Post ?
						</button>
					</div>
				</div>
			</div>
			<div class="relative flex flex-col items-end w-1/2 p-4">
				<img class="w-100 rounded-lg" src={post_final.cover} alt="" />
			</div>
		</div>

		<div class="row row-cols-1 row-cols-md-3 g-4">
			<div class="col">
				<Updating {post_final} {key} />
			</div>
		</div>
	</main>
</div>
