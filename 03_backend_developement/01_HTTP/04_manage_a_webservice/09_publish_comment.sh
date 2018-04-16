curl -d "{\"postId\":\"$1\", \"name\":\"$2\", \"email\":\"$3\", \"body\":\"$4\"}" -H "Content-Type: application/json" -X POST "http://jsonplaceholder.typicode.com/comments/"
