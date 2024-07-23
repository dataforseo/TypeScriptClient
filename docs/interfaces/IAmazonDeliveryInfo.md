**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAmazonDeliveryInfo

# Interface: IAmazonDeliveryInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### delivery\_date\_from?

> **`optional`** **delivery\_date\_from**: `string`

the earliest date when the product can be shipped

#### Source

main.ts:22279

***

### delivery\_date\_to?

> **`optional`** **delivery\_date\_to**: `string`

the latest date when the product can be delivered

#### Source

main.ts:22281

***

### delivery\_message?

> **`optional`** **delivery\_message**: `string`

message accompanying the delivery information as posted by the seller

#### Source

main.ts:22277

***

### delivery\_price?

> **`optional`** **delivery\_price**: [`PriceInfo`](../classes/PriceInfo.md)

price for the delivery
price of the delivery based on the location you specified in the POST request;
if free delivery is available, the value is null

#### Source

main.ts:22289

***

### fastest\_delivery\_date\_from?

> **`optional`** **fastest\_delivery\_date\_from**: `string`

the earliest date when the product can be delivered with a fast delivery option

#### Source

main.ts:22283

***

### fastest\_delivery\_date\_to?

> **`optional`** **fastest\_delivery\_date\_to**: `string`

the latest date when the product can be delivered with a fast delivery option

#### Source

main.ts:22285
