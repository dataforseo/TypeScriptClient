[Documentation](../README.md) / [Exports](../modules.md) / ISerpGoogleLocalFinderTaskGetHtmlResultInfo

# Interface: ISerpGoogleLocalFinderTaskGetHtmlResultInfo

## Implemented by

- [`SerpGoogleLocalFinderTaskGetHtmlResultInfo`](../classes/SerpGoogleLocalFinderTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#datetime)
- [items](ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#items)
- [items\_count](ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#items_count)
- [keyword](ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#keyword)
- [language\_code](ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#language_code)
- [location\_code](ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#se_domain)
- [type](ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#type)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:40981

___

### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

elements of search results found in SERP

#### Defined in

main.ts:40985

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:40983

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:40968

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:40976

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:40974

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:40972

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:40970
