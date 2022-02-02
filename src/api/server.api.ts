export default async function server(
  url: string,
  method: string,
  payload?: any
) {
  try {
    return await fetch(url, {
      method: method,
      body: payload ? JSON.stringify(payload) : null,
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
