[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpBaiduLocationsCountryResultInfo

# Interface: ISerpBaiduLocationsCountryResultInfo

## Implemented by

- [`SerpBaiduLocationsCountryResultInfo`](../classes/SerpBaiduLocationsCountryResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [country\_iso\_code](ISerpBaiduLocationsCountryResultInfo.md#country_iso_code)
- [location\_code](ISerpBaiduLocationsCountryResultInfo.md#location_code)
- [location\_code\_parent](ISerpBaiduLocationsCountryResultInfo.md#location_code_parent)
- [location\_name](ISerpBaiduLocationsCountryResultInfo.md#location_name)
- [location\_type](ISerpBaiduLocationsCountryResultInfo.md#location_type)

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Defined in

[main.ts:65462](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65462)

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Defined in

[main.ts:65454](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65454)

___

### location\_code\_parent

• `Optional` **location\_code\_parent**: `number`

the code of the superordinate location
only City location_type is supported for all countries except China (where Country is also supported);
don’t match locations by location_code_parent because the results for Region and Country-level results for most countries are not supported by Baidu SERP API

#### Defined in

[main.ts:65460](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65460)

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Defined in

[main.ts:65456](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65456)

___

### location\_type

• `Optional` **location\_type**: `string`

location type
only City is supported for all countries except China (where Country is also supported)

#### Defined in

[main.ts:65465](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65465)
