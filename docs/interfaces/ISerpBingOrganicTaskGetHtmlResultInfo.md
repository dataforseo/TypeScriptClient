[Documentation](../README.md) / [Exports](../modules.md) / ISerpBingOrganicTaskGetHtmlResultInfo

# Interface: ISerpBingOrganicTaskGetHtmlResultInfo

## Implemented by

- [`SerpBingOrganicTaskGetHtmlResultInfo`](../classes/SerpBingOrganicTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](ISerpBingOrganicTaskGetHtmlResultInfo.md#datetime)
- [items](ISerpBingOrganicTaskGetHtmlResultInfo.md#items)
- [items\_count](ISerpBingOrganicTaskGetHtmlResultInfo.md#items_count)
- [keyword](ISerpBingOrganicTaskGetHtmlResultInfo.md#keyword)
- [language\_code](ISerpBingOrganicTaskGetHtmlResultInfo.md#language_code)
- [location\_code](ISerpBingOrganicTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](ISerpBingOrganicTaskGetHtmlResultInfo.md#se_domain)
- [type](ISerpBingOrganicTaskGetHtmlResultInfo.md#type)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:57204

___

### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

elements of search results found in SERP

#### Defined in

main.ts:57208

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:57206

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:57191

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:57199

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:57197

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:57195

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:57193
