[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / DeliveryInfo

# Class: DeliveryInfo

## Implements

- [`IDeliveryInfo`](../interfaces/IDeliveryInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DeliveryInfo()

> **new DeliveryInfo**(`data`?): [`DeliveryInfo`](DeliveryInfo.md)

#### Parameters

• **data?**: [`IDeliveryInfo`](../interfaces/IDeliveryInfo.md)

#### Returns

[`DeliveryInfo`](DeliveryInfo.md)

#### Defined in

main.ts:178376

## Properties

### delivery\_message?

> `optional` **delivery\_message**: `string`

delivery information
message accompanying the delivery information as posted by the seller

#### Implementation of

[`IDeliveryInfo`](../interfaces/IDeliveryInfo.md).[`delivery_message`](../interfaces/IDeliveryInfo.md#delivery_message)

#### Defined in

main.ts:178365

***

### delivery\_price?

> `optional` **delivery\_price**: [`PriceInfo`](PriceInfo.md)

price for the delivery
price of the delivery based on the location you specified in the POST request;
if free delivery is available, the value is null

#### Implementation of

[`IDeliveryInfo`](../interfaces/IDeliveryInfo.md).[`delivery_price`](../interfaces/IDeliveryInfo.md#delivery_price)

#### Defined in

main.ts:178369

***

### stores\_count\_info?

> `optional` **stores\_count\_info**: [`StoresCountInfo`](StoresCountInfo.md)

stores count information
contains information about the number of stores that offer the same product

#### Implementation of

[`IDeliveryInfo`](../interfaces/IDeliveryInfo.md).[`stores_count_info`](../interfaces/IDeliveryInfo.md#stores_count_info)

#### Defined in

main.ts:178372

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:178385

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:178404

***

### fromJS()

> `static` **fromJS**(`data`): [`DeliveryInfo`](DeliveryInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DeliveryInfo`](DeliveryInfo.md)

#### Defined in

main.ts:178397
