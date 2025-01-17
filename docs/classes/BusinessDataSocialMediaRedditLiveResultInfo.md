[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataSocialMediaRedditLiveResultInfo

# Class: BusinessDataSocialMediaRedditLiveResultInfo

Defined in: main.ts:230310

## Implements

- [`IBusinessDataSocialMediaRedditLiveResultInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataSocialMediaRedditLiveResultInfo()

> **new BusinessDataSocialMediaRedditLiveResultInfo**(`data`?): [`BusinessDataSocialMediaRedditLiveResultInfo`](BusinessDataSocialMediaRedditLiveResultInfo.md)

Defined in: main.ts:230321

#### Parameters

##### data?

[`IBusinessDataSocialMediaRedditLiveResultInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md)

#### Returns

[`BusinessDataSocialMediaRedditLiveResultInfo`](BusinessDataSocialMediaRedditLiveResultInfo.md)

## Properties

### page\_url?

> `optional` **page\_url**: `string`

Defined in: main.ts:230315

URL of the page the data is provided for
corresponding URL you specified in the targets array when setting a task

#### Implementation of

[`IBusinessDataSocialMediaRedditLiveResultInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md).[`page_url`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md#page_url)

***

### reddit\_reviews?

> `optional` **reddit\_reviews**: [`RedditReviews`](RedditReviews.md)[]

Defined in: main.ts:230317

reddit reviews for the page_url

#### Implementation of

[`IBusinessDataSocialMediaRedditLiveResultInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md).[`reddit_reviews`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md#reddit_reviews)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:230312

type of element

#### Implementation of

[`IBusinessDataSocialMediaRedditLiveResultInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md).[`type`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:230330

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:230353

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataSocialMediaRedditLiveResultInfo`](BusinessDataSocialMediaRedditLiveResultInfo.md)

Defined in: main.ts:230346

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataSocialMediaRedditLiveResultInfo`](BusinessDataSocialMediaRedditLiveResultInfo.md)
