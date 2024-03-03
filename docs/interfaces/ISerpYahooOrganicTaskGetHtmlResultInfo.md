[Documentation](../README.md) / [Exports](../modules.md) / ISerpYahooOrganicTaskGetHtmlResultInfo

# Interface: ISerpYahooOrganicTaskGetHtmlResultInfo

## Implemented by

- [`SerpYahooOrganicTaskGetHtmlResultInfo`](../classes/SerpYahooOrganicTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](ISerpYahooOrganicTaskGetHtmlResultInfo.md#datetime)
- [items](ISerpYahooOrganicTaskGetHtmlResultInfo.md#items)
- [items\_count](ISerpYahooOrganicTaskGetHtmlResultInfo.md#items_count)
- [keyword](ISerpYahooOrganicTaskGetHtmlResultInfo.md#keyword)
- [language\_code](ISerpYahooOrganicTaskGetHtmlResultInfo.md#language_code)
- [location\_code](ISerpYahooOrganicTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](ISerpYahooOrganicTaskGetHtmlResultInfo.md#se_domain)
- [type](ISerpYahooOrganicTaskGetHtmlResultInfo.md#type)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:64489

___

### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

elements of search results found in SERP

#### Defined in

main.ts:64493

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:64491

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:64476

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:64484

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:64482

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:64480

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:64478
