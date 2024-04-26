**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantGoogleProductsTaskGetHtmlResultInfo

# Class: MerchantGoogleProductsTaskGetHtmlResultInfo

## Implements

- [`IMerchantGoogleProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleProductsTaskGetHtmlResultInfo(data)

> **new MerchantGoogleProductsTaskGetHtmlResultInfo**(`data`?): [`MerchantGoogleProductsTaskGetHtmlResultInfo`](MerchantGoogleProductsTaskGetHtmlResultInfo.md)

#### Parameters

• **data?**: [`IMerchantGoogleProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md)

#### Returns

[`MerchantGoogleProductsTaskGetHtmlResultInfo`](MerchantGoogleProductsTaskGetHtmlResultInfo.md)

#### Source

main.ts:172094

## Properties

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantGoogleProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md#datetime)

#### Source

main.ts:172086

***

### items?

> **`optional`** **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found on Google Shopping

#### Implementation of

[`IMerchantGoogleProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md).[`items`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md#items)

#### Source

main.ts:172090

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IMerchantGoogleProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md#items_count)

#### Source

main.ts:172088

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`IMerchantGoogleProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md#keyword)

#### Source

main.ts:172073

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IMerchantGoogleProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md#language_code)

#### Source

main.ts:172081

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IMerchantGoogleProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md#location_code)

#### Source

main.ts:172079

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IMerchantGoogleProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md#se_domain)

#### Source

main.ts:172077

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IMerchantGoogleProductsTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md).[`type`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResultInfo.md#type)

#### Source

main.ts:172075

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:172103

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:172131

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantGoogleProductsTaskGetHtmlResultInfo`](MerchantGoogleProductsTaskGetHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantGoogleProductsTaskGetHtmlResultInfo`](MerchantGoogleProductsTaskGetHtmlResultInfo.md)

#### Source

main.ts:172124
