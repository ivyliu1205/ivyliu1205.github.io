---
title: HTTP and HTTPs
index_img: /images/interview/interview.jpg
banner_img: /images/interview/interview.jpg
excerpt: ..
categories: Interview
tags:
  - Knowledge
date: 2025-04-01 22:19:39
updated: 2025-04-01 22:19:39
---

{% note info %}
XXXXX
{% endnote %}

## Common Questions



### HTTP methods

#### What are HTTP methods?
> HTTP method is an operation performed by client.

Some of the HTTP methods are:
* **GET**: to fetch resource details
* **POST**: to create a resource
* **PUT**: to replace entire resoure
* **PATCH**: to update partial fields in the resource
* **DELETE**: to delete a resource
* **OPTIONS**: to fetches the list of supported options of resources present on the server
  
Differences:
- PUT vs. PATCH
  - Common: Both of them have request body and used to update the resource.
  - Diff:
    - PUT will update entire resource
    - PATCH will only update resource partically

#### What is idempotent? What are idempotent HTTP methods?

**Idempotent** is a property of some operation, no matter how many times you call that operation, it always produce same result.

**Idempotent methods** are HTTP methods which always returns same resource irrespective how many times that method called.
- GET
- DELETE
- PUT

However, **POST** is not a idempotent method as for each POST call, it will create a new resource.

### HTTP headers

#### Common request headers
- **Accept**: Defines the media types that the client is able to accept from the server
- **Authorization**: Used to send the client's credentials to the server when the client is attempting to access a protected resource
- **Content-Type**: Defines the media type in the request body

#### Common response headers
- **Cache-Control**: Defines how the response should be cached
- **Set-Cookie**: Instructs the client to store a cookie with the specified attributes

### HTTP status codes
* 1xx - represents informational responses
* 2xx - represents successful responses
* 3xx - represents redirects
* 4xx - represents client errors
* 5xx - represents server errors

#### Common status codes
* **200 OK**: The request was successful, and the response includes the requested data.
* **201 Created**: The request was successful, and the server has created a new resource with the provided data.
* **204 No Content**: The request was successful, but there is no additional data to send in the response. This code is often used in response to DELETE requests.
* **400 Bad Request**: The server cannot understand the request due to a client error, malformed syntax, or invalid parameters.
* **401 Unauthorized**: The client lacks valid credentials to access the requested data or perform the desired action.
* **403 Forbidden**: The client does not have permission to access the requested resource, even with valid authentication credentials.
* **404 Not Found**: The server cannot find the requested resource or endpoint.
* **500 Internal Server Error**: The server encountered an unexpected issue.
* **503 Service Unavailable**: The server is not ready to handle the request, often due to overload or maintenance.
* **504 Gateway Timeout**: The server acting as a gateway or proxy did not receive a timely response from the upstream server.


### RESTful API

**REST** is the most common communication standard between computers over the internet. It stands for **REpresentational State Transfer**. 

#### RESTful API Design Constraints

When developers create REST APIs, they must follow certain standard rules. This practice helps maintain a RESTful design.

- **Client-Server**: There is a clear gap between the API client and the server. This practice helps to organize the interface better.
- **Statelessness**: The server does not remember client details between requests. Each request has all the information needed. This makes it easier to grow and update the server. Requests should be simple, if possible.
- **Cacheability**: REST responses should have rules that show which resources can be cached. Caching helps the system work faster and stay strong. Also, versioning helps to stop changes that might break the client.
- **Uniform Interface**: By using standard HTTP actions such as GET, POST, PUT, and DELETE, the api interface remains consistent for all services. Resources have unique identifiers called URIs.

#### What is URI?
**Uniform Resource Identifier** is the full form of URI which is used for identifying each resource of the REST architecture. URI is of the format:

```
<protocol>://<service-name>/<ResourceType>/<ResourceID>
```

There are 2 types of URI:

- **URN (Uniform Resource Name)**: Identifies the resource by means of a name that is both unique and persistent.
  - URN doesn’t always specify where to locate the resource on the internet. They are used as templates that are used by other parsers to identify the resource.
  - These follow the urn scheme and usually prefixed with `urn`. Examples include
    - `urn:isbn:1234567890` is used for identification of book based on the ISBN number in a library application.
    - `urn:mpeg:mpeg7:schema:2001` is the default namespace rules for metadata of MPEG-7 video.
  - Whenever a URN identifies a document, they are easily translated into a URL by using “resolver” after which the document can be downloaded.
- **URL (Uniform Resource Locator)**: Has the information regarding fetching of a resource from its location.
  - Examples include:
    - `http://abc.com/samplePage.html`
    - `ftp://sampleServer.com/sampleFile.zip`
    - `file:///home/interviewbit/sampleFile.txt`
  - URLs start with a protocol (like ftp, http etc) and they have the information of the network hostname (sampleServer.com) and the path to the document(/samplePage.html). It can also have query parameters.

#### What are the benefits of RESTful APIs?

- **Simplicity**:
  - REST APIs use HTTP. They follow standard methods and error codes. 
  - This helps clients connect easily to web services. Clients do not need complex libraries or tools. 
  - A stateless request model makes it easy to scale the server. 
  - This combination creates a simple experience for clients, servers, and networks during integration.
- **Flexibility**:
  - REST gives you the choice of data formats. You can send rsource information in XML, JSON or plain text. 
  - This flexibility lets developers be creative with how they design resources. They can pick different ways to package the data. This approach allows development to change and grow over time.
- **Scalability**:
  - The stateless request model means each request has all the information needed. 
  - This makes REST interactions easy to scale. 
  - You can add more servers without the worry of sharing state between them. This way, it can handle many internet users and mobile devices well.
- **Performance**:
  - Built-in caching support helps to make performance better and reduces the load on servers.
  - Content delivery networks(CDN) can keep data closer to users.
- **Portability**:
  - REST uses standard HTTP and JSON. This makes it simple to use with many programming languages and platforms. Examples include JavaScript, Java, .NET, Android, and iOS. It helps create systems where different parts can be built with different languages.

#### How to handle versioning in a REST API?
It can be done in several ways:
* **URI Versioning**: Including the version number in the URI (e.g. `/api/v1/resource`)
* **Header Versioning**: Specifying the version in a custom request header
* **Parameter Versioning**: Using a request paramter to specify the version (e.g. `/api/resource?version=1`)


### Authentication & Authorization

**Authentication**:
- A process of verifying identity or showing something to be true.
- Validating credentials is one kind of Authentication. Authentication ensures that only authorized credentials can access to the secure systems.

**Authorization**:
- A process of giving permission/access to the resource
- Authorization is one kind of role based access control (RBAC)

#### Authentication vs. Authorization
- Authentication:
  - A process of verifying identity
  - Techniques: Face detection, finger-prints, OTP
- Authorization:
  - A process of verifying user has permission to access the resource
  - Techniques: JWT, OAuth, role based access

#### What are RESTful APIs authentication methods?
- **API keys**: Send an API key in the request header. This helps the server know who is making the request. It is simple to use, but it is not very safe
- **Basic auth**: You can put your username and password in an Authorization header. The server decodes and checks this information. Since it is sent without protection, the security is low.
- **OAuth 2.0**: This is an open standard that uses tokens to show who the user is and what they can do. It allows users to access the system safely. 
- **OpenID Connect**: A way to manage identity. It works with OAuth 2.0. You can log in with accounts from different providers, such as Google or Facebook. This helps make logging in simpler and more secure.

## References 
- [RESTful API interview questions](https://chanduthedev.medium.com/restful-api-interview-questions-5cc170cc376b)