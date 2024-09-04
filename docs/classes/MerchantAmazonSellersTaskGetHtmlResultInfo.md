[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / MerchantAmazonSellersTaskGetHtmlResultInfo

# Class: MerchantAmazonSellersTaskGetHtmlResultInfo

## Implements

- [`IMerchantAmazonSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonSellersTaskGetHtmlResultInfo()

> **new MerchantAmazonSellersTaskGetHtmlResultInfo**(`data`?): [`MerchantAmazonSellersTaskGetHtmlResultInfo`](MerchantAmazonSellersTaskGetHtmlResultInfo.md)

#### Parameters

• **data?**: [`IMerchantAmazonSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md)

#### Returns

[`MerchantAmazonSellersTaskGetHtmlResultInfo`](MerchantAmazonSellersTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:184076

## Properties

### asin?

> `optional` **asin**: `string`

ASIN received in a POST array

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md).[`asin`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md#asin)

#### Defined in

main.ts:184055

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md#datetime)

#### Defined in

main.ts:184068

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found on Amazon

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md).[`items`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md#items)

#### Defined in

main.ts:184072

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md#items_count)

#### Defined in

main.ts:184070

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md#language_code)

#### Defined in

main.ts:184063

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md#location_code)

#### Defined in

main.ts:184061

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:184059

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md).[`type`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md#type)

#### Defined in

main.ts:184057

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:184085

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:184113

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonSellersTaskGetHtmlResultInfo`](MerchantAmazonSellersTaskGetHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantAmazonSellersTaskGetHtmlResultInfo`](MerchantAmazonSellersTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:184106
