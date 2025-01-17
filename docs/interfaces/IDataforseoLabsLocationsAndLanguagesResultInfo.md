[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsLocationsAndLanguagesResultInfo

# Interface: IDataforseoLabsLocationsAndLanguagesResultInfo

Defined in: main.ts:91501

## Indexable

\[`key`: `string`\]: `any`

## Properties

### available\_languages?

> `optional` **available\_languages**: [`AvailableLanguages`](../classes/AvailableLanguages.md)[]

Defined in: main.ts:91517

supported languages
contains the languages which are supported for a specific location

***

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:91510

ISO country code of the location

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:91503

location code

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:91508

the code of the superordinate location
the value will be null as Country is the only supported location_type for this API

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:91505

full name of the location

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:91514

location type
possible values:
Country
