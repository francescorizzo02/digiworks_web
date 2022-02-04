export default async function server(
  url: string,
  method: string,
  payload?: any
) {
  try {
    /* console.log(url);
    const init = {
      method: method,
      body: payload ? JSON.stringify(payload) : null,
    };
    console.log(init); */

    return await fetch(url, {
      method: method,
      body: payload ? JSON.stringify(payload) : null,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
