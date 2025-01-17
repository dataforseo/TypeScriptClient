[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonProductsTaskGetHtmlResultInfo

# Class: MerchantAmazonProductsTaskGetHtmlResultInfo

Defined in: main.ts:193238

## Implements

- [`IMerchantAmazonProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonProductsTaskGetHtmlResultInfo()

> **new MerchantAmazonProductsTaskGetHtmlResultInfo**(`data`?): [`MerchantAmazonProductsTaskGetHtmlResultInfo`](MerchantAmazonProductsTaskGetHtmlResultInfo.md)

Defined in: main.ts:193262

#### Parameters

##### data?

[`IMerchantAmazonProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md)

#### Returns

[`MerchantAmazonProductsTaskGetHtmlResultInfo`](MerchantAmazonProductsTaskGetHtmlResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:193254

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantAmazonProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:193258

HTML pages and related data

#### Implementation of

[`IMerchantAmazonProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md).[`items`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:193256

the number of results returned in the items array

#### Implementation of

[`IMerchantAmazonProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:193241

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`IMerchantAmazonProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:193249

language code in a POST array

#### Implementation of

[`IMerchantAmazonProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:193247

location code in a POST array

#### Implementation of

[`IMerchantAmazonProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:193245

search engine domain in a POST array

#### Implementation of

[`IMerchantAmazonProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:193243

type of element

#### Implementation of

[`IMerchantAmazonProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md).[`type`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:193271

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:193299

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonProductsTaskGetHtmlResultInfo`](MerchantAmazonProductsTaskGetHtmlResultInfo.md)

Defined in: main.ts:193292

#### Parameters

##### data

`any`

#### Returns

[`MerchantAmazonProductsTaskGetHtmlResultInfo`](MerchantAmazonProductsTaskGetHtmlResultInfo.md)
