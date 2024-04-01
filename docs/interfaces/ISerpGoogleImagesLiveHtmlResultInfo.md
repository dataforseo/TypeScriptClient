[Documentation](../README.md) / [Exports](../modules.md) / ISerpGoogleImagesLiveHtmlResultInfo

# Interface: ISerpGoogleImagesLiveHtmlResultInfo

## Implemented by

- [`SerpGoogleImagesLiveHtmlResultInfo`](../classes/SerpGoogleImagesLiveHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](ISerpGoogleImagesLiveHtmlResultInfo.md#datetime)
- [items](ISerpGoogleImagesLiveHtmlResultInfo.md#items)
- [items\_count](ISerpGoogleImagesLiveHtmlResultInfo.md#items_count)
- [keyword](ISerpGoogleImagesLiveHtmlResultInfo.md#keyword)
- [language\_code](ISerpGoogleImagesLiveHtmlResultInfo.md#language_code)
- [location\_code](ISerpGoogleImagesLiveHtmlResultInfo.md#location_code)
- [se\_domain](ISerpGoogleImagesLiveHtmlResultInfo.md#se_domain)
- [type](ISerpGoogleImagesLiveHtmlResultInfo.md#type)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:47784

___

### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

elements of search results found in SERP

#### Defined in

main.ts:47788

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:47786

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:47771

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:47779

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:47777

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:47775

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:47773
