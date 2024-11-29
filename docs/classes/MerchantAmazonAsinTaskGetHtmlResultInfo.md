[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonAsinTaskGetHtmlResultInfo

# Class: MerchantAmazonAsinTaskGetHtmlResultInfo

## Implements

- [`IMerchantAmazonAsinTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonAsinTaskGetHtmlResultInfo()

> **new MerchantAmazonAsinTaskGetHtmlResultInfo**(`data`?): [`MerchantAmazonAsinTaskGetHtmlResultInfo`](MerchantAmazonAsinTaskGetHtmlResultInfo.md)

#### Parameters

##### data?

[`IMerchantAmazonAsinTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md)

#### Returns

[`MerchantAmazonAsinTaskGetHtmlResultInfo`](MerchantAmazonAsinTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:195165

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantAmazonAsinTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md#datetime)

#### Defined in

main.ts:195157

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

HTML pages and related data

#### Implementation of

[`IMerchantAmazonAsinTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md).[`items`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md#items)

#### Defined in

main.ts:195161

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IMerchantAmazonAsinTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md#items_count)

#### Defined in

main.ts:195159

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IMerchantAmazonAsinTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md#language_code)

#### Defined in

main.ts:195152

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IMerchantAmazonAsinTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md#location_code)

#### Defined in

main.ts:195150

***

### product\_id?

> `optional` **product\_id**: `string`

ASIN received in a POST array

#### Implementation of

[`IMerchantAmazonAsinTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md).[`product_id`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md#product_id)

#### Defined in

main.ts:195144

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IMerchantAmazonAsinTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:195148

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IMerchantAmazonAsinTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md).[`type`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResultInfo.md#type)

#### Defined in

main.ts:195146

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:195174

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:195202

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonAsinTaskGetHtmlResultInfo`](MerchantAmazonAsinTaskGetHtmlResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`MerchantAmazonAsinTaskGetHtmlResultInfo`](MerchantAmazonAsinTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:195195
