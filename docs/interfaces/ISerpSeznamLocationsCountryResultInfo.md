[Documentation](../README.md) / [Exports](../modules.md) / ISerpSeznamLocationsCountryResultInfo

# Interface: ISerpSeznamLocationsCountryResultInfo

## Implemented by

- [`SerpSeznamLocationsCountryResultInfo`](../classes/SerpSeznamLocationsCountryResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [country\_iso\_code](ISerpSeznamLocationsCountryResultInfo.md#country_iso_code)
- [location\_code](ISerpSeznamLocationsCountryResultInfo.md#location_code)
- [location\_code\_parent](ISerpSeznamLocationsCountryResultInfo.md#location_code_parent)
- [location\_name](ISerpSeznamLocationsCountryResultInfo.md#location_name)
- [location\_type](ISerpSeznamLocationsCountryResultInfo.md#location_type)

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Defined in

main.ts:69155

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Defined in

main.ts:69147

___

### location\_code\_parent

• `Optional` **location\_code\_parent**: `number`

the code of the superordinate location
only City location_type is supported for all countries except China (where Country is also supported);
don’t match locations by location_code_parent because the results for Region and Country-level results for most countries are not supported by Baidu SERP API

#### Defined in

main.ts:69153

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Defined in

main.ts:69149

___

### location\_type

• `Optional` **location\_type**: `string`

location type

#### Defined in

main.ts:69157
