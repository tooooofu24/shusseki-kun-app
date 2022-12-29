import { getAuth } from "firebase/auth";

type method = "GET" | "POST" | "PUT" | "DELETE";

type FetcherProps = {
	uri: string;
	method: method;
	query?: Record<string, string>;
	body?: object;
};

export const fetcher = async ({
	uri,
	query = undefined,
	method,
	body = undefined,
}: FetcherProps) => {
	const url = createURL(uri, query);
	const res = await fetch(url, {
		method,
		headers: await headers(),
		body: JSON.stringify(body),
	});

	const json = await res.json();

	if (!res.ok) {
		throw new Error(json.displayMessage);
	}

	return json;
};

const headers = async (): Promise<HeadersInit> => {
	const user = getAuth().currentUser;
	const bearer = await user?.getIdToken();
	return {
		"Content-Type": "application/json",
		Authorization: "Bearer " + bearer,
	};
};

const createURL = (uri: string, query?: Record<string, string>) => {
	const queryString = query ? "?" + new URLSearchParams(query).toString() : "";
	return process.env.NEXT_PUBLIC_API_BASE_URL + uri + queryString;
};
