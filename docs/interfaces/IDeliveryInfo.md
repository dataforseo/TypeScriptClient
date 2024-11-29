[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDeliveryInfo

# Interface: IDeliveryInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### delivery\_message?

> `optional` **delivery\_message**: `string`

delivery information
message accompanying the delivery information as posted by the seller

#### Defined in

main.ts:186115

***

### delivery\_price?

> `optional` **delivery\_price**: [`PriceInfo`](../classes/PriceInfo.md)

price for the delivery
price of the delivery based on the location you specified in the POST request;
if free delivery is available, the value is null

#### Defined in

main.ts:186119
