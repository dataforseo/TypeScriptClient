[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantGoogleSellersTaskGetHtmlResultInfo

# Class: MerchantGoogleSellersTaskGetHtmlResultInfo

## Implements

- [`IMerchantGoogleSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleSellersTaskGetHtmlResultInfo.md#constructor)

### Properties

- [datetime](MerchantGoogleSellersTaskGetHtmlResultInfo.md#datetime)
- [items](MerchantGoogleSellersTaskGetHtmlResultInfo.md#items)
- [items\_count](MerchantGoogleSellersTaskGetHtmlResultInfo.md#items_count)
- [language\_code](MerchantGoogleSellersTaskGetHtmlResultInfo.md#language_code)
- [location\_code](MerchantGoogleSellersTaskGetHtmlResultInfo.md#location_code)
- [product\_id](MerchantGoogleSellersTaskGetHtmlResultInfo.md#product_id)
- [se\_domain](MerchantGoogleSellersTaskGetHtmlResultInfo.md#se_domain)
- [type](MerchantGoogleSellersTaskGetHtmlResultInfo.md#type)

### Methods

- [init](MerchantGoogleSellersTaskGetHtmlResultInfo.md#init)
- [toJSON](MerchantGoogleSellersTaskGetHtmlResultInfo.md#tojson)
- [fromJS](MerchantGoogleSellersTaskGetHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleSellersTaskGetHtmlResultInfo**(`data?`): [`MerchantGoogleSellersTaskGetHtmlResultInfo`](MerchantGoogleSellersTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md) |

#### Returns

[`MerchantGoogleSellersTaskGetHtmlResultInfo`](MerchantGoogleSellersTaskGetHtmlResultInfo.md)

#### Defined in

[main.ts:167060](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167060)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IMerchantGoogleSellersTaskGetHtmlResultInfo](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md).[datetime](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md#datetime)

#### Defined in

[main.ts:167052](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167052)

___

### items

• `Optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found on Google Shopping

#### Implementation of

[IMerchantGoogleSellersTaskGetHtmlResultInfo](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md).[items](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md#items)

#### Defined in

[main.ts:167056](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167056)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IMerchantGoogleSellersTaskGetHtmlResultInfo](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md).[items_count](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md#items_count)

#### Defined in

[main.ts:167054](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167054)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IMerchantGoogleSellersTaskGetHtmlResultInfo](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md).[language_code](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md#language_code)

#### Defined in

[main.ts:167047](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167047)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IMerchantGoogleSellersTaskGetHtmlResultInfo](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md).[location_code](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md#location_code)

#### Defined in

[main.ts:167045](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167045)

___

### product\_id

• `Optional` **product\_id**: `string`

product_id received in a POST array

#### Implementation of

[IMerchantGoogleSellersTaskGetHtmlResultInfo](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md).[product_id](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md#product_id)

#### Defined in

[main.ts:167039](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167039)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IMerchantGoogleSellersTaskGetHtmlResultInfo](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md).[se_domain](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

[main.ts:167043](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167043)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IMerchantGoogleSellersTaskGetHtmlResultInfo](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md).[type](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md#type)

#### Defined in

[main.ts:167041](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167041)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:167069](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167069)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:167097](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167097)

___

### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleSellersTaskGetHtmlResultInfo`](MerchantGoogleSellersTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleSellersTaskGetHtmlResultInfo`](MerchantGoogleSellersTaskGetHtmlResultInfo.md)

#### Defined in

[main.ts:167090](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167090)
