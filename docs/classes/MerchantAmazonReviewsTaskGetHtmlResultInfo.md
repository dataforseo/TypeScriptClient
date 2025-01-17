[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonReviewsTaskGetHtmlResultInfo

# Class: MerchantAmazonReviewsTaskGetHtmlResultInfo

Defined in: main.ts:197650

## Implements

- [`IMerchantAmazonReviewsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonReviewsTaskGetHtmlResultInfo()

> **new MerchantAmazonReviewsTaskGetHtmlResultInfo**(`data`?): [`MerchantAmazonReviewsTaskGetHtmlResultInfo`](MerchantAmazonReviewsTaskGetHtmlResultInfo.md)

Defined in: main.ts:197673

#### Parameters

##### data?

[`IMerchantAmazonReviewsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md)

#### Returns

[`MerchantAmazonReviewsTaskGetHtmlResultInfo`](MerchantAmazonReviewsTaskGetHtmlResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:197665

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantAmazonReviewsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:197669

HTML pages and related data

#### Implementation of

[`IMerchantAmazonReviewsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md).[`items`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:197667

the number of results returned in the items array

#### Implementation of

[`IMerchantAmazonReviewsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:197660

language code in a POST array

#### Implementation of

[`IMerchantAmazonReviewsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:197658

location code in a POST array

#### Implementation of

[`IMerchantAmazonReviewsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#location_code)

***

### product\_id?

> `optional` **product\_id**: `string`

Defined in: main.ts:197652

ASIN received in a POST array

#### Implementation of

[`IMerchantAmazonReviewsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md).[`product_id`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#product_id)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:197656

search engine domain in a POST array

#### Implementation of

[`IMerchantAmazonReviewsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:197654

type of element

#### Implementation of

[`IMerchantAmazonReviewsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md).[`type`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:197682

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:197710

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonReviewsTaskGetHtmlResultInfo`](MerchantAmazonReviewsTaskGetHtmlResultInfo.md)

Defined in: main.ts:197703

#### Parameters

##### data

`any`

#### Returns

[`MerchantAmazonReviewsTaskGetHtmlResultInfo`](MerchantAmazonReviewsTaskGetHtmlResultInfo.md)
