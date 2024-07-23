**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantAmazonSellersTaskGetAdvancedResultInfo

# Class: MerchantAmazonSellersTaskGetAdvancedResultInfo

## Implements

- [`IMerchantAmazonSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonSellersTaskGetAdvancedResultInfo(data)

> **new MerchantAmazonSellersTaskGetAdvancedResultInfo**(`data`?): [`MerchantAmazonSellersTaskGetAdvancedResultInfo`](MerchantAmazonSellersTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`IMerchantAmazonSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md)

#### Returns

[`MerchantAmazonSellersTaskGetAdvancedResultInfo`](MerchantAmazonSellersTaskGetAdvancedResultInfo.md)

#### Source

main.ts:186447

## Properties

### asin?

> **`optional`** **asin**: `string`

asin received in a POST array
learn more about ASINs in this help center guide

#### Implementation of

[`IMerchantAmazonSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[`asin`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#asin)

#### Source

main.ts:186412

***

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to Amazon results
you can use it to make sure the provided results are accurate

#### Implementation of

[`IMerchantAmazonSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#check_url)

#### Source

main.ts:186423

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantAmazonSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#datetime)

#### Source

main.ts:186428

***

### image?

> **`optional`** **image**: `string`

product image url
image URL of the product relevant to the asin received in a POST array

#### Implementation of

[`IMerchantAmazonSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[`image`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#image)

#### Source

main.ts:186434

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results found in Amazon Sellers SERP
contains types of all search results (items) found in the returned SERP
possible item types:
amazon_seller_main_item, amazon_seller_item

#### Implementation of

[`IMerchantAmazonSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#item_types)

#### Source

main.ts:186439

***

### items?

> **`optional`** **items**: [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)[]

items in SERP

#### Implementation of

[`IMerchantAmazonSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#items)

#### Source

main.ts:186443

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IMerchantAmazonSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#items_count)

#### Source

main.ts:186441

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code received in a POST array

#### Implementation of

[`IMerchantAmazonSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#language_code)

#### Source

main.ts:186420

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code received in a POST array

#### Implementation of

[`IMerchantAmazonSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#location_code)

#### Source

main.ts:186418

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain received in a POST array

#### Implementation of

[`IMerchantAmazonSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#se_domain)

#### Source

main.ts:186416

***

### title?

> **`optional`** **title**: `string`

product title
title of the product relevant to the asin received in a POST array

#### Implementation of

[`IMerchantAmazonSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[`title`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#title)

#### Source

main.ts:186431

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IMerchantAmazonSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[`type`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#type)

#### Source

main.ts:186414

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:186456

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:186492

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantAmazonSellersTaskGetAdvancedResultInfo`](MerchantAmazonSellersTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantAmazonSellersTaskGetAdvancedResultInfo`](MerchantAmazonSellersTaskGetAdvancedResultInfo.md)

#### Source

main.ts:186485
