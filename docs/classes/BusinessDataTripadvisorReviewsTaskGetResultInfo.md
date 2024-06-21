**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataTripadvisorReviewsTaskGetResultInfo

# Class: BusinessDataTripadvisorReviewsTaskGetResultInfo

## Implements

- [`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTripadvisorReviewsTaskGetResultInfo(data)

> **new BusinessDataTripadvisorReviewsTaskGetResultInfo**(`data`?): [`BusinessDataTripadvisorReviewsTaskGetResultInfo`](BusinessDataTripadvisorReviewsTaskGetResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md)

#### Returns

[`BusinessDataTripadvisorReviewsTaskGetResultInfo`](BusinessDataTripadvisorReviewsTaskGetResultInfo.md)

#### Source

main.ts:213763

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`check_url`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#check_url)

#### Source

main.ts:213732

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`datetime`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#datetime)

#### Source

main.ts:213737

***

### items?

> **`optional`** **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`items`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#items)

#### Source

main.ts:213757

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`items_count`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#items_count)

#### Source

main.ts:213754

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`language_code`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#language_code)

#### Source

main.ts:213759

***

### location?

> **`optional`** **location**: `string`

location of the local establishment
address of the local establishment for which the reviews are collected

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`location`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#location)

#### Source

main.ts:213743

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

rating of the corresponding local establishment
popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`rating`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#rating)

#### Source

main.ts:213748

***

### rating\_distribution?

> **`optional`** **rating\_distribution**: `Object`

rating distribution by votes
the distribution of votes across the rating in the range from 1 to 5

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`rating_distribution`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#rating_distribution)

#### Source

main.ts:213751

***

### reviews\_count?

> **`optional`** **reviews\_count**: `number`

the total number of reviews

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`reviews_count`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#reviews_count)

#### Source

main.ts:213745

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`se_domain`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#se_domain)

#### Source

main.ts:213729

***

### title?

> **`optional`** **title**: `string`

title of the ‘reviews’ element in SERP
the name of the local establishment for which the reviews are collected

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`title`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#title)

#### Source

main.ts:213740

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`type`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#type)

#### Source

main.ts:213727

***

### url\_path?

> **`optional`** **url\_path**: `string`

URL path received in a POST array

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[`url_path`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#url_path)

#### Source

main.ts:213725

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:213772

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:213811

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataTripadvisorReviewsTaskGetResultInfo`](BusinessDataTripadvisorReviewsTaskGetResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataTripadvisorReviewsTaskGetResultInfo`](BusinessDataTripadvisorReviewsTaskGetResultInfo.md)

#### Source

main.ts:213804
