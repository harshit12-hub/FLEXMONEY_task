##API Documentation
####This document provides an overview of the endpoints available in this API along with their functionalities and usage.

Base URL
The base URL for accessing the API is http://localhost:3000/.

Endpoints
GET /
Description: Fetches data.
Response:
200 OK - Successful response.
POST /api/payment
Description: Creates a payment record.
Parameters:
body (in body)
name (example: "any")
PaidMonth (example: "any")
Responses:
200 OK - Successful operation.
500 Internal Server Error - Error in processing the request.


###POST /api/register
Description: Registers a new user.
Parameters:
body (in body)
name (example: "any")
age (example: "any")
selectedBatch (example: "any")
DateOfJoin (example: "any")
Responses:
201 Created - Successful creation of a new user.
500 Internal Server Error - Error in processing the request.
How to Use
To interact with these endpoints, make HTTP requests using appropriate methods (GET, POST) to the respective URLs mentioned above.

##xample Usage

GET http://localhost:3000/
POST http://localhost:3000/api/payment
{
  "name": "any",
  "PaidMonth": "any"
}
POST http://localhost:3000/api/register
{
  "name": "any",
  "age": "any",
  "selectedBatch": "any",
  "DateOfJoin": "any"
}
Replace "any" with the relevant data when making requests.
