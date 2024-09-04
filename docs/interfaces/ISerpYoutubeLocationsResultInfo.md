[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ISerpYoutubeLocationsResultInfo

# Interface: ISerpYoutubeLocationsResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Defined in

main.ts:60795

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Defined in

main.ts:60782

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

main.ts:60793

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Defined in

main.ts:60784

***

### location\_type?

> `optional` **location\_type**: `string`

location type

#### Defined in

main.ts:60797
