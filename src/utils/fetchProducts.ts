export const BASE_URL = process.env.REACT_APP_SERVER_URL;

function request<T>(
  url: string,
): Promise<T> {
  return fetch(BASE_URL + url)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
}

export const client = {
  getAll: <T>(url: string) => request<T>(url),
};
