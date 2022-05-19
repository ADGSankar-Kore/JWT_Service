# JWT Service

Routes

GET call  - {host}/status         -  for status

POST call - {host}/api/jwt        -  for creating JWT token - 
Body
{
    "identity":"<identity>",
    "clientId":"<clientId>",
    "clientSecret":"<clientSecret>"
}

POST call - {host}/api/jwe        - for creating JWE token - 
Body
{
    "identity":"<identity>",
    "clientId":"<clientId>",
    "clientSecret":"<clientSecret>"
}