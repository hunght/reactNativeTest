// services are state-less
// they act as utility facades that abstract the details for complex operations
// normally, our interface to any sort of server API will be as a service

const GITHUB_ENDPOINT = 'https://api.github.com/users';

export const getUser = async (username) => {
  const url = `${GITHUB_ENDPOINT}/${username}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  });
  if (!response.ok) {
    throw new Error(
      `github Service getUser failed, HTTP status ${response.status}`
    );
  }
  const data = response.json();
  return data;
};
