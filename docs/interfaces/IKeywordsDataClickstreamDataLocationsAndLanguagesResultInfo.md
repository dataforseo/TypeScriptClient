[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo

# Interface: IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### available\_languages?

> `optional` **available\_languages**: [`AvailableLanguages`](../classes/AvailableLanguages.md)[]

supported languages
contains the languages which are supported for a specific location

#### Defined in

main.ts:138675

***

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Defined in

main.ts:138668

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Defined in

main.ts:138661

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

the code of the superordinate location
the value will be null as Country is the only supported location_type for this API

#### Defined in

main.ts:138666

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Defined in

main.ts:138663

***

### location\_type?

> `optional` **location\_type**: `string`

location type
possible values:
Country

#### Defined in

main.ts:138672
