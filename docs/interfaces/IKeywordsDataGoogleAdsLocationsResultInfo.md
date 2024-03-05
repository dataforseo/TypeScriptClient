[dataforseo-client](../README.md) / [Exports](../modules.md) / IKeywordsDataGoogleAdsLocationsResultInfo

# Interface: IKeywordsDataGoogleAdsLocationsResultInfo

## Implemented by

- [`KeywordsDataGoogleAdsLocationsResultInfo`](../classes/KeywordsDataGoogleAdsLocationsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [country\_iso\_code](IKeywordsDataGoogleAdsLocationsResultInfo.md#country_iso_code)
- [location\_code](IKeywordsDataGoogleAdsLocationsResultInfo.md#location_code)
- [location\_code\_parent](IKeywordsDataGoogleAdsLocationsResultInfo.md#location_code_parent)
- [location\_name](IKeywordsDataGoogleAdsLocationsResultInfo.md#location_name)
- [location\_type](IKeywordsDataGoogleAdsLocationsResultInfo.md#location_type)

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Defined in

[main.ts:113180](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113180)

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Defined in

[main.ts:113167](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113167)

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

[main.ts:113178](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113178)

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Defined in

[main.ts:113169](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113169)

___

### location\_type

• `Optional` **location\_type**: `string`

location type
possible values according to Google’s target types

#### Defined in

[main.ts:113183](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113183)
