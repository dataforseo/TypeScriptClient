[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataTripadvisorReviewsTaskGetResultInfo

# Class: BusinessDataTripadvisorReviewsTaskGetResultInfo

Defined in: main.ts:229362

## Implements

- [`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTripadvisorReviewsTaskGetResultInfo()

> **new BusinessDataTripadvisorReviewsTaskGetResultInfo**(`data`?): [`BusinessDataTripadvisorReviewsTaskGetResultInfo`](BusinessDataTripadvisorReviewsTaskGetResultInfo.md)

Defined in: main.ts:229402

#### Parameters

##### data?

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md)

#### Returns

[`BusinessDataTripadvisorReviewsTaskGetResultInfo`](BusinessDataTripadvisorReviewsTaskGetResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:229371

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`check_url`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:229376

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`datetime`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

Defined in: main.ts:229396

found reviews
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`items`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:229393

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`items_count`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:229398

language code in a POST array

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`language_code`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#language_code)

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:229382

location of the local establishment
address of the local establishment for which the reviews are collected

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`location`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#location)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:229387

rating of the corresponding local establishment
popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`rating`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#rating)

***

### rating\_distribution?

> `optional` **rating\_distribution**: `object`

Defined in: main.ts:229390

rating distribution by votes
the distribution of votes across the rating in the range from 1 to 5

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`rating_distribution`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#rating_distribution)

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:229384

the total number of reviews

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`reviews_count`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#reviews_count)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:229368

search engine domain in a POST array

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`se_domain`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#se_domain)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:229379

title of the ‘reviews’ element in SERP
the name of the local establishment for which the reviews are collected

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`title`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:229366

type of element

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`type`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#type)

***

### url\_path?

> `optional` **url\_path**: `string`

Defined in: main.ts:229364

URL path received in a POST array

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`url_path`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#url_path)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:229411

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:229450

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTripadvisorReviewsTaskGetResultInfo`](BusinessDataTripadvisorReviewsTaskGetResultInfo.md)

Defined in: main.ts:229443

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataTripadvisorReviewsTaskGetResultInfo`](BusinessDataTripadvisorReviewsTaskGetResultInfo.md)
