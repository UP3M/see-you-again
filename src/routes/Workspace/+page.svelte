<script lang="ts">
	import CMSList from '$lib/components/CMSList.svelte';
    import authStore from '../../routes/stores/authStore';
</script>

<svelte:head>
	<title>Find Your Dream Workspace</title>
    <meta name="description" content="We have the best workspace around the world" />
	<meta name="robots" content="" />
	<html lang="en" />
</svelte:head>
<section
	class="min-h-screen text-white bg-center bg-cover bg-blend-overlay bg-fixed bg-black/60"
	style="background-image: url(https://png.pngtree.com/back_origin_pic/04/48/50/84cd2a9fbc6cbd5522b2f048a56703a8.jpg);"
>
	<div class="text-center mb-12">
		<h1 class="text-4xl md:text-6xl text-white-700 font-semibold">Find Your Dream Workspace</h1>
	</div>
    {#if $authStore.isLoggedIn}
        <button class="py-4 text-sm font-bold text-white uppercase bg-teal-500 rounded-sm px-14 hover:bg-blue-600"><a href="/Create">Add Item</a></button>
    {/if}
	<CMSList />
</section>
