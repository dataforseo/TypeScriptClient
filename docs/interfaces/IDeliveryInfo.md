[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IDeliveryInfo

# Interface: IDeliveryInfo

## Implemented by

- [`DeliveryInfo`](../classes/DeliveryInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [delivery\_message](IDeliveryInfo.md#delivery_message)
- [delivery\_price](IDeliveryInfo.md#delivery_price)
- [stores\_count\_info](IDeliveryInfo.md#stores_count_info)

## Properties

### delivery\_message

• `Optional` **delivery\_message**: `string`

delivery information
message accompanying the delivery information as posted by the seller

#### Defined in

[main.ts:164571](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164571)

___


### delivery\_price

• `Optional` **delivery\_price**: [`PriceInfo`](../classes/PriceInfo.md)

price for the delivery
price of the delivery based on the location you specified in the POST request;
if free delivery is available, the value is null

#### Defined in

[main.ts:164575](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164575)

___


### stores\_count\_info

• `Optional` **stores\_count\_info**: [`StoresCountInfo`](../classes/StoresCountInfo.md)

stores count information
contains information about the number of stores that offer the same product

#### Defined in

[main.ts:164578](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164578)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")