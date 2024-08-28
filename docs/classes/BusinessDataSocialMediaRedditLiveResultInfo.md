[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / BusinessDataSocialMediaRedditLiveResultInfo

# Class: BusinessDataSocialMediaRedditLiveResultInfo

## Implements

- [`IBusinessDataSocialMediaRedditLiveResultInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataSocialMediaRedditLiveResultInfo()

> **new BusinessDataSocialMediaRedditLiveResultInfo**(`data`?): [`BusinessDataSocialMediaRedditLiveResultInfo`](BusinessDataSocialMediaRedditLiveResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataSocialMediaRedditLiveResultInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md)

#### Returns

[`BusinessDataSocialMediaRedditLiveResultInfo`](BusinessDataSocialMediaRedditLiveResultInfo.md)

#### Defined in

main.ts:220017

## Properties

### page\_url?

> `optional` **page\_url**: `string`

URL of the page the data is provided for
corresponding URL you specified in the targets array when setting a task

#### Implementation of

[`IBusinessDataSocialMediaRedditLiveResultInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md).[`page_url`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md#page_url)

#### Defined in

main.ts:220011

***

### reddit\_reviews?

> `optional` **reddit\_reviews**: [`RedditReviews`](RedditReviews.md)[]

reddit reviews for the page_url

#### Implementation of

[`IBusinessDataSocialMediaRedditLiveResultInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md).[`reddit_reviews`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md#reddit_reviews)

#### Defined in

main.ts:220013

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBusinessDataSocialMediaRedditLiveResultInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md).[`type`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md#type)

#### Defined in

main.ts:220008

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:220026

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:220049

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataSocialMediaRedditLiveResultInfo`](BusinessDataSocialMediaRedditLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataSocialMediaRedditLiveResultInfo`](BusinessDataSocialMediaRedditLiveResultInfo.md)

#### Defined in

main.ts:220042
