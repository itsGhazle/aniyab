const API_URL =
  "https://api-dev.aniyab.com/api/app/assessmentCategory/get-list-assessment-category";
// const headers = {
//   Accept: "text/plain", // Specify the content type
//   Authorization:
//     "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjVEMDhFOUJCQjBDNjIzRTgyMjYyNDQ3OTYwRjhEMjAxQTE3NUE1MDMiLCJ4NXQiOiJYUWpwdTdER0ktZ2lZa1I1WVBqU0FhRjFwUU0iLCJ0eXAiOiJhdCtqd3QifQ.eyJzdWIiOiI2ZWVlNDcxYy01NTQwLTk5NTMtZmIwMy0zYTBjM2E3Yjg4N2MiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWJwLmlvIiwicm9sZSI6ImFkbWluIiwiZ2l2ZW5fbmFtZSI6ImFkbWluIiwicGhvbmVfbnVtYmVyIjoiMDkxMjY1ODkxNDciLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOiJGYWxzZSIsImVtYWlsX3ZlcmlmaWVkIjoiRmFsc2UiLCJ1bmlxdWVfbmFtZSI6ImFkbWluIiwib2lfcHJzdCI6IkFuaXlhYl9Td2FnZ2VyIiwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50cy1kZXYuYW5peWFiLmNvbS8iLCJvaV9hdV9pZCI6IjNiNGNlNjZlLTFiMzItYjZkZS1jNzg0LTNhMGZiMjI0YTY0MSIsImNsaWVudF9pZCI6IkFuaXlhYl9Td2FnZ2VyIiwib2lfdGtuX2lkIjoiNzg1ODU3ZmMtMTE1YS02Y2I2LTFlN2EtM2ExNzhhYzI0MDc4IiwiYXVkIjoiQW5peWFiIiwic2NvcGUiOiJBbml5YWIiLCJleHAiOjE3Njg3MjU4NDUsImlhdCI6MTczNzE4OTg0NX0.qtAG0wDgVwVYPsC5qUZ94j8AMY4yOOTYNF58JDsH6Ja4HM1zxVuUf_VY4OXmyFQxi1nNKuU-QpApVgy81UL7DReG26k_j-Uywmw3OFR_KnbkMOY-u9E6wSZZM-cxLcgkkS9_-73pZuBMdIyaIozFtHlhtMaEs0vQ8m6ogsX-VN1exwXJEFrrGbV6MXwTlt9hoZZ18GRSt3bGq0HF-KQXzPYzE19pXB3qnYIT_8l6plHF0524X6AJlTP3z7wDgN4PLSkqkYF1YhScvwFaQFDa9tzjYsIZ5NIdXjtKkVZXsFJOV0GKGhfFxDvwbBP1MdtG0pY4cxdOpv3B8cZG5xaHsQ", // Include an authorization token
//   "X-Requested-With": "XMLHttpRequest", // You can add custom headers as needed
// };
export async function getNews() {
  const res = await fetch(API_URL);
  if (!res.ok) throw Error("Failed getting News");
  const data = await res.json();
  return data;
}
