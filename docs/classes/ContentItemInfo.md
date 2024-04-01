[Documentation](../README.md) / [Exports](../modules.md) / ContentItemInfo

# Class: ContentItemInfo

## Implements

- [`IContentItemInfo`](../interfaces/IContentItemInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentItemInfo.md#constructor)

### Properties

- [text](ContentItemInfo.md#text)
- [url](ContentItemInfo.md#url)

### Methods

- [init](ContentItemInfo.md#init)
- [toJSON](ContentItemInfo.md#tojson)
- [fromJS](ContentItemInfo.md#fromjs)

## Constructors

### constructor

• **new ContentItemInfo**(`data?`): [`ContentItemInfo`](ContentItemInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentItemInfo`](../interfaces/IContentItemInfo.md) |

#### Returns

[`ContentItemInfo`](ContentItemInfo.md)

#### Defined in

main.ts:157389

## Properties

### text

• `Optional` **text**: `string`

content text

#### Implementation of

[IContentItemInfo](../interfaces/IContentItemInfo.md).[text](../interfaces/IContentItemInfo.md#text)

#### Defined in

main.ts:157382

___

### url

• `Optional` **url**: `string`

page URL
displayed in case the text is a link anchor

#### Implementation of

[IContentItemInfo](../interfaces/IContentItemInfo.md).[url](../interfaces/IContentItemInfo.md#url)

#### Defined in

main.ts:157385

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

main.ts:157398

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

main.ts:157416

___

### fromJS

▸ **fromJS**(`data`): [`ContentItemInfo`](ContentItemInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentItemInfo`](ContentItemInfo.md)

#### Defined in

main.ts:157409
