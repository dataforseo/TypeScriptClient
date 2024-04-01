[Documentation](../README.md) / [Exports](../modules.md) / GpsCoordinatesLocationInfo

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

main.ts:198861

## Properties

### latitude

• `Optional` **latitude**: `number`

latitude coordinate of the hotel in google maps
example:
"latitude": 51.584091

#### Implementation of

[IGpsCoordinatesLocationInfo](../interfaces/IGpsCoordinatesLocationInfo.md).[latitude](../interfaces/IGpsCoordinatesLocationInfo.md#latitude)

#### Defined in

main.ts:198853

___

### longitude

• `Optional` **longitude**: `number`

longitude coordinate of the hotel in google maps
example:
"longitude": -0.31365919999999997

#### Implementation of

[IGpsCoordinatesLocationInfo](../interfaces/IGpsCoordinatesLocationInfo.md).[longitude](../interfaces/IGpsCoordinatesLocationInfo.md#longitude)

#### Defined in

main.ts:198857

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

main.ts:198870

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

main.ts:198888

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

main.ts:198881
