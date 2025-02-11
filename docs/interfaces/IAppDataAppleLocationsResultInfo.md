[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataAppleLocationsResultInfo

# Interface: IAppDataAppleLocationsResultInfo

Defined in: main.ts:205472

## Indexable

\[`key`: `string`\]: `any`

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:205487

ISO country code of the location

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:205474

location code

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:205476

full name of the location

***

### location\_name\_parent?

> `optional` **location\_name\_parent**: `number`

Defined in: main.ts:205485

the name of the superordinate location
example:
"location_code": 1006473,
"location_name": "Altrincham,England,United Kingdom",
"location_name_parent": "England,United Kingdom", where location_name_parent corresponds to:
"location_code": 20339,
"location_name": "England,United Kingdom"
note: Apple App Data API currently supports countries only, that is why this value will always be null

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:205489

location type
