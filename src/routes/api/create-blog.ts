// src/routes/api/create-blog.ts
import { performGraphqlQuery } from '$lib/utils/query';
import type { RequestEvent } from '@sveltejs/kit';

export async function POST({ request }: RequestEvent) {
	const { title, slug, content, publicationDate } = await request.json();

	// GraphQL mutation for creating a new blog post in DatoCMS
	const query = `
        mutation CreateBlogPost($title: String!, $slug: String!, $content: String!, $publicationDate: Date) {
            createBlogPost(data: {
                title: $title,
                slug: $slug,
                content: $content,
                publicationDate: $publicationDate
            }) {
                id
                title
                slug
            }
        }
    `;

	const variables = { title, slug, content, publicationDate };

	const response = await performGraphqlQuery({ query, variables });

	return new Response(JSON.stringify(response), {
		status: response.errors ? 400 : 200,
		headers: { 'Content-Type': 'application/json' }
	});
}
