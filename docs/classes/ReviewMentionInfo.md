[Documentation](../README.md) / [Exports](../modules.md) / ReviewMentionInfo

# Class: ReviewMentionInfo

## Implements

- [`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ReviewMentionInfo.md#constructor)

### Properties

- [negative\_count](ReviewMentionInfo.md#negative_count)
- [positive\_count](ReviewMentionInfo.md#positive_count)
- [positive\_score](ReviewMentionInfo.md#positive_score)
- [title](ReviewMentionInfo.md#title)
- [total\_count](ReviewMentionInfo.md#total_count)
- [visible\_by\_default](ReviewMentionInfo.md#visible_by_default)

### Methods

- [init](ReviewMentionInfo.md#init)
- [toJSON](ReviewMentionInfo.md#tojson)
- [fromJS](ReviewMentionInfo.md#fromjs)

## Constructors

### constructor

• **new ReviewMentionInfo**(`data?`): [`ReviewMentionInfo`](ReviewMentionInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md) |

#### Returns

[`ReviewMentionInfo`](ReviewMentionInfo.md)

#### Defined in

main.ts:201239

## Properties

### negative\_count

• `Optional` **negative\_count**: `number`

count of negative reviews by criterion

#### Implementation of

[IReviewMentionInfo](../interfaces/IReviewMentionInfo.md).[negative_count](../interfaces/IReviewMentionInfo.md#negative_count)

#### Defined in

main.ts:201230

___

### positive\_count

• `Optional` **positive\_count**: `number`

count of positive reviews by criterion

#### Implementation of

[IReviewMentionInfo](../interfaces/IReviewMentionInfo.md).[positive_count](../interfaces/IReviewMentionInfo.md#positive_count)

#### Defined in

main.ts:201228

___

### positive\_score

• `Optional` **positive\_score**: `number`

positive score by criterion

#### Implementation of

[IReviewMentionInfo](../interfaces/IReviewMentionInfo.md).[positive_score](../interfaces/IReviewMentionInfo.md#positive_score)

#### Defined in

main.ts:201226

___

### title

• `Optional` **title**: `string`

title of the evaluated criterion

#### Implementation of

[IReviewMentionInfo](../interfaces/IReviewMentionInfo.md).[title](../interfaces/IReviewMentionInfo.md#title)

#### Defined in

main.ts:201224

___

### total\_count

• `Optional` **total\_count**: `number`

count of all reviews by criterion

#### Implementation of

[IReviewMentionInfo](../interfaces/IReviewMentionInfo.md).[total_count](../interfaces/IReviewMentionInfo.md#total_count)

#### Defined in

main.ts:201232

___

### visible\_by\_default

• `Optional` **visible\_by\_default**: `boolean`

element is visible by default
indicates whether the review element is visible by default

#### Implementation of

[IReviewMentionInfo](../interfaces/IReviewMentionInfo.md).[visible_by_default](../interfaces/IReviewMentionInfo.md#visible_by_default)

#### Defined in

main.ts:201235

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

main.ts:201248

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

main.ts:201270

___

### fromJS

▸ **fromJS**(`data`): [`ReviewMentionInfo`](ReviewMentionInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ReviewMentionInfo`](ReviewMentionInfo.md)

#### Defined in

main.ts:201263
