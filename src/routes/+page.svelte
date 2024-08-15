<script lang="ts">
	interface Article {
		slug: string;
		title: string;
		publicationDate?: string;
	}

	interface Data {
		allArticles: Article[];
	}

	export let data: Data;

	const articles = data?.allArticles || [];
</script>

<div>
	<div class="title">
		<h1 class="text-3xl text-center mb-5">Blog Posts</h1>
	</div>
	<div class="articles">
		<div class="article-cards">
			{#each articles as article}
				<a href="blog/{article.slug}" class="block no-underline">
					<div
						class="article-card rounded-lg border border-gray-400 p-6 mb-2 hover:border-orange-500"
					>
						<div class="article-title text-xl mb-2 hover:text-orange-500">
							{article.title}
						</div>

						{#if article.publicationDate}
							<div class="article-publication-date text-gray-600 text-sm">
								Post released on: {new Date(article.publicationDate).toLocaleString()}
							</div>
						{/if}
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>
