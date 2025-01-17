[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleAdsSearchLocationsResultInfo

# Interface: ISerpGoogleAdsSearchLocationsResultInfo

Defined in: main.ts:61585

## Indexable

\[`key`: `string`\]: `any`

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:61600

ISO country code of the location

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:61587

location code

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:61598

the code of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_code_parent": 20044
where location_code_parent corresponds to:
"location_code": 20044,
"location_name": "Lower Austria,Austria"

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:61589

full name of the location

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:61602

location type
