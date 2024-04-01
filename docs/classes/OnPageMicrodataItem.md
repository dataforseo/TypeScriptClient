[Documentation](../README.md) / [Exports](../modules.md) / OnPageMicrodataItem

# Class: OnPageMicrodataItem

## Implements

- [`IOnPageMicrodataItem`](../interfaces/IOnPageMicrodataItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageMicrodataItem.md#constructor)

### Properties

- [inspection\_info](OnPageMicrodataItem.md#inspection_info)
- [type](OnPageMicrodataItem.md#type)

### Methods

- [init](OnPageMicrodataItem.md#init)
- [toJSON](OnPageMicrodataItem.md#tojson)
- [fromJS](OnPageMicrodataItem.md#fromjs)

## Constructors

### constructor

• **new OnPageMicrodataItem**(`data?`): [`OnPageMicrodataItem`](OnPageMicrodataItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageMicrodataItem`](../interfaces/IOnPageMicrodataItem.md) |

#### Returns

[`OnPageMicrodataItem`](OnPageMicrodataItem.md)

#### Defined in

main.ts:156318

## Properties

### inspection\_info

• `Optional` **inspection\_info**: [`MicrodataInspectionInfo`](MicrodataInspectionInfo.md)

information related to microdata validation

#### Implementation of

[IOnPageMicrodataItem](../interfaces/IOnPageMicrodataItem.md).[inspection_info](../interfaces/IOnPageMicrodataItem.md#inspection_info)

#### Defined in

main.ts:156314

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IOnPageMicrodataItem](../interfaces/IOnPageMicrodataItem.md).[type](../interfaces/IOnPageMicrodataItem.md#type)

#### Defined in

main.ts:156312

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

main.ts:156327

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

main.ts:156345

___

### fromJS

▸ **fromJS**(`data`): [`OnPageMicrodataItem`](OnPageMicrodataItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageMicrodataItem`](OnPageMicrodataItem.md)

#### Defined in

main.ts:156338
