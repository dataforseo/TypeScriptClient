[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAmazonDeliveryInfo

# Interface: IAmazonDeliveryInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### delivery\_date\_from?

> `optional` **delivery\_date\_from**: `string`

the earliest date when the product can be shipped

#### Defined in

main.ts:23680

***

### delivery\_date\_to?

> `optional` **delivery\_date\_to**: `string`

the latest date when the product can be delivered

#### Defined in

main.ts:23682

***

### delivery\_message?

> `optional` **delivery\_message**: `string`

message accompanying the delivery information as posted by the seller

#### Defined in

main.ts:23678

***

### delivery\_price?

> `optional` **delivery\_price**: [`PriceInfo`](../classes/PriceInfo.md)

price for the delivery
price of the delivery based on the location you specified in the POST request;
if free delivery is available, the value is null

#### Defined in

main.ts:23690

***

### fastest\_delivery\_date\_from?

> `optional` **fastest\_delivery\_date\_from**: `string`

the earliest date when the product can be delivered with a fast delivery option

#### Defined in

main.ts:23684

***

### fastest\_delivery\_date\_to?

> `optional` **fastest\_delivery\_date\_to**: `string`

the latest date when the product can be delivered with a fast delivery option

#### Defined in

main.ts:23686
