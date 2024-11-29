[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonAsinTaskGetAdvancedResultInfo

# Class: MerchantAmazonAsinTaskGetAdvancedResultInfo

## Implements

- [`IMerchantAmazonAsinTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonAsinTaskGetAdvancedResultInfo()

> **new MerchantAmazonAsinTaskGetAdvancedResultInfo**(`data`?): [`MerchantAmazonAsinTaskGetAdvancedResultInfo`](MerchantAmazonAsinTaskGetAdvancedResultInfo.md)

#### Parameters

##### data?

[`IMerchantAmazonAsinTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md)

#### Returns

[`MerchantAmazonAsinTaskGetAdvancedResultInfo`](MerchantAmazonAsinTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:194713

## Properties

### asin?

> `optional` **asin**: `string`

ASIN received in a POST array
the unique product identifier in Amazon (ASIN) received in a POST array
learn more about the identified in this help center guide

#### Implementation of

[`IMerchantAmazonAsinTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md).[`asin`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#asin)

#### Defined in

main.ts:194684

***

### check\_url?

> `optional` **check\_url**: `string`

direct URL to Amazon results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IMerchantAmazonAsinTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:194695

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantAmazonAsinTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:194700

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results found on Amazon
contains types of all search results (items) found in the returned SERP
possible item types:
amazon_product_info

#### Implementation of

[`IMerchantAmazonAsinTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:194705

***

### items?

> `optional` **items**: [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)[]

Amazon product info items

#### Implementation of

[`IMerchantAmazonAsinTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:194709

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IMerchantAmazonAsinTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:194707

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IMerchantAmazonAsinTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:194692

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IMerchantAmazonAsinTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:194690

***

### se\_domain?

> `optional` **se\_domain**: `string`

Amazon domain in a POST array

#### Implementation of

[`IMerchantAmazonAsinTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:194688

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IMerchantAmazonAsinTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md).[`type`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#type)

#### Defined in

main.ts:194686

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:194722

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:194756

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonAsinTaskGetAdvancedResultInfo`](MerchantAmazonAsinTaskGetAdvancedResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`MerchantAmazonAsinTaskGetAdvancedResultInfo`](MerchantAmazonAsinTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:194749
