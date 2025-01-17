[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpBaiduLocationsResultInfo

# Interface: ISerpBaiduLocationsResultInfo

Defined in: main.ts:78412

## Indexable

\[`key`: `string`\]: `any`

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:78422

ISO country code of the location

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:78414

location code

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:78420

the code of the superordinate location
only City location_type is supported for all countries except China (where Country is also supported);
don’t match locations by location_code_parent because the results for Region and Country-level results for most countries are not supported by Baidu SERP API

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:78416

full name of the location

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:78425

location type
only City is supported for all countries except China (where Country is also supported)
