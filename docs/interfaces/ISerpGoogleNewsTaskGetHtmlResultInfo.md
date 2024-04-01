[Documentation](../README.md) / [Exports](../modules.md) / ISerpGoogleNewsTaskGetHtmlResultInfo

# Interface: ISerpGoogleNewsTaskGetHtmlResultInfo

## Implemented by

- [`SerpGoogleNewsTaskGetHtmlResultInfo`](../classes/SerpGoogleNewsTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](ISerpGoogleNewsTaskGetHtmlResultInfo.md#datetime)
- [items](ISerpGoogleNewsTaskGetHtmlResultInfo.md#items)
- [items\_count](ISerpGoogleNewsTaskGetHtmlResultInfo.md#items_count)
- [keyword](ISerpGoogleNewsTaskGetHtmlResultInfo.md#keyword)
- [language\_code](ISerpGoogleNewsTaskGetHtmlResultInfo.md#language_code)
- [location\_code](ISerpGoogleNewsTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](ISerpGoogleNewsTaskGetHtmlResultInfo.md#se_domain)
- [type](ISerpGoogleNewsTaskGetHtmlResultInfo.md#type)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:43726

___

### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

elements of search results found in SERP

#### Defined in

main.ts:43730

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:43728

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:43713

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:43721

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:43719

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:43717

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:43715
