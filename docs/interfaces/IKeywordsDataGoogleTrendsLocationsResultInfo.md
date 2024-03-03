[Documentation](../README.md) / [Exports](../modules.md) / IKeywordsDataGoogleTrendsLocationsResultInfo

# Interface: IKeywordsDataGoogleTrendsLocationsResultInfo

## Implemented by

- [`KeywordsDataGoogleTrendsLocationsResultInfo`](../classes/KeywordsDataGoogleTrendsLocationsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [country\_iso\_code](IKeywordsDataGoogleTrendsLocationsResultInfo.md#country_iso_code)
- [geo\_id](IKeywordsDataGoogleTrendsLocationsResultInfo.md#geo_id)
- [geo\_name](IKeywordsDataGoogleTrendsLocationsResultInfo.md#geo_name)
- [location\_code](IKeywordsDataGoogleTrendsLocationsResultInfo.md#location_code)
- [location\_code\_parent](IKeywordsDataGoogleTrendsLocationsResultInfo.md#location_code_parent)
- [location\_name](IKeywordsDataGoogleTrendsLocationsResultInfo.md#location_name)
- [location\_type](IKeywordsDataGoogleTrendsLocationsResultInfo.md#location_type)

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Defined in

main.ts:119237

___

### geo\_id

• `Optional` **geo\_id**: `string`

google trends location identifier
you can use this field for matching obtained results with the location_code parameter specified in the request

#### Defined in

main.ts:119246

___

### geo\_name

• `Optional` **geo\_name**: `string`

google trends location name
you can use this field for matching obtained results with the location_name parameter specified in the request

#### Defined in

main.ts:119243

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Defined in

main.ts:119224

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

main.ts:119235

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Defined in

main.ts:119226

___

### location\_type

• `Optional` **location\_type**: `string`

location type
possible values according to Google’s target types

#### Defined in

main.ts:119240
