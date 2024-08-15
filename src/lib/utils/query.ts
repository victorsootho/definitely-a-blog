import { PUBLIC_DATOCMS_READ_ONLY_API_TOKEN } from '$env/static/public';

interface GraphQLVariables {
	[key: string]: any;
}

interface GraphQLResponse<T> {
	data: T;
	errors?: any;
}

export async function performGraphqlQuery<T>({
	query,
	variables = {}
}: {
	query: string;
	variables?: GraphQLVariables;
}): Promise<GraphQLResponse<T>> {
	// Perform the GraphQL request to the DatoCMS Content Delivery API
	const response = await fetch('https://graphql.datocms.com', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${PUBLIC_DATOCMS_READ_ONLY_API_TOKEN}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query,
			variables
		})
	});

	return await response.json();
}
