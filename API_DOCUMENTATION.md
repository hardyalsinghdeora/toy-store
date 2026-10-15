# Toy Shop API Documentation

## Authentication Endpoints

### POST /api/auth/register
Register a new user.

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "user": {
    "id": "string",
    "name": "string",
    "email": "string"
  }
}
```

### POST /api/auth/login
Authenticate a user.

**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "user": {
    "id": "string",
    "name": "string",
    "email": "string"
  },
  "session": {
    "token": "string"
  }
}
```

### POST /api/auth/forgot-password
Request password reset.

**Request Body:**
```json
{
  "email": "string"
}
```

### POST /api/auth/reset-password
Reset user password.

**Request Body:**
```json
{
  "token": "string",
  "password": "string"
}
```

## Product Endpoints

### GET /api/products
Get all products.

**Query Parameters:**
- `category` (optional): Filter by category
- `search` (optional): Search by name or description
- `sort` (optional): Sort by price (asc/desc)
- `page` (optional): Page number
- `limit` (optional): Items per page

**Response:**
```json
{
  "products": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "price": "number",
      "stock": "number",
      "category": "string",
      "images": ["string"]
    }
  ],
  "total": "number",
  "page": "number",
  "limit": "number"
}
```

### GET /api/products/:id
Get a single product.

**Response:**
```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "price": "number",
  "stock": "number",
  "category": "string",
  "images": ["string"]
}
```

## Cart Endpoints

### GET /api/cart
Get user's cart.

**Response:**
```json
{
  "items": [
    {
      "productId": "string",
      "quantity": "number",
      "product": {
        "id": "string",
        "name": "string",
        "price": "number",
        "images": ["string"]
      }
    }
  ],
  "total": "number"
}
```

### POST /api/cart
Add item to cart.

**Request Body:**
```json
{
  "productId": "string",
  "quantity": "number"
}
```

### PUT /api/cart/:id
Update cart item quantity.

**Request Body:**
```json
{
  "quantity": "number"
}
```

### DELETE /api/cart/:id
Remove item from cart.

## Order Endpoints

### POST /api/orders
Create a new order.

**Request Body:**
```json
{
  "items": [
    {
      "productId": "string",
      "quantity": "number"
    }
  ],
  "shippingAddress": {
    "street": "string",
    "city": "string",
    "state": "string",
    "zipCode": "string",
    "country": "string"
  },
  "paymentMethod": "string"
}
```

**Response:**
```json
{
  "order": {
    "id": "string",
    "status": "string",
    "total": "number",
    "items": [
      {
        "productId": "string",
        "quantity": "number",
        "price": "number"
      }
    ]
  }
}
```

### GET /api/orders
Get user's orders.

**Response:**
```json
{
  "orders": [
    {
      "id": "string",
      "status": "string",
      "total": "number",
      "createdAt": "string",
      "items": [
        {
          "product": {
            "id": "string",
            "name": "string",
            "price": "number",
            "images": ["string"]
          },
          "quantity": "number"
        }
      ]
    }
  ]
}
```

## Admin Endpoints

### Products

#### GET /api/admin/products
Get all products (admin only).

#### POST /api/admin/products
Create new product (admin only).

**Request Body:**
```json
{
  "name": "string",
  "description": "string",
  "price": "number",
  "stock": "number",
  "category": "string",
  "images": ["string"]
}
```

#### PUT /api/admin/products/:id
Update product (admin only).

**Request Body:**
```json
{
  "name": "string",
  "description": "string",
  "price": "number",
  "stock": "number",
  "category": "string",
  "images": ["string"]
}
```

#### DELETE /api/admin/products/:id
Delete product (admin only).

### Categories

#### GET /api/admin/categories
Get all categories (admin only).

#### POST /api/admin/categories
Create new category (admin only).

**Request Body:**
```json
{
  "name": "string",
  "description": "string"
}
```

#### PUT /api/admin/categories/:id
Update category (admin only).

**Request Body:**
```json
{
  "name": "string",
  "description": "string"
}
```

#### DELETE /api/admin/categories/:id
Delete category (admin only).

### Orders

#### GET /api/admin/orders
Get all orders (admin only).

#### PUT /api/admin/orders/:id
Update order status (admin only).

**Request Body:**
```json
{
  "status": "string"
}
```

### Users

#### GET /api/admin/users
Get all users (admin only).

#### PUT /api/admin/users/:id
Update user role (admin only).

**Request Body:**
```json
{
  "role": "string"
}
```

## Error Responses

All endpoints may return the following error responses:

```json
{
  "error": "string",
  "message": "string"
}
```

Common error codes:
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

## Authentication

Most endpoints require authentication. Include the session token in the Authorization header:

```
Authorization: Bearer <token>
```

## Rate Limiting

API requests are limited to:
- 100 requests per minute for authenticated users
- 20 requests per minute for unauthenticated users 