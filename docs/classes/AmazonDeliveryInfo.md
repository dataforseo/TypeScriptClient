[Documentation](../README.md) / [Exports](../modules.md) / AmazonDeliveryInfo

# Class: AmazonDeliveryInfo

## Implements

- [`IAmazonDeliveryInfo`](../interfaces/IAmazonDeliveryInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AmazonDeliveryInfo.md#constructor)

### Properties

- [delivery\_date\_from](AmazonDeliveryInfo.md#delivery_date_from)
- [delivery\_date\_to](AmazonDeliveryInfo.md#delivery_date_to)
- [delivery\_message](AmazonDeliveryInfo.md#delivery_message)
- [delivery\_price](AmazonDeliveryInfo.md#delivery_price)
- [fastest\_delivery\_date\_from](AmazonDeliveryInfo.md#fastest_delivery_date_from)
- [fastest\_delivery\_date\_to](AmazonDeliveryInfo.md#fastest_delivery_date_to)

### Methods

- [init](AmazonDeliveryInfo.md#init)
- [toJSON](AmazonDeliveryInfo.md#tojson)
- [fromJS](AmazonDeliveryInfo.md#fromjs)

## Constructors

### constructor

• **new AmazonDeliveryInfo**(`data?`): [`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAmazonDeliveryInfo`](../interfaces/IAmazonDeliveryInfo.md) |

#### Returns

[`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

#### Defined in

main.ts:21678

## Properties

### delivery\_date\_from

• `Optional` **delivery\_date\_from**: `string`

the earliest date when the product can be shipped

#### Implementation of

[IAmazonDeliveryInfo](../interfaces/IAmazonDeliveryInfo.md).[delivery_date_from](../interfaces/IAmazonDeliveryInfo.md#delivery_date_from)

#### Defined in

main.ts:21664

___

### delivery\_date\_to

• `Optional` **delivery\_date\_to**: `string`

the latest date when the product can be delivered

#### Implementation of

[IAmazonDeliveryInfo](../interfaces/IAmazonDeliveryInfo.md).[delivery_date_to](../interfaces/IAmazonDeliveryInfo.md#delivery_date_to)

#### Defined in

main.ts:21666

___

### delivery\_message

• `Optional` **delivery\_message**: `string`

message accompanying the delivery information as posted by the seller

#### Implementation of

[IAmazonDeliveryInfo](../interfaces/IAmazonDeliveryInfo.md).[delivery_message](../interfaces/IAmazonDeliveryInfo.md#delivery_message)

#### Defined in

main.ts:21662

___

### delivery\_price

• `Optional` **delivery\_price**: [`PriceInfo`](PriceInfo.md)

price for the delivery
price of the delivery based on the location you specified in the POST request;
if free delivery is available, the value is null

#### Implementation of

[IAmazonDeliveryInfo](../interfaces/IAmazonDeliveryInfo.md).[delivery_price](../interfaces/IAmazonDeliveryInfo.md#delivery_price)

#### Defined in

main.ts:21674

___

### fastest\_delivery\_date\_from

• `Optional` **fastest\_delivery\_date\_from**: `string`

the earliest date when the product can be delivered with a fast delivery option

#### Implementation of

[IAmazonDeliveryInfo](../interfaces/IAmazonDeliveryInfo.md).[fastest_delivery_date_from](../interfaces/IAmazonDeliveryInfo.md#fastest_delivery_date_from)

#### Defined in

main.ts:21668

___

### fastest\_delivery\_date\_to

• `Optional` **fastest\_delivery\_date\_to**: `string`

the latest date when the product can be delivered with a fast delivery option

#### Implementation of

[IAmazonDeliveryInfo](../interfaces/IAmazonDeliveryInfo.md).[fastest_delivery_date_to](../interfaces/IAmazonDeliveryInfo.md#fastest_delivery_date_to)

#### Defined in

main.ts:21670

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

main.ts:21687

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

main.ts:21709

___

### fromJS

▸ **fromJS**(`data`): [`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

#### Defined in

main.ts:21702
