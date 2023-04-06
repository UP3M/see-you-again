<script lang="ts">

    import CMSDetail from '$lib/components/CMSDetail.svelte'
    import { page } from '$app/stores';

    $: id = $page.params.id

</script>

<section class="min-h-screen text-white bg-center bg-cover bg-blend-overlay bg-fixed bg-white/60" style="background-image: url(https://png.pngtree.com/back_origin_pic/04/48/50/84cd2a9fbc6cbd5522b2f048a56703a8.jpg);">
    <CMSDetail {id}/>
</section>