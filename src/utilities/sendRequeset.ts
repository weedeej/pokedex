import { baseUrl, apiPath } from "@/constants";


/**
 * Base Request for sending GraphQL request to pokeapi.co
 * @param query Query without <i>query</i> prefix
 * @returns Fetch response
 */
export async function sendRequest(query: string) {
  const payload = {
    query: `query ${query}`,
    variables: null,
    operationName: "getItems"
  }

  return await fetch(`${baseUrl}${apiPath}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "*/*"
    },
    body: JSON.stringify(payload)
  }); 
}