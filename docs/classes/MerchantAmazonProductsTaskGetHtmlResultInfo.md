[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonProductsTaskGetHtmlResultInfo

# Class: MerchantAmazonProductsTaskGetHtmlResultInfo

## Implements

- [`IMerchantAmazonProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonProductsTaskGetHtmlResultInfo()

> **new MerchantAmazonProductsTaskGetHtmlResultInfo**(`data`?): [`MerchantAmazonProductsTaskGetHtmlResultInfo`](MerchantAmazonProductsTaskGetHtmlResultInfo.md)

#### Parameters

##### data?

[`IMerchantAmazonProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md)

#### Returns

[`MerchantAmazonProductsTaskGetHtmlResultInfo`](MerchantAmazonProductsTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:193194

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantAmazonProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md#datetime)

#### Defined in

main.ts:193186

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

HTML pages and related data

#### Implementation of

[`IMerchantAmazonProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md).[`items`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md#items)

#### Defined in

main.ts:193190

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IMerchantAmazonProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md#items_count)

#### Defined in

main.ts:193188

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`IMerchantAmazonProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md#keyword)

#### Defined in

main.ts:193173

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IMerchantAmazonProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md#language_code)

#### Defined in

main.ts:193181

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IMerchantAmazonProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md#location_code)

#### Defined in

main.ts:193179

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IMerchantAmazonProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:193177

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IMerchantAmazonProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md).[`type`](../interfaces/IMerchantAmazonProductsTaskGetHtmlResultInfo.md#type)

#### Defined in

main.ts:193175

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:193203

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:193231

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonProductsTaskGetHtmlResultInfo`](MerchantAmazonProductsTaskGetHtmlResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`MerchantAmazonProductsTaskGetHtmlResultInfo`](MerchantAmazonProductsTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:193224
