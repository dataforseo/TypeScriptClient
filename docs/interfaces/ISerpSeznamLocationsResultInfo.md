[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpSeznamLocationsResultInfo

# Interface: ISerpSeznamLocationsResultInfo

## Implemented by

- [`SerpSeznamLocationsResultInfo`](../classes/SerpSeznamLocationsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [country\_iso\_code](ISerpSeznamLocationsResultInfo.md#country_iso_code)
- [location\_code](ISerpSeznamLocationsResultInfo.md#location_code)
- [location\_code\_parent](ISerpSeznamLocationsResultInfo.md#location_code_parent)
- [location\_name](ISerpSeznamLocationsResultInfo.md#location_name)
- [location\_type](ISerpSeznamLocationsResultInfo.md#location_type)

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Defined in

[main.ts:68823](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68823)

___


### location\_code

• `Optional` **location\_code**: `number`

location code

#### Defined in

[main.ts:68815](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68815)

___


### location\_code\_parent

• `Optional` **location\_code\_parent**: `number`

the code of the superordinate location
only City location_type is supported for all countries except China (where Country is also supported);
don’t match locations by location_code_parent because the results for Region and Country-level results for most countries are not supported by Baidu SERP API

#### Defined in

[main.ts:68821](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68821)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Defined in

[main.ts:68817](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68817)

___


### location\_type

• `Optional` **location\_type**: `string`

location type

#### Defined in

[main.ts:68825](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68825)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")