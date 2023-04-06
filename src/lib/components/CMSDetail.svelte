<script lang="ts">
	import DetailCard from './DetailCard.svelte';
	import { onMount } from 'svelte';
	import { onValue, ref } from 'firebase/database';
	import { db } from '$lib/scripts/firestore';
	import { Post } from '$lib/models/post';

	export let id: string;

	var postsN = new Array();

	var post_final = new Post('', 0, '', '', false, '', null, '');
	onMount(() => {
		onValue(ref(db, '/posts'), (s) => {
			if (s.exists()) {
				postsN = Object.values(s.val());
				post_final = postsN[parseInt(id)];
			}
		});
	});
</script>

<div class="row row-cols-1 row-cols-md-3 g-4">
	<div class="col">
		<DetailCard {post_final} {id} />
	</div>
</div>
