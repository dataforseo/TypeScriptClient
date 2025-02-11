[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantGoogleProductSpecTaskGetHtmlResultInfo

# Class: MerchantGoogleProductSpecTaskGetHtmlResultInfo

Defined in: main.ts:190050

## Implements

- [`IMerchantGoogleProductSpecTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleProductSpecTaskGetHtmlResultInfo()

> **new MerchantGoogleProductSpecTaskGetHtmlResultInfo**(`data`?): [`MerchantGoogleProductSpecTaskGetHtmlResultInfo`](MerchantGoogleProductSpecTaskGetHtmlResultInfo.md)

Defined in: main.ts:190073

#### Parameters

##### data?

[`IMerchantGoogleProductSpecTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md)

#### Returns

[`MerchantGoogleProductSpecTaskGetHtmlResultInfo`](MerchantGoogleProductSpecTaskGetHtmlResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:190065

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:190069

elements of search results found on Google Shopping

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md).[`items`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:190067

the number of results returned in the items array

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:190060

language code in a POST array

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:190058

location code in a POST array

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#location_code)

***

### product\_id?

> `optional` **product\_id**: `string`

Defined in: main.ts:190052

product ID in a POST array

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md).[`product_id`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#product_id)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:190056

search engine domain in a POST array

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:190054

type of element

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md).[`type`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:190082

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:190110

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantGoogleProductSpecTaskGetHtmlResultInfo`](MerchantGoogleProductSpecTaskGetHtmlResultInfo.md)

Defined in: main.ts:190103

#### Parameters

##### data

`any`

#### Returns

[`MerchantGoogleProductSpecTaskGetHtmlResultInfo`](MerchantGoogleProductSpecTaskGetHtmlResultInfo.md)
