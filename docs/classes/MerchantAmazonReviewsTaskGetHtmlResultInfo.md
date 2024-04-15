**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantAmazonReviewsTaskGetHtmlResultInfo

# Class: MerchantAmazonReviewsTaskGetHtmlResultInfo

## Implements

- [`IMerchantAmazonReviewsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonReviewsTaskGetHtmlResultInfo(data)

> **new MerchantAmazonReviewsTaskGetHtmlResultInfo**(`data`?): [`MerchantAmazonReviewsTaskGetHtmlResultInfo`](MerchantAmazonReviewsTaskGetHtmlResultInfo.md)

#### Parameters

• **data?**: [`IMerchantAmazonReviewsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md)

#### Returns

[`MerchantAmazonReviewsTaskGetHtmlResultInfo`](MerchantAmazonReviewsTaskGetHtmlResultInfo.md)

#### Source

main.ts:181686

## Properties

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantAmazonReviewsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#datetime)

#### Source

main.ts:181678

***

### items?

> **`optional`** **items**: [`HtmlItem`](HtmlItem.md)[]

HTML pages and related data

#### Implementation of

[`IMerchantAmazonReviewsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md).[`items`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#items)

#### Source

main.ts:181682

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IMerchantAmazonReviewsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#items_count)

#### Source

main.ts:181680

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IMerchantAmazonReviewsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#language_code)

#### Source

main.ts:181673

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IMerchantAmazonReviewsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#location_code)

#### Source

main.ts:181671

***

### product\_id?

> **`optional`** **product\_id**: `string`

ASIN received in a POST array

#### Implementation of

[`IMerchantAmazonReviewsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md).[`product_id`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#product_id)

#### Source

main.ts:181665

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IMerchantAmazonReviewsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#se_domain)

#### Source

main.ts:181669

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IMerchantAmazonReviewsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md).[`type`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResultInfo.md#type)

#### Source

main.ts:181667

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:181695

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:181723

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantAmazonReviewsTaskGetHtmlResultInfo`](MerchantAmazonReviewsTaskGetHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantAmazonReviewsTaskGetHtmlResultInfo`](MerchantAmazonReviewsTaskGetHtmlResultInfo.md)

#### Source

main.ts:181716
