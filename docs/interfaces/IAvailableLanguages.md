[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IAvailableLanguages

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

[main.ts:77913](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L77913)

___


### keywords

• `Optional` **keywords**: `number`

the number of keywords available for the given location and language

#### Defined in

[main.ts:77919](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L77919)

___


### language\_code

• `Optional` **language\_code**: `string`

language code according to ISO 639-1

#### Defined in

[main.ts:77917](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L77917)

___


### language\_name

• `Optional` **language\_name**: `string`

language name

#### Defined in

[main.ts:77915](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L77915)

___


### serps

• `Optional` **serps**: `number`

the number of SERP pages available for the given location and language

#### Defined in

[main.ts:77921](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L77921)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")