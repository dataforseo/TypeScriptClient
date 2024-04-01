[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataSocialMediaRedditLiveResultInfo

# Class: BusinessDataSocialMediaRedditLiveResultInfo

## Implements

- [`IBusinessDataSocialMediaRedditLiveResultInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataSocialMediaRedditLiveResultInfo.md#constructor)

### Properties

- [page\_url](BusinessDataSocialMediaRedditLiveResultInfo.md#page_url)
- [reddit\_reviews](BusinessDataSocialMediaRedditLiveResultInfo.md#reddit_reviews)
- [type](BusinessDataSocialMediaRedditLiveResultInfo.md#type)

### Methods

- [init](BusinessDataSocialMediaRedditLiveResultInfo.md#init)
- [toJSON](BusinessDataSocialMediaRedditLiveResultInfo.md#tojson)
- [fromJS](BusinessDataSocialMediaRedditLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataSocialMediaRedditLiveResultInfo**(`data?`): [`BusinessDataSocialMediaRedditLiveResultInfo`](BusinessDataSocialMediaRedditLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataSocialMediaRedditLiveResultInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md) |

#### Returns

[`BusinessDataSocialMediaRedditLiveResultInfo`](BusinessDataSocialMediaRedditLiveResultInfo.md)

#### Defined in

main.ts:211770

## Properties

### page\_url

• `Optional` **page\_url**: `string`

URL of the page the data is provided for
corresponding URL you specified in the targets array when setting a task

#### Implementation of

[IBusinessDataSocialMediaRedditLiveResultInfo](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md).[page_url](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md#page_url)

#### Defined in

main.ts:211764

___

### reddit\_reviews

• `Optional` **reddit\_reviews**: [`RedditReviews`](RedditReviews.md)[]

reddit reviews for the page_url

#### Implementation of

[IBusinessDataSocialMediaRedditLiveResultInfo](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md).[reddit_reviews](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md#reddit_reviews)

#### Defined in

main.ts:211766

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IBusinessDataSocialMediaRedditLiveResultInfo](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md).[type](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md#type)

#### Defined in

main.ts:211761

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

main.ts:211779

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

main.ts:211802

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataSocialMediaRedditLiveResultInfo`](BusinessDataSocialMediaRedditLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataSocialMediaRedditLiveResultInfo`](BusinessDataSocialMediaRedditLiveResultInfo.md)

#### Defined in

main.ts:211795
