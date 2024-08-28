[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / BusinessDataTrustpilotReviewsTaskGetResultInfo

# Class: BusinessDataTrustpilotReviewsTaskGetResultInfo

## Implements

- [`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTrustpilotReviewsTaskGetResultInfo()

> **new BusinessDataTrustpilotReviewsTaskGetResultInfo**(`data`?): [`BusinessDataTrustpilotReviewsTaskGetResultInfo`](BusinessDataTrustpilotReviewsTaskGetResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md)

#### Returns

[`BusinessDataTrustpilotReviewsTaskGetResultInfo`](BusinessDataTrustpilotReviewsTaskGetResultInfo.md)

#### Defined in

main.ts:216617

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[`check_url`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#check_url)

#### Defined in

main.ts:216591

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[`datetime`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#datetime)

#### Defined in

main.ts:216596

***

### domain?

> `optional` **domain**: `string`

domain of the business entity

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[`domain`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#domain)

#### Defined in

main.ts:216584

***

### items?

> `optional` **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[`items`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#items)

#### Defined in

main.ts:216613

***

### items\_count?

> `optional` **items\_count**: `number`

the number of items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[`items_count`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#items_count)

#### Defined in

main.ts:216610

***

### location?

> `optional` **location**: `string`

location of the business entity as specified on Trustpilot
address of the business entity for which the reviews are collected

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[`location`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#location)

#### Defined in

main.ts:216602

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

rating of the corresponding business entity
popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[`rating`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#rating)

#### Defined in

main.ts:216607

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the total number of reviews

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[`reviews_count`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#reviews_count)

#### Defined in

main.ts:216604

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[`se_domain`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#se_domain)

#### Defined in

main.ts:216588

***

### title?

> `optional` **title**: `string`

title of the ‘reviews’ element on Trustpilot
the name of the business entity for which the reviews are collected

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[`title`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#title)

#### Defined in

main.ts:216599

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[`type`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#type)

#### Defined in

main.ts:216586

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:216626

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:216657

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTrustpilotReviewsTaskGetResultInfo`](BusinessDataTrustpilotReviewsTaskGetResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataTrustpilotReviewsTaskGetResultInfo`](BusinessDataTrustpilotReviewsTaskGetResultInfo.md)

#### Defined in

main.ts:216650
