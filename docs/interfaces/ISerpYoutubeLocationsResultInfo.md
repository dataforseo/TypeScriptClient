[Documentation](../README.md) / [Exports](../modules.md) / ISerpYoutubeLocationsResultInfo

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

main.ts:57395

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Defined in

main.ts:57382

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

main.ts:57393

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Defined in

main.ts:57384

___

### location\_type

• `Optional` **location\_type**: `string`

location type

#### Defined in

main.ts:57397
