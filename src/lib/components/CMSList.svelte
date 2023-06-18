<script context="module" lang="ts">
	import ListCard from './ListCard.svelte';
	import { onValue, ref } from 'firebase/database';
	import { db } from '$lib/scripts/firestore';

	let postss = new Array();
	export async function load(){
		await onValue(ref(db, '/posts'), (s) => {
			if (s.exists()) {
				postss = Object.values(s.val());
			}
		});

		return {
			props: {
				postss
		}
		};
	}
</script>

<div class="md:h-full flex flex-wrap items-center text-gray-600">
	{#each postss as post, i}
		<div class="p-4 w-1/3">
			<ListCard {post} {i} />
		</div>
	{/each}
</div>
