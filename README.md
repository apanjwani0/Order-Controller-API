# Order Controller API
An API to support order related queries.

[**Router List**](#order-router-list) - [**Model Structure**](#order-model-structure) - [**Valid Updates**](#valid-updates) - [**Required Fields**](#required-fields)

## Order Route List
- POST /orders - *Create a new order*
- GET /orders/:orderID - *Get order by its orderID*
- GET /orders - *Get an array of all orders*
- PATCH /orders/:orderID - *Find and Update order by its orderID*
- DELETE /orders/:orderID - *Delete order by its orderID*

### Order Model Structure
- Order ID (unique but not _id)
- User ( Type: ObjectId)
- Cart ( Type: ObjectId)
- Amount
- billing Address
- shipping Address
- Payment ( Type: ObjectId)
- isPaid : Boolean
- isFullfilled: Boolean 
- Tracking: ( Type: ObjectId)

#### Valid Updates
- isPaid
- isFullfilled
- tracking
- payment 
- amount
- shipping_address 
- billing_address

#### Required Fields
- orderID
- user
- cart
- amount
- billing_address
- shipping_address
- payment
