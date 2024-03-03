[Documentation](../README.md) / [Exports](../modules.md) / OtherSitesReviewsInfo

# Class: OtherSitesReviewsInfo

## Implements

- [`IOtherSitesReviewsInfo`](../interfaces/IOtherSitesReviewsInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OtherSitesReviewsInfo.md#constructor)

### Properties

- [rating](OtherSitesReviewsInfo.md#rating)
- [review\_text](OtherSitesReviewsInfo.md#review_text)
- [title](OtherSitesReviewsInfo.md#title)
- [url](OtherSitesReviewsInfo.md#url)

### Methods

- [init](OtherSitesReviewsInfo.md#init)
- [toJSON](OtherSitesReviewsInfo.md#tojson)
- [fromJS](OtherSitesReviewsInfo.md#fromjs)

## Constructors

### constructor

• **new OtherSitesReviewsInfo**(`data?`): [`OtherSitesReviewsInfo`](OtherSitesReviewsInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOtherSitesReviewsInfo`](../interfaces/IOtherSitesReviewsInfo.md) |

#### Returns

[`OtherSitesReviewsInfo`](OtherSitesReviewsInfo.md)

#### Defined in

main.ts:195979

## Properties

### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

rating in the review
information about the rating enclosed in the review on a third-party site

#### Implementation of

[IOtherSitesReviewsInfo](../interfaces/IOtherSitesReviewsInfo.md).[rating](../interfaces/IOtherSitesReviewsInfo.md#rating)

#### Defined in

main.ts:195975

___

### review\_text

• `Optional` **review\_text**: `string`

review text
text of the review

#### Implementation of

[IOtherSitesReviewsInfo](../interfaces/IOtherSitesReviewsInfo.md).[review_text](../interfaces/IOtherSitesReviewsInfo.md#review_text)

#### Defined in

main.ts:195972

___

### title

• `Optional` **title**: `string`

review title
contains a name of the third-party site where review initially appeared

#### Implementation of

[IOtherSitesReviewsInfo](../interfaces/IOtherSitesReviewsInfo.md).[title](../interfaces/IOtherSitesReviewsInfo.md#title)

#### Defined in

main.ts:195966

___

### url

• `Optional` **url**: `string`

review url
URL to the a third-party site where review initially appeared

#### Implementation of

[IOtherSitesReviewsInfo](../interfaces/IOtherSitesReviewsInfo.md).[url](../interfaces/IOtherSitesReviewsInfo.md#url)

#### Defined in

main.ts:195969

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

main.ts:195988

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

main.ts:196008

___

### fromJS

▸ **fromJS**(`data`): [`OtherSitesReviewsInfo`](OtherSitesReviewsInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OtherSitesReviewsInfo`](OtherSitesReviewsInfo.md)

#### Defined in

main.ts:196001
