[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AvailableLanguages

# Class: AvailableLanguages

## Implements

- [`IAvailableLanguages`](../interfaces/IAvailableLanguages.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AvailableLanguages.md#constructor)

### Properties

- [available\_sources](AvailableLanguages.md#available_sources)
- [keywords](AvailableLanguages.md#keywords)
- [language\_code](AvailableLanguages.md#language_code)
- [language\_name](AvailableLanguages.md#language_name)
- [serps](AvailableLanguages.md#serps)

### Methods

- [init](AvailableLanguages.md#init)
- [toJSON](AvailableLanguages.md#tojson)
- [fromJS](AvailableLanguages.md#fromjs)

## Constructors

### constructor

• **new AvailableLanguages**(`data?`): [`AvailableLanguages`](AvailableLanguages.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAvailableLanguages`](../interfaces/IAvailableLanguages.md) |

#### Returns

[`AvailableLanguages`](AvailableLanguages.md)

#### Defined in

[main.ts:77856](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L77856)

## Properties

### available\_sources

• `Optional` **available\_sources**: `string`[]

supported sources
contains the sources of data supported for a specific location and language combination
only google and bing are currently available

#### Implementation of

[IAvailableLanguages](../interfaces/IAvailableLanguages.md).[available_sources](../interfaces/IAvailableLanguages.md#available_sources)

#### Defined in

[main.ts:77844](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L77844)

___


### keywords

• `Optional` **keywords**: `number`

the number of keywords available for the given location and language

#### Implementation of

[IAvailableLanguages](../interfaces/IAvailableLanguages.md).[keywords](../interfaces/IAvailableLanguages.md#keywords)

#### Defined in

[main.ts:77850](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L77850)

___


### language\_code

• `Optional` **language\_code**: `string`

language code according to ISO 639-1

#### Implementation of

[IAvailableLanguages](../interfaces/IAvailableLanguages.md).[language_code](../interfaces/IAvailableLanguages.md#language_code)

#### Defined in

[main.ts:77848](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L77848)

___


### language\_name

• `Optional` **language\_name**: `string`

language name

#### Implementation of

[IAvailableLanguages](../interfaces/IAvailableLanguages.md).[language_name](../interfaces/IAvailableLanguages.md#language_name)

#### Defined in

[main.ts:77846](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L77846)

___


### serps

• `Optional` **serps**: `number`

the number of SERP pages available for the given location and language

#### Implementation of

[IAvailableLanguages](../interfaces/IAvailableLanguages.md).[serps](../interfaces/IAvailableLanguages.md#serps)

#### Defined in

[main.ts:77852](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L77852)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:77865](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L77865)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:77890](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L77890)

___


### fromJS

▸ **fromJS**(`data`): [`AvailableLanguages`](AvailableLanguages.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AvailableLanguages`](AvailableLanguages.md)

#### Defined in

[main.ts:77883](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L77883)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")