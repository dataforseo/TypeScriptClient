[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDeliveryInfo

# Interface: IDeliveryInfo

Defined in: main.ts:186542

## Indexable

\[`key`: `string`\]: `any`

## Properties

### delivery\_message?

> `optional` **delivery\_message**: `string`

Defined in: main.ts:186545

delivery information
message accompanying the delivery information as posted by the seller

***

### delivery\_price?

> `optional` **delivery\_price**: [`PriceInfo`](../classes/PriceInfo.md)

Defined in: main.ts:186549

price for the delivery
price of the delivery based on the location you specified in the POST request;
if free delivery is available, the value is null
