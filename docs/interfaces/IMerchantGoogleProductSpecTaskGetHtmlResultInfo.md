[Documentation](../README.md) / [Exports](../modules.md) / IMerchantGoogleProductSpecTaskGetHtmlResultInfo

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

main.ts:168424

___

### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

elements of search results found on Google Shopping

#### Defined in

main.ts:168428

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:168426

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:168419

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:168417

___

### product\_id

• `Optional` **product\_id**: `string`

product ID in a POST array

#### Defined in

main.ts:168411

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:168415

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:168413
