// src/routes/blog/[slug]/+page.js
import { performGraphqlQuery } from '$lib/utils/query';
export async function load({ params }) {
	// retrieve the articles related to the slug
	// specified in the URL
	const responseData = await performGraphqlQuery({
		query: `
      query BlogPostQuery($slug: String!) {
        article(filter: { slug: { eq: $slug } }) {
          title
          slug
          publicationDate: _firstPublishedAt
          content {
            value
            blocks
          }
        }
      }
    `,
		variables: {
			// the dynamic "slug" parameter extracted
			// from the URL
			slug: params.slug
		}
	});
	return responseData.data;
}
