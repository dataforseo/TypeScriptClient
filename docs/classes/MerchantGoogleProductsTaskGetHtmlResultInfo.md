[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / MerchantGoogleProductsTaskGetHtmlResultInfo

# Class: MerchantGoogleProductsTaskGetHtmlResultInfo

## Implements

- [`IMerchantGoogleProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleProductsTaskGetHtmlResultInfo()

> **new MerchantGoogleProductsTaskGetHtmlResultInfo**(`data`?): [`MerchantGoogleProductsTaskGetHtmlResultInfo`](MerchantGoogleProductsTaskGetHtmlResultInfo.md)

#### Parameters

• **data?**: [`IMerchantGoogleProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md)

#### Returns

[`MerchantGoogleProductsTaskGetHtmlResultInfo`](MerchantGoogleProductsTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:175359

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantGoogleProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md#datetime)

#### Defined in

main.ts:175351

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found on Google Shopping

#### Implementation of

[`IMerchantGoogleProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md).[`items`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md#items)

#### Defined in

main.ts:175355

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IMerchantGoogleProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md#items_count)

#### Defined in

main.ts:175353

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`IMerchantGoogleProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md#keyword)

#### Defined in

main.ts:175338

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IMerchantGoogleProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md#language_code)

#### Defined in

main.ts:175346

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IMerchantGoogleProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md#location_code)

#### Defined in

main.ts:175344

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IMerchantGoogleProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:175342

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IMerchantGoogleProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md).[`type`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md#type)

#### Defined in

main.ts:175340

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:175368

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:175396

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantGoogleProductsTaskGetHtmlResultInfo`](MerchantGoogleProductsTaskGetHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantGoogleProductsTaskGetHtmlResultInfo`](MerchantGoogleProductsTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:175389
