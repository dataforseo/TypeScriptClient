[Documentation](../README.md) / [Exports](../modules.md) / ISerpGoogleJobsTaskGetHtmlResultInfo

# Interface: ISerpGoogleJobsTaskGetHtmlResultInfo

## Implemented by

- [`SerpGoogleJobsTaskGetHtmlResultInfo`](../classes/SerpGoogleJobsTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](ISerpGoogleJobsTaskGetHtmlResultInfo.md#datetime)
- [items](ISerpGoogleJobsTaskGetHtmlResultInfo.md#items)
- [items\_count](ISerpGoogleJobsTaskGetHtmlResultInfo.md#items_count)
- [keyword](ISerpGoogleJobsTaskGetHtmlResultInfo.md#keyword)
- [language\_code](ISerpGoogleJobsTaskGetHtmlResultInfo.md#language_code)
- [location\_code](ISerpGoogleJobsTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](ISerpGoogleJobsTaskGetHtmlResultInfo.md#se_domain)
- [type](ISerpGoogleJobsTaskGetHtmlResultInfo.md#type)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:50382

___

### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

elements of search results found in SERP

#### Defined in

main.ts:50386

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:50384

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:50369

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:50377

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:50375

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:50373

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:50371
