[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataDataforseoTrendsLocationsCountryResultInfo

# Interface: IKeywordsDataDataforseoTrendsLocationsCountryResultInfo

Defined in: main.ts:135793

## Indexable

\[`key`: `string`\]: `any`

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:135808

ISO country code of the location

***

### geo\_id?

> `optional` **geo\_id**: `string`

Defined in: main.ts:135817

DataForSEO trends location identifier
you can use this field for matching obtained results with the location_code parameter specified in the request

***

### geo\_name?

> `optional` **geo\_name**: `string`

Defined in: main.ts:135814

DataForSEO trends location name
you can use this field for matching obtained results with the location_name parameter specified in the request

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:135795

location code

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:135806

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

Defined in: main.ts:135797

full name of the location

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:135811

location type
possible values according to Google’s target types
