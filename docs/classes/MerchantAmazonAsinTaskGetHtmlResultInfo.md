**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantAmazonAsinTaskGetHtmlResultInfo

# Class: MerchantAmazonAsinTaskGetHtmlResultInfo

## Implements

- [`IMerchantAmazonAsinTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonAsinTaskGetHtmlResultInfo(data)

> **new MerchantAmazonAsinTaskGetHtmlResultInfo**(`data`?): [`MerchantAmazonAsinTaskGetHtmlResultInfo`](MerchantAmazonAsinTaskGetHtmlResultInfo.md)

#### Parameters

• **data?**: [`IMerchantAmazonAsinTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md)

#### Returns

[`MerchantAmazonAsinTaskGetHtmlResultInfo`](MerchantAmazonAsinTaskGetHtmlResultInfo.md)

#### Source

main.ts:181125

## Properties

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantAmazonAsinTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md#datetime)

#### Source

main.ts:181117

***

### items?

> **`optional`** **items**: [`HtmlItem`](HtmlItem.md)[]

HTML pages and related data

#### Implementation of

[`IMerchantAmazonAsinTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md).[`items`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md#items)

#### Source

main.ts:181121

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IMerchantAmazonAsinTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md#items_count)

#### Source

main.ts:181119

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IMerchantAmazonAsinTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md#language_code)

#### Source

main.ts:181112

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IMerchantAmazonAsinTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md#location_code)

#### Source

main.ts:181110

***

### product\_id?

> **`optional`** **product\_id**: `string`

ASIN received in a POST array

#### Implementation of

[`IMerchantAmazonAsinTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md).[`product_id`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md#product_id)

#### Source

main.ts:181104

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IMerchantAmazonAsinTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md#se_domain)

#### Source

main.ts:181108

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IMerchantAmazonAsinTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md).[`type`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md#type)

#### Source

main.ts:181106

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:181134

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:181162

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantAmazonAsinTaskGetHtmlResultInfo`](MerchantAmazonAsinTaskGetHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantAmazonAsinTaskGetHtmlResultInfo`](MerchantAmazonAsinTaskGetHtmlResultInfo.md)

#### Source

main.ts:181155
