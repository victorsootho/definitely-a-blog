<!-- src/routes/+layout.svelte -->

<script lang="ts">
	import '../app.css';
</script>

<div class="header bg-gray-600 text-white p-8 mb-8 rounded-">
	<a href="/" class="text-2xl no-underline hover:underline cursor-pointer">My Svelte Blog</a>
	<a href="/new-blog" class="ml-4 text-lg no-underline hover:underline cursor-pointer"
		>Create New Blog</a
	>
</div>
<div
	class="container mx-auto px-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl"
>
	<slot />
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
	* {
		font-family: 'Inter', Helvetica, Arial, serif;
	}
</style>
