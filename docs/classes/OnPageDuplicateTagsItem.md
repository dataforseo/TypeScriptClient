[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageDuplicateTagsItem

# Class: OnPageDuplicateTagsItem

## Implements

- [`IOnPageDuplicateTagsItem`](../interfaces/IOnPageDuplicateTagsItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageDuplicateTagsItem.md#constructor)

### Properties

- [accumulator](OnPageDuplicateTagsItem.md#accumulator)
- [pages](OnPageDuplicateTagsItem.md#pages)
- [total\_count](OnPageDuplicateTagsItem.md#total_count)

### Methods

- [init](OnPageDuplicateTagsItem.md#init)
- [toJSON](OnPageDuplicateTagsItem.md#tojson)
- [fromJS](OnPageDuplicateTagsItem.md#fromjs)

## Constructors

### constructor

• **new OnPageDuplicateTagsItem**(`data?`): [`OnPageDuplicateTagsItem`](OnPageDuplicateTagsItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageDuplicateTagsItem`](../interfaces/IOnPageDuplicateTagsItem.md) |

#### Returns

[`OnPageDuplicateTagsItem`](OnPageDuplicateTagsItem.md)

#### Defined in

[main.ts:147165](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147165)

## Properties

### accumulator

• `Optional` **accumulator**: `string`

contains the value of duplicated tag

#### Implementation of

[IOnPageDuplicateTagsItem](../interfaces/IOnPageDuplicateTagsItem.md).[accumulator](../interfaces/IOnPageDuplicateTagsItem.md#accumulator)

#### Defined in

[main.ts:147157](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147157)

___


### pages

• `Optional` **pages**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

pages with duplicate tags

#### Implementation of

[IOnPageDuplicateTagsItem](../interfaces/IOnPageDuplicateTagsItem.md).[pages](../interfaces/IOnPageDuplicateTagsItem.md#pages)

#### Defined in

[main.ts:147161](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147161)

___


### total\_count

• `Optional` **total\_count**: `number`

total count of duplicate pages

#### Implementation of

[IOnPageDuplicateTagsItem](../interfaces/IOnPageDuplicateTagsItem.md).[total_count](../interfaces/IOnPageDuplicateTagsItem.md#total_count)

#### Defined in

[main.ts:147159](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147159)

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

[main.ts:147174](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147174)

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

[main.ts:147197](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147197)

___


### fromJS

▸ **fromJS**(`data`): [`OnPageDuplicateTagsItem`](OnPageDuplicateTagsItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageDuplicateTagsItem`](OnPageDuplicateTagsItem.md)

#### Defined in

[main.ts:147190](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147190)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")