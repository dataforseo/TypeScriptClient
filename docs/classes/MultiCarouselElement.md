[dataforseo-client](../README.md) / [Exports](../modules.md) / MultiCarouselElement

# Class: MultiCarouselElement

## Implements

- [`IMultiCarouselElement`](../interfaces/IMultiCarouselElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MultiCarouselElement.md#constructor)

### Properties

- [multi\_carousel\_snippets](MultiCarouselElement.md#multi_carousel_snippets)
- [title](MultiCarouselElement.md#title)
- [type](MultiCarouselElement.md#type)

### Methods

- [init](MultiCarouselElement.md#init)
- [toJSON](MultiCarouselElement.md#tojson)
- [fromJS](MultiCarouselElement.md#fromjs)

## Constructors

### constructor

• **new MultiCarouselElement**(`data?`): [`MultiCarouselElement`](MultiCarouselElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMultiCarouselElement`](../interfaces/IMultiCarouselElement.md) |

#### Returns

[`MultiCarouselElement`](MultiCarouselElement.md)

#### Defined in

[main.ts:31256](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31256)

## Properties

### multi\_carousel\_snippets

• `Optional` **multi\_carousel\_snippets**: [`CarouselElement`](CarouselElement.md)[]

multi_carousel_snippet results

#### Implementation of

[IMultiCarouselElement](../interfaces/IMultiCarouselElement.md).[multi_carousel_snippets](../interfaces/IMultiCarouselElement.md#multi_carousel_snippets)

#### Defined in

[main.ts:31252](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31252)

___

### title

• `Optional` **title**: `string`

title of the row

#### Implementation of

[IMultiCarouselElement](../interfaces/IMultiCarouselElement.md).[title](../interfaces/IMultiCarouselElement.md#title)

#### Defined in

[main.ts:31250](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31250)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IMultiCarouselElement](../interfaces/IMultiCarouselElement.md).[type](../interfaces/IMultiCarouselElement.md#type)

#### Defined in

[main.ts:31248](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31248)

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

[main.ts:31265](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31265)

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

[main.ts:31288](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31288)

___

### fromJS

▸ **fromJS**(`data`): [`MultiCarouselElement`](MultiCarouselElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MultiCarouselElement`](MultiCarouselElement.md)

#### Defined in

[main.ts:31281](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31281)
