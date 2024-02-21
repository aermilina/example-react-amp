export default function makeApiUrl(path: string) {
  return `${CACHE_SERVER_URL}${path}`;
}
