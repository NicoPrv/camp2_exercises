curl "https://postman-echo.com/get?foo=bar&program=camp2&people=Frida,Francis" | jq ".args" > 04_postman_api_call.result
