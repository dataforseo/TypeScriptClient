[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonSellersTaskGetAdvancedResultInfo

# Class: MerchantAmazonSellersTaskGetAdvancedResultInfo

Defined in: main.ts:196204

## Implements

- [`IMerchantAmazonSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonSellersTaskGetAdvancedResultInfo()

> **new MerchantAmazonSellersTaskGetAdvancedResultInfo**(`data`?): [`MerchantAmazonSellersTaskGetAdvancedResultInfo`](MerchantAmazonSellersTaskGetAdvancedResultInfo.md)

Defined in: main.ts:196242

#### Parameters

##### data?

[`IMerchantAmazonSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md)

#### Returns

[`MerchantAmazonSellersTaskGetAdvancedResultInfo`](MerchantAmazonSellersTaskGetAdvancedResultInfo.md)

## Properties

### asin?

> `optional` **asin**: `string`

Defined in: main.ts:196207

asin received in a POST array
learn more about ASINs in this help center guide

#### Implementation of

[`IMerchantAmazonSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[`asin`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#asin)

***

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:196218

direct URL to Amazon results
you can use it to make sure the provided results are accurate

#### Implementation of

[`IMerchantAmazonSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:196223

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantAmazonSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#datetime)

***

### image?

> `optional` **image**: `string`

Defined in: main.ts:196229

product image url
image URL of the product relevant to the asin received in a POST array

#### Implementation of

[`IMerchantAmazonSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[`image`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#image)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:196234

types of search results found in Amazon Sellers SERP
contains types of all search results (items) found in the returned SERP
possible item types:
amazon_seller_main_item, amazon_seller_item

#### Implementation of

[`IMerchantAmazonSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)[]

Defined in: main.ts:196238

items in SERP

#### Implementation of

[`IMerchantAmazonSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:196236

the number of results returned in the items array

#### Implementation of

[`IMerchantAmazonSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:196215

language code received in a POST array

#### Implementation of

[`IMerchantAmazonSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:196213

location code received in a POST array

#### Implementation of

[`IMerchantAmazonSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:196211

search engine domain received in a POST array

#### Implementation of

[`IMerchantAmazonSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#se_domain)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:196226

product title
title of the product relevant to the asin received in a POST array

#### Implementation of

[`IMerchantAmazonSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[`title`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:196209

type of element

#### Implementation of

[`IMerchantAmazonSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[`type`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:196251

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:196287

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonSellersTaskGetAdvancedResultInfo`](MerchantAmazonSellersTaskGetAdvancedResultInfo.md)

Defined in: main.ts:196280

#### Parameters

##### data

`any`

#### Returns

[`MerchantAmazonSellersTaskGetAdvancedResultInfo`](MerchantAmazonSellersTaskGetAdvancedResultInfo.md)
