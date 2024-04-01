[Documentation](../README.md) / [Exports](../modules.md) / ImageUrlInfo

# Class: ImageUrlInfo

## Implements

- [`IImageUrlInfo`](../interfaces/IImageUrlInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ImageUrlInfo.md#constructor)

### Properties

- [url](ImageUrlInfo.md#url)

### Methods

- [init](ImageUrlInfo.md#init)
- [toJSON](ImageUrlInfo.md#tojson)
- [fromJS](ImageUrlInfo.md#fromjs)

## Constructors

### constructor

• **new ImageUrlInfo**(`data?`): [`ImageUrlInfo`](ImageUrlInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IImageUrlInfo`](../interfaces/IImageUrlInfo.md) |

#### Returns

[`ImageUrlInfo`](ImageUrlInfo.md)

#### Defined in

main.ts:207801

## Properties

### url

• `Optional` **url**: `string`

URL of the image used in the review

#### Implementation of

[IImageUrlInfo](../interfaces/IImageUrlInfo.md).[url](../interfaces/IImageUrlInfo.md#url)

#### Defined in

main.ts:207797

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

main.ts:207810

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

main.ts:207827

___

### fromJS

▸ **fromJS**(`data`): [`ImageUrlInfo`](ImageUrlInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ImageUrlInfo`](ImageUrlInfo.md)

#### Defined in

main.ts:207820
