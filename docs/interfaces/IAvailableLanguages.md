[Documentation](../README.md) / [Exports](../modules.md) / IAvailableLanguages

# Interface: IAvailableLanguages

## Implemented by

- [`AvailableLanguages`](../classes/AvailableLanguages.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [available\_sources](IAvailableLanguages.md#available_sources)
- [keywords](IAvailableLanguages.md#keywords)
- [language\_code](IAvailableLanguages.md#language_code)
- [language\_name](IAvailableLanguages.md#language_name)
- [serps](IAvailableLanguages.md#serps)

## Properties

### available\_sources

• `Optional` **available\_sources**: `string`[]

supported sources
contains the sources of data supported for a specific location and language combination
only google and bing are currently available

#### Defined in

main.ts:78057

___

### keywords

• `Optional` **keywords**: `number`

the number of keywords available for the given location and language

#### Defined in

main.ts:78063

___

### language\_code

• `Optional` **language\_code**: `string`

language code according to ISO 639-1

#### Defined in

main.ts:78061

___

### language\_name

• `Optional` **language\_name**: `string`

language name

#### Defined in

main.ts:78059

___

### serps

• `Optional` **serps**: `number`

the number of SERP pages available for the given location and language

#### Defined in

main.ts:78065
