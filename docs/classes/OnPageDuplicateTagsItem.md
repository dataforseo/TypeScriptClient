[Documentation](../README.md) / [Exports](../modules.md) / OnPageDuplicateTagsItem

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

main.ts:152592

## Properties

### accumulator

• `Optional` **accumulator**: `string`

contains the value of duplicated tag

#### Implementation of

[IOnPageDuplicateTagsItem](../interfaces/IOnPageDuplicateTagsItem.md).[accumulator](../interfaces/IOnPageDuplicateTagsItem.md#accumulator)

#### Defined in

main.ts:152584

___

### pages

• `Optional` **pages**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

pages with duplicate tags

#### Implementation of

[IOnPageDuplicateTagsItem](../interfaces/IOnPageDuplicateTagsItem.md).[pages](../interfaces/IOnPageDuplicateTagsItem.md#pages)

#### Defined in

main.ts:152588

___

### total\_count

• `Optional` **total\_count**: `number`

total count of duplicate pages

#### Implementation of

[IOnPageDuplicateTagsItem](../interfaces/IOnPageDuplicateTagsItem.md).[total_count](../interfaces/IOnPageDuplicateTagsItem.md#total_count)

#### Defined in

main.ts:152586

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

main.ts:152601

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

main.ts:152624

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

main.ts:152617
