**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantGoogleSellersTaskGetHtmlResultInfo

# Class: MerchantGoogleSellersTaskGetHtmlResultInfo

## Implements

- [`IMerchantGoogleSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleSellersTaskGetHtmlResultInfo(data)

> **new MerchantGoogleSellersTaskGetHtmlResultInfo**(`data`?): [`MerchantGoogleSellersTaskGetHtmlResultInfo`](MerchantGoogleSellersTaskGetHtmlResultInfo.md)

#### Parameters

• **data?**: [`IMerchantGoogleSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md)

#### Returns

[`MerchantGoogleSellersTaskGetHtmlResultInfo`](MerchantGoogleSellersTaskGetHtmlResultInfo.md)

#### Source

main.ts:174379

## Properties

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantGoogleSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md#datetime)

#### Source

main.ts:174371

***

### items?

> **`optional`** **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found on Google Shopping

#### Implementation of

[`IMerchantGoogleSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md).[`items`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md#items)

#### Source

main.ts:174375

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IMerchantGoogleSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md#items_count)

#### Source

main.ts:174373

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IMerchantGoogleSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md#language_code)

#### Source

main.ts:174366

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IMerchantGoogleSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md#location_code)

#### Source

main.ts:174364

***

### product\_id?

> **`optional`** **product\_id**: `string`

product_id received in a POST array

#### Implementation of

[`IMerchantGoogleSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md).[`product_id`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md#product_id)

#### Source

main.ts:174358

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IMerchantGoogleSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md#se_domain)

#### Source

main.ts:174362

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IMerchantGoogleSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md).[`type`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md#type)

#### Source

main.ts:174360

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:174388

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:174416

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantGoogleSellersTaskGetHtmlResultInfo`](MerchantGoogleSellersTaskGetHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantGoogleSellersTaskGetHtmlResultInfo`](MerchantGoogleSellersTaskGetHtmlResultInfo.md)

#### Source

main.ts:174409
