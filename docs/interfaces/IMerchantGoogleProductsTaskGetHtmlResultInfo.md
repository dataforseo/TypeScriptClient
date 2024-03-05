[dataforseo-client](../README.md) / [Exports](../modules.md) / IMerchantGoogleProductsTaskGetHtmlResultInfo

# Interface: IMerchantGoogleProductsTaskGetHtmlResultInfo

## Implemented by

- [`MerchantGoogleProductsTaskGetHtmlResultInfo`](../classes/MerchantGoogleProductsTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](IMerchantGoogleProductsTaskGetHtmlResultInfo.md#datetime)
- [items](IMerchantGoogleProductsTaskGetHtmlResultInfo.md#items)
- [items\_count](IMerchantGoogleProductsTaskGetHtmlResultInfo.md#items_count)
- [keyword](IMerchantGoogleProductsTaskGetHtmlResultInfo.md#keyword)
- [language\_code](IMerchantGoogleProductsTaskGetHtmlResultInfo.md#language_code)
- [location\_code](IMerchantGoogleProductsTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](IMerchantGoogleProductsTaskGetHtmlResultInfo.md#se_domain)
- [type](IMerchantGoogleProductsTaskGetHtmlResultInfo.md#type)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:165726](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165726)

___

### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

elements of search results found on Google Shopping

#### Defined in

[main.ts:165730](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165730)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:165728](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165728)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:165713](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165713)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:165721](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165721)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:165719](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165719)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:165717](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165717)

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:165715](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165715)
