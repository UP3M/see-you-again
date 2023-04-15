<script lang="ts">
	import CmsDetailUpdate from '$lib/components/CMSDetailUpdate.svelte';
	import { page } from '$app/stores';
    
	import { goto } from '$app/navigation';
	import authStore from '../../../stores/authStore';

	$: id = $page.params.id;

    authStore.subscribe(async ({ isLoggedIn, firebaseController }) => {
		if (!isLoggedIn && !firebaseController) {
			await goto('/Login');
		}
	});
</script>


<section
	class="min-h-screen text-white bg-center bg-cover bg-blend-overlay bg-fixed bg-white/60"
	style="background-image: url(https://png.pngtree.com/back_origin_pic/04/48/50/84cd2a9fbc6cbd5522b2f048a56703a8.jpg);"
>
	<CmsDetailUpdate {id} />
</section>
