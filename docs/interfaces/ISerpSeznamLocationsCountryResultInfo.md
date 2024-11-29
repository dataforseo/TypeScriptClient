[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpSeznamLocationsCountryResultInfo

# Interface: ISerpSeznamLocationsCountryResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Defined in

main.ts:82427

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Defined in

main.ts:82419

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

the code of the superordinate location
only City location_type is supported for all countries except China (where Country is also supported);
don’t match locations by location_code_parent because the results for Region and Country-level results for most countries are not supported by Baidu SERP API

#### Defined in

main.ts:82425

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Defined in

main.ts:82421

***

### location\_type?

> `optional` **location\_type**: `string`

location type

#### Defined in

main.ts:82429
