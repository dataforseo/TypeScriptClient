[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBaiduLocationsCountryResultInfo

# Class: SerpBaiduLocationsCountryResultInfo

## Implements

- [`ISerpBaiduLocationsCountryResultInfo`](../interfaces/ISerpBaiduLocationsCountryResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBaiduLocationsCountryResultInfo.md#constructor)

### Properties

- [country\_iso\_code](SerpBaiduLocationsCountryResultInfo.md#country_iso_code)
- [location\_code](SerpBaiduLocationsCountryResultInfo.md#location_code)
- [location\_code\_parent](SerpBaiduLocationsCountryResultInfo.md#location_code_parent)
- [location\_name](SerpBaiduLocationsCountryResultInfo.md#location_name)
- [location\_type](SerpBaiduLocationsCountryResultInfo.md#location_type)

### Methods

- [init](SerpBaiduLocationsCountryResultInfo.md#init)
- [toJSON](SerpBaiduLocationsCountryResultInfo.md#tojson)
- [fromJS](SerpBaiduLocationsCountryResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBaiduLocationsCountryResultInfo**(`data?`): [`SerpBaiduLocationsCountryResultInfo`](SerpBaiduLocationsCountryResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBaiduLocationsCountryResultInfo`](../interfaces/ISerpBaiduLocationsCountryResultInfo.md) |

#### Returns

[`SerpBaiduLocationsCountryResultInfo`](SerpBaiduLocationsCountryResultInfo.md)

#### Defined in

[main.ts:65407](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65407)

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[ISerpBaiduLocationsCountryResultInfo](../interfaces/ISerpBaiduLocationsCountryResultInfo.md).[country_iso_code](../interfaces/ISerpBaiduLocationsCountryResultInfo.md#country_iso_code)

#### Defined in

[main.ts:65400](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65400)

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Implementation of

[ISerpBaiduLocationsCountryResultInfo](../interfaces/ISerpBaiduLocationsCountryResultInfo.md).[location_code](../interfaces/ISerpBaiduLocationsCountryResultInfo.md#location_code)

#### Defined in

[main.ts:65392](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65392)

___

### location\_code\_parent

• `Optional` **location\_code\_parent**: `number`

the code of the superordinate location
only City location_type is supported for all countries except China (where Country is also supported);
don’t match locations by location_code_parent because the results for Region and Country-level results for most countries are not supported by Baidu SERP API

#### Implementation of

[ISerpBaiduLocationsCountryResultInfo](../interfaces/ISerpBaiduLocationsCountryResultInfo.md).[location_code_parent](../interfaces/ISerpBaiduLocationsCountryResultInfo.md#location_code_parent)

#### Defined in

[main.ts:65398](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65398)

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[ISerpBaiduLocationsCountryResultInfo](../interfaces/ISerpBaiduLocationsCountryResultInfo.md).[location_name](../interfaces/ISerpBaiduLocationsCountryResultInfo.md#location_name)

#### Defined in

[main.ts:65394](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65394)

___

### location\_type

• `Optional` **location\_type**: `string`

location type
only City is supported for all countries except China (where Country is also supported)

#### Implementation of

[ISerpBaiduLocationsCountryResultInfo](../interfaces/ISerpBaiduLocationsCountryResultInfo.md).[location_type](../interfaces/ISerpBaiduLocationsCountryResultInfo.md#location_type)

#### Defined in

[main.ts:65403](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65403)

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

[main.ts:65416](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65416)

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

[main.ts:65437](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65437)

___

### fromJS

▸ **fromJS**(`data`): [`SerpBaiduLocationsCountryResultInfo`](SerpBaiduLocationsCountryResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBaiduLocationsCountryResultInfo`](SerpBaiduLocationsCountryResultInfo.md)

#### Defined in

[main.ts:65430](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65430)
