[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAvailableLanguages

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

main.ts:91413

***

### keywords?

> `optional` **keywords**: `number`

the number of keywords available for the given location and language

#### Defined in

main.ts:91419

***

### language\_code?

> `optional` **language\_code**: `string`

language code according to ISO 639-1

#### Defined in

main.ts:91417

***

### language\_name?

> `optional` **language\_name**: `string`

language name

#### Defined in

main.ts:91415

***

### serps?

> `optional` **serps**: `number`

the number of SERP pages available for the given location and language

#### Defined in

main.ts:91421
