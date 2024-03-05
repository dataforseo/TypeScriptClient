[dataforseo-client](../README.md) / [Exports](../modules.md) / GpsCoordinatesLocationInfo

# Class: GpsCoordinatesLocationInfo

## Implements

- [`IGpsCoordinatesLocationInfo`](../interfaces/IGpsCoordinatesLocationInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](GpsCoordinatesLocationInfo.md#constructor)

### Properties

- [latitude](GpsCoordinatesLocationInfo.md#latitude)
- [longitude](GpsCoordinatesLocationInfo.md#longitude)

### Methods

- [init](GpsCoordinatesLocationInfo.md#init)
- [toJSON](GpsCoordinatesLocationInfo.md#tojson)
- [fromJS](GpsCoordinatesLocationInfo.md#fromjs)

## Constructors

### constructor

• **new GpsCoordinatesLocationInfo**(`data?`): [`GpsCoordinatesLocationInfo`](GpsCoordinatesLocationInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IGpsCoordinatesLocationInfo`](../interfaces/IGpsCoordinatesLocationInfo.md) |

#### Returns

[`GpsCoordinatesLocationInfo`](GpsCoordinatesLocationInfo.md)

#### Defined in

[main.ts:193400](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193400)

## Properties

### latitude

• `Optional` **latitude**: `number`

latitude coordinate of the hotel in google maps
example:
"latitude": 51.584091

#### Implementation of

[IGpsCoordinatesLocationInfo](../interfaces/IGpsCoordinatesLocationInfo.md).[latitude](../interfaces/IGpsCoordinatesLocationInfo.md#latitude)

#### Defined in

[main.ts:193392](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193392)

___

### longitude

• `Optional` **longitude**: `number`

longitude coordinate of the hotel in google maps
example:
"longitude": -0.31365919999999997

#### Implementation of

[IGpsCoordinatesLocationInfo](../interfaces/IGpsCoordinatesLocationInfo.md).[longitude](../interfaces/IGpsCoordinatesLocationInfo.md#longitude)

#### Defined in

[main.ts:193396](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193396)

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

[main.ts:193409](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193409)

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

[main.ts:193427](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193427)

___

### fromJS

▸ **fromJS**(`data`): [`GpsCoordinatesLocationInfo`](GpsCoordinatesLocationInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`GpsCoordinatesLocationInfo`](GpsCoordinatesLocationInfo.md)

#### Defined in

[main.ts:193420](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193420)
