# JWT Service

Routes

GET call  - {host}/status         -  for status

POST call - {host}/api/users/sts  -  for creating JWT token - 
Body
{
    "identity":"<identity>",
    "clientId":"<clientId>",
    "clientSecret":"<clientSecret>"
}
