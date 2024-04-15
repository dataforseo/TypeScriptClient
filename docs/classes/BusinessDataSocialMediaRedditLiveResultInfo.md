**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataSocialMediaRedditLiveResultInfo

# Class: BusinessDataSocialMediaRedditLiveResultInfo

## Implements

- [`IBusinessDataSocialMediaRedditLiveResultInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataSocialMediaRedditLiveResultInfo(data)

> **new BusinessDataSocialMediaRedditLiveResultInfo**(`data`?): [`BusinessDataSocialMediaRedditLiveResultInfo`](BusinessDataSocialMediaRedditLiveResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataSocialMediaRedditLiveResultInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md)

#### Returns

[`BusinessDataSocialMediaRedditLiveResultInfo`](BusinessDataSocialMediaRedditLiveResultInfo.md)

#### Source

main.ts:211920

## Properties

### page\_url?

> **`optional`** **page\_url**: `string`

URL of the page the data is provided for
corresponding URL you specified in the targets array when setting a task

#### Implementation of

[`IBusinessDataSocialMediaRedditLiveResultInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md).[`page_url`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md#page_url)

#### Source

main.ts:211914

***

### reddit\_reviews?

> **`optional`** **reddit\_reviews**: [`RedditReviews`](RedditReviews.md)[]

reddit reviews for the page_url

#### Implementation of

[`IBusinessDataSocialMediaRedditLiveResultInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md).[`reddit_reviews`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md#reddit_reviews)

#### Source

main.ts:211916

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IBusinessDataSocialMediaRedditLiveResultInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md).[`type`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md#type)

#### Source

main.ts:211911

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:211929

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:211952

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataSocialMediaRedditLiveResultInfo`](BusinessDataSocialMediaRedditLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataSocialMediaRedditLiveResultInfo`](BusinessDataSocialMediaRedditLiveResultInfo.md)

#### Source

main.ts:211945
