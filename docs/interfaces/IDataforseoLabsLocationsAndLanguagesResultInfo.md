[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsLocationsAndLanguagesResultInfo

# Interface: IDataforseoLabsLocationsAndLanguagesResultInfo

## Implemented by

- [`DataforseoLabsLocationsAndLanguagesResultInfo`](../classes/DataforseoLabsLocationsAndLanguagesResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [available\_languages](IDataforseoLabsLocationsAndLanguagesResultInfo.md#available_languages)
- [country\_iso\_code](IDataforseoLabsLocationsAndLanguagesResultInfo.md#country_iso_code)
- [location\_code](IDataforseoLabsLocationsAndLanguagesResultInfo.md#location_code)
- [location\_code\_parent](IDataforseoLabsLocationsAndLanguagesResultInfo.md#location_code_parent)
- [location\_name](IDataforseoLabsLocationsAndLanguagesResultInfo.md#location_name)
- [location\_type](IDataforseoLabsLocationsAndLanguagesResultInfo.md#location_type)

## Properties

### available\_languages

• `Optional` **available\_languages**: [`AvailableLanguages`](../classes/AvailableLanguages.md)[]

supported languages
contains the languages which are supported for a specific location

#### Defined in

[main.ts:78017](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78017)

___


### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Defined in

[main.ts:78010](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78010)

___


### location\_code

• `Optional` **location\_code**: `number`

location code

#### Defined in

[main.ts:78003](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78003)

___


### location\_code\_parent

• `Optional` **location\_code\_parent**: `number`

the code of the superordinate location
the value will be null as Country is the only supported location_type for this API

#### Defined in

[main.ts:78008](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78008)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Defined in

[main.ts:78005](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78005)

___


### location\_type

• `Optional` **location\_type**: `string`

location type
possible values:
Country

#### Defined in

[main.ts:78014](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78014)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")