**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataTrustpilotReviewsTaskGetResultInfo

# Class: BusinessDataTrustpilotReviewsTaskGetResultInfo

## Implements

- [`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTrustpilotReviewsTaskGetResultInfo(data)

> **new BusinessDataTrustpilotReviewsTaskGetResultInfo**(`data`?): [`BusinessDataTrustpilotReviewsTaskGetResultInfo`](BusinessDataTrustpilotReviewsTaskGetResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md)

#### Returns

[`BusinessDataTrustpilotReviewsTaskGetResultInfo`](BusinessDataTrustpilotReviewsTaskGetResultInfo.md)

#### Source

main.ts:214767

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[`check_url`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#check_url)

#### Source

main.ts:214741

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[`datetime`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#datetime)

#### Source

main.ts:214746

***

### domain?

> **`optional`** **domain**: `string`

domain of the business entity

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[`domain`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#domain)

#### Source

main.ts:214734

***

### items?

> **`optional`** **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[`items`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#items)

#### Source

main.ts:214763

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[`items_count`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#items_count)

#### Source

main.ts:214760

***

### location?

> **`optional`** **location**: `string`

location of the business entity as specified on Trustpilot
address of the business entity for which the reviews are collected

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[`location`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#location)

#### Source

main.ts:214752

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

rating of the corresponding business entity
popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[`rating`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#rating)

#### Source

main.ts:214757

***

### reviews\_count?

> **`optional`** **reviews\_count**: `number`

the total number of reviews

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[`reviews_count`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#reviews_count)

#### Source

main.ts:214754

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[`se_domain`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#se_domain)

#### Source

main.ts:214738

***

### title?

> **`optional`** **title**: `string`

title of the ‘reviews’ element on Trustpilot
the name of the business entity for which the reviews are collected

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[`title`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#title)

#### Source

main.ts:214749

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[`type`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#type)

#### Source

main.ts:214736

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:214776

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:214807

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataTrustpilotReviewsTaskGetResultInfo`](BusinessDataTrustpilotReviewsTaskGetResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataTrustpilotReviewsTaskGetResultInfo`](BusinessDataTrustpilotReviewsTaskGetResultInfo.md)

#### Source

main.ts:214800
