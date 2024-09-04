[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IAvailableLanguages

# Interface: IAvailableLanguages

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### available\_sources?

> `optional` **available\_sources**: `string`[]

supported sources
contains the sources of data supported for a specific location and language combination
only google and bing are currently available

#### Defined in

main.ts:81668

***

### keywords?

> `optional` **keywords**: `number`

the number of keywords available for the given location and language

#### Defined in

main.ts:81674

***

### language\_code?

> `optional` **language\_code**: `string`

language code according to ISO 639-1

#### Defined in

main.ts:81672

***

### language\_name?

> `optional` **language\_name**: `string`

language name

#### Defined in

main.ts:81670

***

### serps?

> `optional` **serps**: `number`

the number of SERP pages available for the given location and language

#### Defined in

main.ts:81676
