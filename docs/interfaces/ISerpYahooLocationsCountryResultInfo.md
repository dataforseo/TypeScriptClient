[Documentation](../README.md) / [Exports](../modules.md) / ISerpYahooLocationsCountryResultInfo

# Interface: ISerpYahooLocationsCountryResultInfo

## Implemented by

- [`SerpYahooLocationsCountryResultInfo`](../classes/SerpYahooLocationsCountryResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [country\_iso\_code](ISerpYahooLocationsCountryResultInfo.md#country_iso_code)
- [location\_code](ISerpYahooLocationsCountryResultInfo.md#location_code)
- [location\_code\_parent](ISerpYahooLocationsCountryResultInfo.md#location_code_parent)
- [location\_name](ISerpYahooLocationsCountryResultInfo.md#location_name)
- [location\_type](ISerpYahooLocationsCountryResultInfo.md#location_type)

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Defined in

main.ts:63055

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Defined in

main.ts:63042

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

main.ts:63053

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Defined in

main.ts:63044

___

### location\_type

• `Optional` **location\_type**: `string`

location type

#### Defined in

main.ts:63057
