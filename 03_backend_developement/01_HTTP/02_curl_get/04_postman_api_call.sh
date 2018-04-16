curl "https://postman-echo.com/get?foo=bar&program=camp2&people\[0\]=Frieda&people\[1\]=Francis" | jq ".args" > 04_postman_api_call.result
