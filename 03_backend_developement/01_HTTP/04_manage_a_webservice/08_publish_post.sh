
curl -d "{\"userId\":\"$1\", \"title\":\"$2\", \"body\":\"$3\"}" -H "Content-Type: application/json" -X POST "http://jsonplaceholder.typicode.com/posts/"
