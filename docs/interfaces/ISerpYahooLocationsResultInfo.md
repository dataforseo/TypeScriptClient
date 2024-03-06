[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpYahooLocationsResultInfo

# Interface: ISerpYahooLocationsResultInfo

## Implemented by

- [`SerpYahooLocationsResultInfo`](../classes/SerpYahooLocationsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [country\_iso\_code](ISerpYahooLocationsResultInfo.md#country_iso_code)
- [location\_code](ISerpYahooLocationsResultInfo.md#location_code)
- [location\_code\_parent](ISerpYahooLocationsResultInfo.md#location_code_parent)
- [location\_name](ISerpYahooLocationsResultInfo.md#location_name)
- [location\_type](ISerpYahooLocationsResultInfo.md#location_type)

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Defined in

[main.ts:62713](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62713)

___


### location\_code

• `Optional` **location\_code**: `number`

location code

#### Defined in

[main.ts:62700](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62700)

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

[main.ts:62711](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62711)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Defined in

[main.ts:62702](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62702)

___


### location\_type

• `Optional` **location\_type**: `string`

location type

#### Defined in

[main.ts:62715](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62715)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")