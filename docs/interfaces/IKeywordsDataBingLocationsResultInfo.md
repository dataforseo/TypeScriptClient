[dataforseo-client](../README.md) / [Exports](../modules.md) / IKeywordsDataBingLocationsResultInfo

# Interface: IKeywordsDataBingLocationsResultInfo

## Implemented by

- [`KeywordsDataBingLocationsResultInfo`](../classes/KeywordsDataBingLocationsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [country\_iso\_code](IKeywordsDataBingLocationsResultInfo.md#country_iso_code)
- [location\_code](IKeywordsDataBingLocationsResultInfo.md#location_code)
- [location\_code\_parent](IKeywordsDataBingLocationsResultInfo.md#location_code_parent)
- [location\_name](IKeywordsDataBingLocationsResultInfo.md#location_name)
- [location\_type](IKeywordsDataBingLocationsResultInfo.md#location_type)

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Defined in

[main.ts:122002](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122002)

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Defined in

[main.ts:121990](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121990)

___

### location\_code\_parent

• `Optional` **location\_code\_parent**: `number`

the code of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_code_parent": 20044where location_code_parent corresponds to:
"location_code": 20044,
"location_name": "Lower Austria,Austria"

#### Defined in

[main.ts:122000](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122000)

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Defined in

[main.ts:121992](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121992)

___

### location\_type

• `Optional` **location\_type**: `string`

location type

#### Defined in

[main.ts:122004](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122004)
