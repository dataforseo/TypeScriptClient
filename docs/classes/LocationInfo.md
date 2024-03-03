[Documentation](../README.md) / [Exports](../modules.md) / LocationInfo

# Class: LocationInfo

## Implements

- [`ILocationInfo`](../interfaces/ILocationInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](LocationInfo.md#constructor)

### Properties

- [address](LocationInfo.md#address)
- [cid](LocationInfo.md#cid)
- [feature\_id](LocationInfo.md#feature_id)
- [name](LocationInfo.md#name)
- [url](LocationInfo.md#url)

### Methods

- [init](LocationInfo.md#init)
- [toJSON](LocationInfo.md#tojson)
- [fromJS](LocationInfo.md#fromjs)

## Constructors

### constructor

• **new LocationInfo**(`data?`): [`LocationInfo`](LocationInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ILocationInfo`](../interfaces/ILocationInfo.md) |

#### Returns

[`LocationInfo`](LocationInfo.md)

#### Defined in

main.ts:44672

## Properties

### address

• `Optional` **address**: `string`

address of the event’s venue

#### Implementation of

[ILocationInfo](../interfaces/ILocationInfo.md).[address](../interfaces/ILocationInfo.md#address)

#### Defined in

main.ts:44660

___

### cid

• `Optional` **cid**: `string`

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews

#### Implementation of

[ILocationInfo](../interfaces/ILocationInfo.md).[cid](../interfaces/ILocationInfo.md#cid)

#### Defined in

main.ts:44666

___

### feature\_id

• `Optional` **feature\_id**: `string`

the unique identifier of the element in SERP

#### Implementation of

[ILocationInfo](../interfaces/ILocationInfo.md).[feature_id](../interfaces/ILocationInfo.md#feature_id)

#### Defined in

main.ts:44668

___

### name

• `Optional` **name**: `string`

name of the event’s venue

#### Implementation of

[ILocationInfo](../interfaces/ILocationInfo.md).[name](../interfaces/ILocationInfo.md#name)

#### Defined in

main.ts:44658

___

### url

• `Optional` **url**: `string`

URL to the event’s venue on google maps

#### Implementation of

[ILocationInfo](../interfaces/ILocationInfo.md).[url](../interfaces/ILocationInfo.md#url)

#### Defined in

main.ts:44662

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

main.ts:44681

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

main.ts:44702

___

### fromJS

▸ **fromJS**(`data`): [`LocationInfo`](LocationInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`LocationInfo`](LocationInfo.md)

#### Defined in

main.ts:44695
