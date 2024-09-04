[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / MerchantGoogleProductSpecTaskGetHtmlResultInfo

# Class: MerchantGoogleProductSpecTaskGetHtmlResultInfo

## Implements

- [`IMerchantGoogleProductSpecTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleProductSpecTaskGetHtmlResultInfo()

> **new MerchantGoogleProductSpecTaskGetHtmlResultInfo**(`data`?): [`MerchantGoogleProductSpecTaskGetHtmlResultInfo`](MerchantGoogleProductSpecTaskGetHtmlResultInfo.md)

#### Parameters

• **data?**: [`IMerchantGoogleProductSpecTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md)

#### Returns

[`MerchantGoogleProductSpecTaskGetHtmlResultInfo`](MerchantGoogleProductSpecTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:182097

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#datetime)

#### Defined in

main.ts:182089

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found on Google Shopping

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md).[`items`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#items)

#### Defined in

main.ts:182093

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#items_count)

#### Defined in

main.ts:182091

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#language_code)

#### Defined in

main.ts:182084

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#location_code)

#### Defined in

main.ts:182082

***

### product\_id?

> `optional` **product\_id**: `string`

product ID in a POST array

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md).[`product_id`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#product_id)

#### Defined in

main.ts:182076

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:182080

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md).[`type`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#type)

#### Defined in

main.ts:182078

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:182106

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:182134

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantGoogleProductSpecTaskGetHtmlResultInfo`](MerchantGoogleProductSpecTaskGetHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantGoogleProductSpecTaskGetHtmlResultInfo`](MerchantGoogleProductSpecTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:182127
