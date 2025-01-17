[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo

# Interface: IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo

Defined in: main.ts:147485

## Indexable

\[`key`: `string`\]: `any`

## Properties

### available\_languages?

> `optional` **available\_languages**: [`AvailableLanguages`](../classes/AvailableLanguages.md)[]

Defined in: main.ts:147501

supported languages
contains the languages which are supported for a specific location

***

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:147494

ISO country code of the location

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:147487

location code

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:147492

the code of the superordinate location
the value will be null as Country is the only supported location_type for this API

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:147489

full name of the location

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:147498

location type
possible values:
Country
