[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataGoogleLocationsCountryResultInfo

# Interface: IAppDataGoogleLocationsCountryResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Defined in

main.ts:198931

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Defined in

main.ts:198919

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Defined in

main.ts:198921

***

### location\_name\_parent?

> `optional` **location\_name\_parent**: `string`

the name of the superordinate location
example:
"location_code": 1006473,
"location_name": "Altrincham,England,United Kingdom",
"location_name_parent": "England,United Kingdom", where location_name_parent corresponds to:
"location_code": 20339,
"location_name": "England,United Kingdom"

#### Defined in

main.ts:198929

***

### location\_type?

> `optional` **location\_type**: `string`

location type

#### Defined in

main.ts:198933
