[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataTrustpilotReviewsTaskGetResultInfo

# Class: BusinessDataTrustpilotReviewsTaskGetResultInfo

Defined in: main.ts:226906

## Implements

- [`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTrustpilotReviewsTaskGetResultInfo()

> **new BusinessDataTrustpilotReviewsTaskGetResultInfo**(`data`?): [`BusinessDataTrustpilotReviewsTaskGetResultInfo`](BusinessDataTrustpilotReviewsTaskGetResultInfo.md)

Defined in: main.ts:226941

#### Parameters

##### data?

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md)

#### Returns

[`BusinessDataTrustpilotReviewsTaskGetResultInfo`](BusinessDataTrustpilotReviewsTaskGetResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:226915

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[`check_url`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:226920

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[`datetime`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#datetime)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:226908

domain of the business entity

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[`domain`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#domain)

***

### items?

> `optional` **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

Defined in: main.ts:226937

found reviews
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[`items`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:226934

the number of items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[`items_count`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#items_count)

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:226926

location of the business entity as specified on Trustpilot
address of the business entity for which the reviews are collected

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[`location`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#location)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:226931

rating of the corresponding business entity
popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[`rating`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#rating)

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:226928

the total number of reviews

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[`reviews_count`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#reviews_count)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:226912

search engine domain in a POST array

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[`se_domain`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#se_domain)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:226923

title of the ‘reviews’ element on Trustpilot
the name of the business entity for which the reviews are collected

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[`title`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:226910

type of element

#### Implementation of

[`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[`type`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:226950

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:226981

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTrustpilotReviewsTaskGetResultInfo`](BusinessDataTrustpilotReviewsTaskGetResultInfo.md)

Defined in: main.ts:226974

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataTrustpilotReviewsTaskGetResultInfo`](BusinessDataTrustpilotReviewsTaskGetResultInfo.md)
