[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IKeywordsDataGoogleTrendsLocationsCountryResultInfo

# Interface: IKeywordsDataGoogleTrendsLocationsCountryResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Defined in

main.ts:125448

***

### geo\_id?

> `optional` **geo\_id**: `string`

google trends location identifier
you can use this field for matching obtained results with the location_code parameter specified in the request

#### Defined in

main.ts:125457

***

### geo\_name?

> `optional` **geo\_name**: `string`

google trends location name
you can use this field for matching obtained results with the location_name parameter specified in the request

#### Defined in

main.ts:125454

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Defined in

main.ts:125435

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

the code of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_code_parent": 20044
where location_code_parent corresponds to:
"location_code": 20044,
"location_name": "Lower Austria,Austria"

#### Defined in

main.ts:125446

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Defined in

main.ts:125437

***

### location\_type?

> `optional` **location\_type**: `string`

location type
possible values according to Google’s target types

#### Defined in

main.ts:125451
