export async function requestPosts() {
  const URL_POSTS = 'https://dev.codeleap.co.uk/careers/'
  try {
    const response = await fetch(URL_POSTS);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};