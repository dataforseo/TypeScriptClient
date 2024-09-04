[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataTripadvisorReviewsTaskGetResultInfo

# Class: BusinessDataTripadvisorReviewsTaskGetResultInfo

## Implements

- [`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTripadvisorReviewsTaskGetResultInfo()

> **new BusinessDataTripadvisorReviewsTaskGetResultInfo**(`data`?): [`BusinessDataTripadvisorReviewsTaskGetResultInfo`](BusinessDataTripadvisorReviewsTaskGetResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md)

#### Returns

[`BusinessDataTripadvisorReviewsTaskGetResultInfo`](BusinessDataTripadvisorReviewsTaskGetResultInfo.md)

#### Defined in

main.ts:219098

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`check_url`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#check_url)

#### Defined in

main.ts:219067

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`datetime`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#datetime)

#### Defined in

main.ts:219072

***

### items?

> `optional` **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`items`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#items)

#### Defined in

main.ts:219092

***

### items\_count?

> `optional` **items\_count**: `number`

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`items_count`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#items_count)

#### Defined in

main.ts:219089

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`language_code`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#language_code)

#### Defined in

main.ts:219094

***

### location?

> `optional` **location**: `string`

location of the local establishment
address of the local establishment for which the reviews are collected

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`location`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#location)

#### Defined in

main.ts:219078

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

rating of the corresponding local establishment
popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`rating`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#rating)

#### Defined in

main.ts:219083

***

### rating\_distribution?

> `optional` **rating\_distribution**: `object`

rating distribution by votes
the distribution of votes across the rating in the range from 1 to 5

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`rating_distribution`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#rating_distribution)

#### Defined in

main.ts:219086

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the total number of reviews

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`reviews_count`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#reviews_count)

#### Defined in

main.ts:219080

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`se_domain`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#se_domain)

#### Defined in

main.ts:219064

***

### title?

> `optional` **title**: `string`

title of the ‘reviews’ element in SERP
the name of the local establishment for which the reviews are collected

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`title`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#title)

#### Defined in

main.ts:219075

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`type`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#type)

#### Defined in

main.ts:219062

***

### url\_path?

> `optional` **url\_path**: `string`

URL path received in a POST array

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`url_path`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#url_path)

#### Defined in

main.ts:219060

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:219107

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:219146

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTripadvisorReviewsTaskGetResultInfo`](BusinessDataTripadvisorReviewsTaskGetResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataTripadvisorReviewsTaskGetResultInfo`](BusinessDataTripadvisorReviewsTaskGetResultInfo.md)

#### Defined in

main.ts:219139
