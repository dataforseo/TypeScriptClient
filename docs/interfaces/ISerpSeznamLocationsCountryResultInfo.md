**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ISerpSeznamLocationsCountryResultInfo

# Interface: ISerpSeznamLocationsCountryResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### country\_iso\_code?

> **`optional`** **country\_iso\_code**: `string`

ISO country code of the location

#### Source

main.ts:71396

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code

#### Source

main.ts:71388

***

### location\_code\_parent?

> **`optional`** **location\_code\_parent**: `number`

the code of the superordinate location
only City location_type is supported for all countries except China (where Country is also supported);
don’t match locations by location_code_parent because the results for Region and Country-level results for most countries are not supported by Baidu SERP API

#### Source

main.ts:71394

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location

#### Source

main.ts:71390

***

### location\_type?

> **`optional`** **location\_type**: `string`

location type

#### Source

main.ts:71398
