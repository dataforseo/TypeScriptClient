[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBaiduLocationsResultInfo

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

[main.ts:65217](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65217)

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[ISerpBaiduLocationsResultInfo](../interfaces/ISerpBaiduLocationsResultInfo.md).[country_iso_code](../interfaces/ISerpBaiduLocationsResultInfo.md#country_iso_code)

#### Defined in

[main.ts:65210](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65210)

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Implementation of

[ISerpBaiduLocationsResultInfo](../interfaces/ISerpBaiduLocationsResultInfo.md).[location_code](../interfaces/ISerpBaiduLocationsResultInfo.md#location_code)

#### Defined in

[main.ts:65202](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65202)

___

### location\_code\_parent

• `Optional` **location\_code\_parent**: `number`

the code of the superordinate location
only City location_type is supported for all countries except China (where Country is also supported);
don’t match locations by location_code_parent because the results for Region and Country-level results for most countries are not supported by Baidu SERP API

#### Implementation of

[ISerpBaiduLocationsResultInfo](../interfaces/ISerpBaiduLocationsResultInfo.md).[location_code_parent](../interfaces/ISerpBaiduLocationsResultInfo.md#location_code_parent)

#### Defined in

[main.ts:65208](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65208)

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[ISerpBaiduLocationsResultInfo](../interfaces/ISerpBaiduLocationsResultInfo.md).[location_name](../interfaces/ISerpBaiduLocationsResultInfo.md#location_name)

#### Defined in

[main.ts:65204](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65204)

___

### location\_type

• `Optional` **location\_type**: `string`

location type
only City is supported for all countries except China (where Country is also supported)

#### Implementation of

[ISerpBaiduLocationsResultInfo](../interfaces/ISerpBaiduLocationsResultInfo.md).[location_type](../interfaces/ISerpBaiduLocationsResultInfo.md#location_type)

#### Defined in

[main.ts:65213](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65213)

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

[main.ts:65226](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65226)

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

[main.ts:65247](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65247)

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

[main.ts:65240](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65240)
