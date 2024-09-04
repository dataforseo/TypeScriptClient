[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataGoogleReviewsTaskGetResultInfo

# Class: BusinessDataGoogleReviewsTaskGetResultInfo

## Implements

- [`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleReviewsTaskGetResultInfo()

> **new BusinessDataGoogleReviewsTaskGetResultInfo**(`data`?): [`BusinessDataGoogleReviewsTaskGetResultInfo`](BusinessDataGoogleReviewsTaskGetResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md)

#### Returns

[`BusinessDataGoogleReviewsTaskGetResultInfo`](BusinessDataGoogleReviewsTaskGetResultInfo.md)

#### Defined in

main.ts:213423

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[`check_url`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#check_url)

#### Defined in

main.ts:213387

***

### cid?

> `optional` **cid**: `string`

google-defined client id
unique id of a local establishment
learn more about the identifier in this help center article

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[`cid`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#cid)

#### Defined in

main.ts:213411

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[`datetime`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#datetime)

#### Defined in

main.ts:213392

***

### feature\_id?

> `optional` **feature\_id**: `string`

the unique identifier of the ‘reviews’ element in SERP
learn more about the identifier in this help center article

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[`feature_id`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#feature_id)

#### Defined in

main.ts:213404

***

### items?

> `optional` **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[`items`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#items)

#### Defined in

main.ts:213419

***

### items\_count?

> `optional` **items\_count**: `number`

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[`items_count`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#items_count)

#### Defined in

main.ts:213416

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[`keyword`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#keyword)

#### Defined in

main.ts:213376

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#language_code)

#### Defined in

main.ts:213384

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#location_code)

#### Defined in

main.ts:213382

***

### place\_id?

> `optional` **place\_id**: `string`

unique identifier of a business location assigned by Google
learn more about the identifier in this help center article

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[`place_id`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#place_id)

#### Defined in

main.ts:213407

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

rating of the corresponding local establishment
popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[`rating`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#rating)

#### Defined in

main.ts:213401

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the total number of reviews

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[`reviews_count`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#reviews_count)

#### Defined in

main.ts:213413

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[`se_domain`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#se_domain)

#### Defined in

main.ts:213380

***

### sub\_title?

> `optional` **sub\_title**: `string`

subtitle of the ‘reviews’ element in SERP
additional information (e.g., address) on the ‘reviews’ element for which the reviews are collected

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[`sub_title`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#sub_title)

#### Defined in

main.ts:213398

***

### title?

> `optional` **title**: `string`

title of the ‘reviews’ element in SERP
the name of the local establishment for which the reviews are collected

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[`title`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#title)

#### Defined in

main.ts:213395

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[`type`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#type)

#### Defined in

main.ts:213378

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:213432

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:213468

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleReviewsTaskGetResultInfo`](BusinessDataGoogleReviewsTaskGetResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleReviewsTaskGetResultInfo`](BusinessDataGoogleReviewsTaskGetResultInfo.md)

#### Defined in

main.ts:213461
