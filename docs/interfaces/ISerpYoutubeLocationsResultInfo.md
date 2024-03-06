[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpYoutubeLocationsResultInfo

# Interface: ISerpYoutubeLocationsResultInfo

## Implemented by

- [`SerpYoutubeLocationsResultInfo`](../classes/SerpYoutubeLocationsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [country\_iso\_code](ISerpYoutubeLocationsResultInfo.md#country_iso_code)
- [location\_code](ISerpYoutubeLocationsResultInfo.md#location_code)
- [location\_code\_parent](ISerpYoutubeLocationsResultInfo.md#location_code_parent)
- [location\_name](ISerpYoutubeLocationsResultInfo.md#location_name)
- [location\_type](ISerpYoutubeLocationsResultInfo.md#location_type)

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Defined in

[main.ts:57251](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57251)

___


### location\_code

• `Optional` **location\_code**: `number`

location code

#### Defined in

[main.ts:57238](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57238)

___


### location\_code\_parent

• `Optional` **location\_code\_parent**: `number`

the code of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_code_parent": 20044
where location_code_parent corresponds to:
"location_code": 20044,
"location_name": "Lower Austria,Austria"

#### Defined in

[main.ts:57249](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57249)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Defined in

[main.ts:57240](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57240)

___


### location\_type

• `Optional` **location\_type**: `string`

location type

#### Defined in

[main.ts:57253](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57253)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")