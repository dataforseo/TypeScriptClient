**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDeliveryInfo

# Interface: IDeliveryInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### delivery\_message?

> **`optional`** **delivery\_message**: `string`

delivery information
message accompanying the delivery information as posted by the seller

#### Source

main.ts:170156

***

### delivery\_price?

> **`optional`** **delivery\_price**: [`PriceInfo`](../classes/PriceInfo.md)

price for the delivery
price of the delivery based on the location you specified in the POST request;
if free delivery is available, the value is null

#### Source

main.ts:170160

***

### stores\_count\_info?

> **`optional`** **stores\_count\_info**: [`StoresCountInfo`](../classes/StoresCountInfo.md)

stores count information
contains information about the number of stores that offer the same product

#### Source

main.ts:170163
