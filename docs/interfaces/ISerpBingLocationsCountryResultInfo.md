[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ISerpBingLocationsCountryResultInfo

# Interface: ISerpBingLocationsCountryResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Defined in

main.ts:58260

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Defined in

main.ts:58247

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

main.ts:58258

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Defined in

main.ts:58249

***

### location\_type?

> `optional` **location\_type**: `string`

location type

#### Defined in

main.ts:58262
