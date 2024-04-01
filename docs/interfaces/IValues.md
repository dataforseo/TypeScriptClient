[Documentation](../README.md) / [Exports](../modules.md) / IValues

# Interface: IValues

## Implemented by

- [`Values`](../classes/Values.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [geo\_id](IValues.md#geo_id)
- [geo\_name](IValues.md#geo_name)
- [value](IValues.md#value)

## Properties

### geo\_id

• `Optional` **geo\_id**: `string`

location identifier
you can use this field for matching obtained results with location parameters specified in the request
see the full list of available locations with their geo_id here or by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations
example:
US-NY

#### Defined in

main.ts:125467

___

### geo\_name

• `Optional` **geo\_name**: `string`

location name
you can use this field for matching obtained results with location parameters specified in the request
see the full list of available locations with their geo_name here or by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations
example:
Andorra

#### Defined in

main.ts:125473

___

### value

• `Optional` **value**: `number`

relative keyword popularity rate in a given location
represents location-specific keyword popularity rate over the specified time range;
using this value you can understand how popular a keyword is in one location compared to another location;
calculation: we determine the highest popularity value for the relevant keyword across all locations, and then express all other values as a percentage of that highest value (100);
a value of 100 is the highest popularity for the term
a value of 50 means that the term is half as popular
a value of 0 means there was not enough data for this term

#### Defined in

main.ts:125481
