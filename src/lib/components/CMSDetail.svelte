<script context="module" lang="ts">
	import DetailCard from './DetailCard.svelte';
	import { onValue, ref } from 'firebase/database';
	import { db } from '$lib/scripts/firestore';
	import { Post } from '$lib/models/post';

	export let id: string;

	let postsN = new Array();
	let post_final = new Post('', 0, '', '', false, '', null, '');

	onValue(ref(db, '/posts'), (s) => {
		if (s.exists()) {
			postsN.push(...Object.values(s.val()));
			post_final = postsN[parseInt(id)];
		}
	});
</script>

<div class="row row-cols-1 row-cols-md-3 g-4">
	<div class="col">
		<DetailCard bind:post_final={post_final} bind:id={id} />
	</div>
</div>
