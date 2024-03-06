[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpBaiduLocationsResultInfo

# Interface: ISerpBaiduLocationsResultInfo

## Implemented by

- [`SerpBaiduLocationsResultInfo`](../classes/SerpBaiduLocationsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [country\_iso\_code](ISerpBaiduLocationsResultInfo.md#country_iso_code)
- [location\_code](ISerpBaiduLocationsResultInfo.md#location_code)
- [location\_code\_parent](ISerpBaiduLocationsResultInfo.md#location_code_parent)
- [location\_name](ISerpBaiduLocationsResultInfo.md#location_name)
- [location\_type](ISerpBaiduLocationsResultInfo.md#location_type)

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Defined in

[main.ts:65272](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65272)

___


### location\_code

• `Optional` **location\_code**: `number`

location code

#### Defined in

[main.ts:65264](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65264)

___


### location\_code\_parent

• `Optional` **location\_code\_parent**: `number`

the code of the superordinate location
only City location_type is supported for all countries except China (where Country is also supported);
don’t match locations by location_code_parent because the results for Region and Country-level results for most countries are not supported by Baidu SERP API

#### Defined in

[main.ts:65270](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65270)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Defined in

[main.ts:65266](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65266)

___


### location\_type

• `Optional` **location\_type**: `string`

location type
only City is supported for all countries except China (where Country is also supported)

#### Defined in

[main.ts:65275](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65275)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")