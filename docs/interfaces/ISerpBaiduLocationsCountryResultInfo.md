[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpBaiduLocationsCountryResultInfo

# Interface: ISerpBaiduLocationsCountryResultInfo

Defined in: main.ts:78638

## Indexable

\[`key`: `string`\]: `any`

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:78648

ISO country code of the location

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:78640

location code

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:78646

the code of the superordinate location
only City location_type is supported for all countries except China (where Country is also supported);
don’t match locations by location_code_parent because the results for Region and Country-level results for most countries are not supported by Baidu SERP API

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:78642

full name of the location

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:78651

location type
only City is supported for all countries except China (where Country is also supported)
