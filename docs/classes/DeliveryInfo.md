[Documentation](../README.md) / [Exports](../modules.md) / DeliveryInfo

# Class: DeliveryInfo

## Implements

- [`IDeliveryInfo`](../interfaces/IDeliveryInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DeliveryInfo.md#constructor)

### Properties

- [delivery\_message](DeliveryInfo.md#delivery_message)
- [delivery\_price](DeliveryInfo.md#delivery_price)
- [stores\_count\_info](DeliveryInfo.md#stores_count_info)

### Methods

- [init](DeliveryInfo.md#init)
- [toJSON](DeliveryInfo.md#tojson)
- [fromJS](DeliveryInfo.md#fromjs)

## Constructors

### constructor

• **new DeliveryInfo**(`data?`): [`DeliveryInfo`](DeliveryInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDeliveryInfo`](../interfaces/IDeliveryInfo.md) |

#### Returns

[`DeliveryInfo`](DeliveryInfo.md)

#### Defined in

main.ts:164647

## Properties

### delivery\_message

• `Optional` **delivery\_message**: `string`

delivery information
message accompanying the delivery information as posted by the seller

#### Implementation of

[IDeliveryInfo](../interfaces/IDeliveryInfo.md).[delivery_message](../interfaces/IDeliveryInfo.md#delivery_message)

#### Defined in

main.ts:164636

___

### delivery\_price

• `Optional` **delivery\_price**: [`PriceInfo`](PriceInfo.md)

price for the delivery
price of the delivery based on the location you specified in the POST request;
if free delivery is available, the value is null

#### Implementation of

[IDeliveryInfo](../interfaces/IDeliveryInfo.md).[delivery_price](../interfaces/IDeliveryInfo.md#delivery_price)

#### Defined in

main.ts:164640

___

### stores\_count\_info

• `Optional` **stores\_count\_info**: [`StoresCountInfo`](StoresCountInfo.md)

stores count information
contains information about the number of stores that offer the same product

#### Implementation of

[IDeliveryInfo](../interfaces/IDeliveryInfo.md).[stores_count_info](../interfaces/IDeliveryInfo.md#stores_count_info)

#### Defined in

main.ts:164643

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:164656

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:164675

___

### fromJS

▸ **fromJS**(`data`): [`DeliveryInfo`](DeliveryInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DeliveryInfo`](DeliveryInfo.md)

#### Defined in

main.ts:164668
