[dataforseo-client](../README.md) / [Exports](../modules.md) / IMerchantGoogleProductSpecTaskGetHtmlResultInfo

# Interface: IMerchantGoogleProductSpecTaskGetHtmlResultInfo

## Implemented by

- [`MerchantGoogleProductSpecTaskGetHtmlResultInfo`](../classes/MerchantGoogleProductSpecTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#datetime)
- [items](IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#items)
- [items\_count](IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#items_count)
- [language\_code](IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#language_code)
- [location\_code](IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#location_code)
- [product\_id](IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#product_id)
- [se\_domain](IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#se_domain)
- [type](IMerchantGoogleProductSpecTaskGetHtmlResultInfo.md#type)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:168304](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168304)

___

### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

elements of search results found on Google Shopping

#### Defined in

[main.ts:168308](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168308)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:168306](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168306)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:168299](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168299)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:168297](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168297)

___

### product\_id

• `Optional` **product\_id**: `string`

product ID in a POST array

#### Defined in

[main.ts:168291](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168291)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:168295](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168295)

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:168293](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168293)
