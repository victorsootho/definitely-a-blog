<script lang="ts">
	let title = '';
	let slug = '';
	let content = '';
	let publicationDate = '';

	// Set the current date in 'YYYY-MM-DD' format
	const currentDate = new Date().toISOString().slice(0, 10);
	publicationDate = currentDate;

	// Watch the title and generate the slug automatically
	$: slug = title.trim().toLowerCase().replace(/\s+/g, '-');

	async function handleSubmit() {
		const response = await fetch('/api/create-blog', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				title,
				slug,
				content,
				publicationDate
			})
		});

		if (response.ok) {
			// Handle success (e.g., redirect to the new blog post)
			alert('Blog post created successfully!');
		} else {
			// Handle error
			alert('Error creating blog post.');
		}
	}
</script>

<div class="max-w-xl mx-auto p-4">
	<h1 class="text-3xl mb-4">Create a New Blog Post</h1>
	<form on:submit|preventDefault={handleSubmit}>
		<div class="mb-4">
			<label for="title" class="block text-gray-700">Title:</label>
			<input id="title" bind:value={title} class="w-full p-2 border rounded" required />
		</div>

		<div class="mb-4">
			<label for="slug" class="block text-gray-700">Slug:</label>
			<input id="slug" bind:value={slug} class="w-full p-2 border rounded" readonly />
		</div>
		<div class="mb-4">
			<label for="content" class="block text-gray-700">Content:</label>
			<textarea id="content" bind:value={content} class="w-full p-2 border rounded" required
			></textarea>
		</div>
		<div class="mb-4">
			<label for="publicationDate" class="block text-gray-700">Publication Date:</label>
			<input
				id="publicationDate"
				type="date"
				bind:value={publicationDate}
				class="w-full p-2 border rounded"
			/>
		</div>

		<button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
			Create Blog Post
		</button>
	</form>
</div>
