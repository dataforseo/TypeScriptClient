**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataYelpReviewsTaskGetResultInfo

# Class: BusinessDataYelpReviewsTaskGetResultInfo

## Implements

- [`IBusinessDataYelpReviewsTaskGetResultInfo`](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataYelpReviewsTaskGetResultInfo(data)

> **new BusinessDataYelpReviewsTaskGetResultInfo**(`data`?): [`BusinessDataYelpReviewsTaskGetResultInfo`](BusinessDataYelpReviewsTaskGetResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataYelpReviewsTaskGetResultInfo`](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md)

#### Returns

[`BusinessDataYelpReviewsTaskGetResultInfo`](BusinessDataYelpReviewsTaskGetResultInfo.md)

#### Source

main.ts:214749

## Properties

### alias?

> **`optional`** **alias**: `string`

Yelp business identifier

#### Implementation of

[`IBusinessDataYelpReviewsTaskGetResultInfo`](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md).[`alias`](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md#alias)

#### Source

main.ts:214715

***

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to Yelp results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataYelpReviewsTaskGetResultInfo`](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md).[`check_url`](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md#check_url)

#### Source

main.ts:214727

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataYelpReviewsTaskGetResultInfo`](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md).[`datetime`](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md#datetime)

#### Source

main.ts:214732

***

### items?

> **`optional`** **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IBusinessDataYelpReviewsTaskGetResultInfo`](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md).[`items`](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md#items)

#### Source

main.ts:214745

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IBusinessDataYelpReviewsTaskGetResultInfo`](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md).[`items_count`](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md#items_count)

#### Source

main.ts:214742

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
this field will contain the alias parameter if it was specified in a POST array

#### Implementation of

[`IBusinessDataYelpReviewsTaskGetResultInfo`](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md).[`keyword`](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md#keyword)

#### Source

main.ts:214713

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IBusinessDataYelpReviewsTaskGetResultInfo`](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md).[`language_code`](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md#language_code)

#### Source

main.ts:214724

***

### location\_code?

> **`optional`** **location\_code**: `string`

location code in a POST array
if location_code was not specified in a POST array, the value equals null

#### Implementation of

[`IBusinessDataYelpReviewsTaskGetResultInfo`](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md).[`location_code`](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md#location_code)

#### Source

main.ts:214722

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

the rating score submitted by the reviewer

#### Implementation of

[`IBusinessDataYelpReviewsTaskGetResultInfo`](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md).[`rating`](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md#rating)

#### Source

main.ts:214737

***

### reviews\_count?

> **`optional`** **reviews\_count**: `number`

the total number of reviews

#### Implementation of

[`IBusinessDataYelpReviewsTaskGetResultInfo`](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md).[`reviews_count`](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md#reviews_count)

#### Source

main.ts:214739

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IBusinessDataYelpReviewsTaskGetResultInfo`](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md).[`se_domain`](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md#se_domain)

#### Source

main.ts:214719

***

### title?

> **`optional`** **title**: `string`

title of the reviews from Yelp
the name of the local establishment for which the reviews are collected

#### Implementation of

[`IBusinessDataYelpReviewsTaskGetResultInfo`](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md).[`title`](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md#title)

#### Source

main.ts:214735

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IBusinessDataYelpReviewsTaskGetResultInfo`](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md).[`type`](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md#type)

#### Source

main.ts:214717

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:214758

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:214791

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataYelpReviewsTaskGetResultInfo`](BusinessDataYelpReviewsTaskGetResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataYelpReviewsTaskGetResultInfo`](BusinessDataYelpReviewsTaskGetResultInfo.md)

#### Source

main.ts:214784
