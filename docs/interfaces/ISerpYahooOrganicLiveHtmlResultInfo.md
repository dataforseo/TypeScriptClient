[Documentation](../README.md) / [Exports](../modules.md) / ISerpYahooOrganicLiveHtmlResultInfo

# Interface: ISerpYahooOrganicLiveHtmlResultInfo

## Implemented by

- [`SerpYahooOrganicLiveHtmlResultInfo`](../classes/SerpYahooOrganicLiveHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](ISerpYahooOrganicLiveHtmlResultInfo.md#datetime)
- [items](ISerpYahooOrganicLiveHtmlResultInfo.md#items)
- [items\_count](ISerpYahooOrganicLiveHtmlResultInfo.md#items_count)
- [keyword](ISerpYahooOrganicLiveHtmlResultInfo.md#keyword)
- [language\_code](ISerpYahooOrganicLiveHtmlResultInfo.md#language_code)
- [location\_code](ISerpYahooOrganicLiveHtmlResultInfo.md#location_code)
- [se\_domain](ISerpYahooOrganicLiveHtmlResultInfo.md#se_domain)
- [type](ISerpYahooOrganicLiveHtmlResultInfo.md#type)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:65225

___

### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

elements of search results found in SERP

#### Defined in

main.ts:65229

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:65227

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:65212

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:65220

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:65218

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:65216

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:65214
