[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsLocationsAndLanguagesResultInfo

# Interface: IDataforseoLabsLocationsAndLanguagesResultInfo

Defined in: main.ts:91537

## Indexable

\[`key`: `string`\]: `any`

## Properties

### available\_languages?

> `optional` **available\_languages**: [`AvailableLanguages`](../classes/AvailableLanguages.md)[]

Defined in: main.ts:91553

supported languages
contains the languages which are supported for a specific location

***

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:91546

ISO country code of the location

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:91539

location code

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:91544

the code of the superordinate location
the value will be null as Country is the only supported location_type for this API

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:91541

full name of the location

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:91550

location type
possible values:
Country
