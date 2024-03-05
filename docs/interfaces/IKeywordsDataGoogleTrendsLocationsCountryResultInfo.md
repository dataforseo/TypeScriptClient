[dataforseo-client](../README.md) / [Exports](../modules.md) / IKeywordsDataGoogleTrendsLocationsCountryResultInfo

# Interface: IKeywordsDataGoogleTrendsLocationsCountryResultInfo

## Implemented by

- [`KeywordsDataGoogleTrendsLocationsCountryResultInfo`](../classes/KeywordsDataGoogleTrendsLocationsCountryResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [country\_iso\_code](IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md#country_iso_code)
- [geo\_id](IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md#geo_id)
- [geo\_name](IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md#geo_name)
- [location\_code](IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md#location_code)
- [location\_code\_parent](IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md#location_code_parent)
- [location\_name](IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md#location_name)
- [location\_type](IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md#location_type)

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Defined in

[main.ts:119309](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119309)

___

### geo\_id

• `Optional` **geo\_id**: `string`

google trends location identifier
you can use this field for matching obtained results with the location_code parameter specified in the request

#### Defined in

[main.ts:119318](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119318)

___

### geo\_name

• `Optional` **geo\_name**: `string`

google trends location name
you can use this field for matching obtained results with the location_name parameter specified in the request

#### Defined in

[main.ts:119315](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119315)

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Defined in

[main.ts:119296](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119296)

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

[main.ts:119307](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119307)

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Defined in

[main.ts:119298](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119298)

___

### location\_type

• `Optional` **location\_type**: `string`

location type
possible values according to Google’s target types

#### Defined in

[main.ts:119312](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119312)
