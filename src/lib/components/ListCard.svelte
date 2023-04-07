<script lang="ts">
	import type { Post } from '$lib/models/post';
	export let post: Post;
	export let i: number;
	let id = i.toString();
</script>

<a href="/Detail/{id}">
	<div class="flex flex-wrap m-4 p-2">
		<div
			class="h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden bg-white"
		>
			<img
				class="lg:h-72 md:h-48 w-full object-cover object-center"
				src={post.cover}
				alt={post.title}
			/>
			<div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                <h1 class="text-2xl font-semibold mb-3">{post.title}</h1>
				<h2 class="text-base font-medium text-indigo-300 mb-1">₽ {post.price}</h2>
				<p class="leading-relaxed mb-3">{post.location}</p>
			</div>
		</div>
	</div>
</a>
