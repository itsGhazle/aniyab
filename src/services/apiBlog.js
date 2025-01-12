const API_URL =
  "https://api.aniyab.com/api/app/posts/get-posts-for-all-news-public";

export async function getNews() {
  const res = await fetch(`${API_URL}`);
  if (!res.ok) throw Error("Failed getting News");
  const data = await res.json();
  console.log(data);
}
