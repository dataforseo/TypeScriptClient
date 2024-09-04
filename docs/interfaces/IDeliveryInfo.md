[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IDeliveryInfo

# Interface: IDeliveryInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### delivery\_message?

> `optional` **delivery\_message**: `string`

delivery information
message accompanying the delivery information as posted by the seller

#### Defined in

main.ts:174350

***

### delivery\_price?

> `optional` **delivery\_price**: [`PriceInfo`](../classes/PriceInfo.md)

price for the delivery
price of the delivery based on the location you specified in the POST request;
if free delivery is available, the value is null

#### Defined in

main.ts:174354

***

### stores\_count\_info?

> `optional` **stores\_count\_info**: [`StoresCountInfo`](../classes/StoresCountInfo.md)

stores count information
contains information about the number of stores that offer the same product

#### Defined in

main.ts:174357
