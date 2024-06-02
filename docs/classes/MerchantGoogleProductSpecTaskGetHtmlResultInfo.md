**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantGoogleProductSpecTaskGetHtmlResultInfo

# Class: MerchantGoogleProductSpecTaskGetHtmlResultInfo

## Implements

- [`IMerchantGoogleProductSpecTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleProductSpecTaskGetHtmlResultInfo(data)

> **new MerchantGoogleProductSpecTaskGetHtmlResultInfo**(`data`?): [`MerchantGoogleProductSpecTaskGetHtmlResultInfo`](MerchantGoogleProductSpecTaskGetHtmlResultInfo.md)

#### Parameters

• **data?**: [`IMerchantGoogleProductSpecTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md)

#### Returns

[`MerchantGoogleProductSpecTaskGetHtmlResultInfo`](MerchantGoogleProductSpecTaskGetHtmlResultInfo.md)

#### Source

main.ts:175992

## Properties

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#datetime)

#### Source

main.ts:175984

***

### items?

> **`optional`** **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found on Google Shopping

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md).[`items`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#items)

#### Source

main.ts:175988

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#items_count)

#### Source

main.ts:175986

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#language_code)

#### Source

main.ts:175979

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#location_code)

#### Source

main.ts:175977

***

### product\_id?

> **`optional`** **product\_id**: `string`

product ID in a POST array

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md).[`product_id`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#product_id)

#### Source

main.ts:175971

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#se_domain)

#### Source

main.ts:175975

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md).[`type`](../interfaces/IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#type)

#### Source

main.ts:175973

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:176001

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:176029

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantGoogleProductSpecTaskGetHtmlResultInfo`](MerchantGoogleProductSpecTaskGetHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantGoogleProductSpecTaskGetHtmlResultInfo`](MerchantGoogleProductSpecTaskGetHtmlResultInfo.md)

#### Source

main.ts:176022
