**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantAmazonSellersTaskGetHtmlResultInfo

# Class: MerchantAmazonSellersTaskGetHtmlResultInfo

## Implements

- [`IMerchantAmazonSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonSellersTaskGetHtmlResultInfo(data)

> **new MerchantAmazonSellersTaskGetHtmlResultInfo**(`data`?): [`MerchantAmazonSellersTaskGetHtmlResultInfo`](MerchantAmazonSellersTaskGetHtmlResultInfo.md)

#### Parameters

• **data?**: [`IMerchantAmazonSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md)

#### Returns

[`MerchantAmazonSellersTaskGetHtmlResultInfo`](MerchantAmazonSellersTaskGetHtmlResultInfo.md)

#### Source

main.ts:182421

## Properties

### asin?

> **`optional`** **asin**: `string`

ASIN received in a POST array

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md).[`asin`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md#asin)

#### Source

main.ts:182400

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md#datetime)

#### Source

main.ts:182413

***

### items?

> **`optional`** **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found on Amazon

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md).[`items`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md#items)

#### Source

main.ts:182417

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md#items_count)

#### Source

main.ts:182415

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md#language_code)

#### Source

main.ts:182408

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md#location_code)

#### Source

main.ts:182406

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md#se_domain)

#### Source

main.ts:182404

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md).[`type`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md#type)

#### Source

main.ts:182402

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:182430

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:182458

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantAmazonSellersTaskGetHtmlResultInfo`](MerchantAmazonSellersTaskGetHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantAmazonSellersTaskGetHtmlResultInfo`](MerchantAmazonSellersTaskGetHtmlResultInfo.md)

#### Source

main.ts:182451
