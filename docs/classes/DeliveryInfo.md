**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DeliveryInfo

# Class: DeliveryInfo

## Implements

- [`IDeliveryInfo`](../interfaces/IDeliveryInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DeliveryInfo(data)

> **new DeliveryInfo**(`data`?): [`DeliveryInfo`](DeliveryInfo.md)

#### Parameters

• **data?**: [`IDeliveryInfo`](../interfaces/IDeliveryInfo.md)

#### Returns

[`DeliveryInfo`](DeliveryInfo.md)

#### Source

main.ts:171828

## Properties

### delivery\_message?

> **`optional`** **delivery\_message**: `string`

delivery information
message accompanying the delivery information as posted by the seller

#### Implementation of

[`IDeliveryInfo`](../interfaces/IDeliveryInfo.md).[`delivery_message`](../interfaces/IDeliveryInfo.md#delivery_message)

#### Source

main.ts:171817

***

### delivery\_price?

> **`optional`** **delivery\_price**: [`PriceInfo`](PriceInfo.md)

price for the delivery
price of the delivery based on the location you specified in the POST request;
if free delivery is available, the value is null

#### Implementation of

[`IDeliveryInfo`](../interfaces/IDeliveryInfo.md).[`delivery_price`](../interfaces/IDeliveryInfo.md#delivery_price)

#### Source

main.ts:171821

***

### stores\_count\_info?

> **`optional`** **stores\_count\_info**: [`StoresCountInfo`](StoresCountInfo.md)

stores count information
contains information about the number of stores that offer the same product

#### Implementation of

[`IDeliveryInfo`](../interfaces/IDeliveryInfo.md).[`stores_count_info`](../interfaces/IDeliveryInfo.md#stores_count_info)

#### Source

main.ts:171824

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:171837

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:171856

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DeliveryInfo`](DeliveryInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DeliveryInfo`](DeliveryInfo.md)

#### Source

main.ts:171849
