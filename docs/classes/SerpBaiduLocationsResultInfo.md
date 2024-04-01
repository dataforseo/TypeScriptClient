[Documentation](../README.md) / [Exports](../modules.md) / SerpBaiduLocationsResultInfo

# Class: SerpBaiduLocationsResultInfo

## Implements

- [`ISerpBaiduLocationsResultInfo`](../interfaces/ISerpBaiduLocationsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBaiduLocationsResultInfo.md#constructor)

### Properties

- [country\_iso\_code](SerpBaiduLocationsResultInfo.md#country_iso_code)
- [location\_code](SerpBaiduLocationsResultInfo.md#location_code)
- [location\_code\_parent](SerpBaiduLocationsResultInfo.md#location_code_parent)
- [location\_name](SerpBaiduLocationsResultInfo.md#location_name)
- [location\_type](SerpBaiduLocationsResultInfo.md#location_type)

### Methods

- [init](SerpBaiduLocationsResultInfo.md#init)
- [toJSON](SerpBaiduLocationsResultInfo.md#tojson)
- [fromJS](SerpBaiduLocationsResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBaiduLocationsResultInfo**(`data?`): [`SerpBaiduLocationsResultInfo`](SerpBaiduLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBaiduLocationsResultInfo`](../interfaces/ISerpBaiduLocationsResultInfo.md) |

#### Returns

[`SerpBaiduLocationsResultInfo`](SerpBaiduLocationsResultInfo.md)

#### Defined in

main.ts:67594

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[ISerpBaiduLocationsResultInfo](../interfaces/ISerpBaiduLocationsResultInfo.md).[country_iso_code](../interfaces/ISerpBaiduLocationsResultInfo.md#country_iso_code)

#### Defined in

main.ts:67587

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Implementation of

[ISerpBaiduLocationsResultInfo](../interfaces/ISerpBaiduLocationsResultInfo.md).[location_code](../interfaces/ISerpBaiduLocationsResultInfo.md#location_code)

#### Defined in

main.ts:67579

___

### location\_code\_parent

• `Optional` **location\_code\_parent**: `number`

the code of the superordinate location
only City location_type is supported for all countries except China (where Country is also supported);
don’t match locations by location_code_parent because the results for Region and Country-level results for most countries are not supported by Baidu SERP API

#### Implementation of

[ISerpBaiduLocationsResultInfo](../interfaces/ISerpBaiduLocationsResultInfo.md).[location_code_parent](../interfaces/ISerpBaiduLocationsResultInfo.md#location_code_parent)

#### Defined in

main.ts:67585

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[ISerpBaiduLocationsResultInfo](../interfaces/ISerpBaiduLocationsResultInfo.md).[location_name](../interfaces/ISerpBaiduLocationsResultInfo.md#location_name)

#### Defined in

main.ts:67581

___

### location\_type

• `Optional` **location\_type**: `string`

location type
only City is supported for all countries except China (where Country is also supported)

#### Implementation of

[ISerpBaiduLocationsResultInfo](../interfaces/ISerpBaiduLocationsResultInfo.md).[location_type](../interfaces/ISerpBaiduLocationsResultInfo.md#location_type)

#### Defined in

main.ts:67590

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

main.ts:67603

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

main.ts:67624

___

### fromJS

▸ **fromJS**(`data`): [`SerpBaiduLocationsResultInfo`](SerpBaiduLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBaiduLocationsResultInfo`](SerpBaiduLocationsResultInfo.md)

#### Defined in

main.ts:67617
