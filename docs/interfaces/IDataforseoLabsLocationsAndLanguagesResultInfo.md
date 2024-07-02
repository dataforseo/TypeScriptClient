**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsLocationsAndLanguagesResultInfo

# Interface: IDataforseoLabsLocationsAndLanguagesResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### available\_languages?

> **`optional`** **available\_languages**: [`AvailableLanguages`](../classes/AvailableLanguages.md)[]

supported languages
contains the languages which are supported for a specific location

#### Source

main.ts:81981

***

### country\_iso\_code?

> **`optional`** **country\_iso\_code**: `string`

ISO country code of the location

#### Source

main.ts:81974

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code

#### Source

main.ts:81967

***

### location\_code\_parent?

> **`optional`** **location\_code\_parent**: `number`

the code of the superordinate location
the value will be null as Country is the only supported location_type for this API

#### Source

main.ts:81972

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location

#### Source

main.ts:81969

***

### location\_type?

> **`optional`** **location\_type**: `string`

location type
possible values:
Country

#### Source

main.ts:81978
