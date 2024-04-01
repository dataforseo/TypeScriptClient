[Documentation](../README.md) / [Exports](../modules.md) / ISerpGoogleOrganicLiveHtmlResultInfo

# Interface: ISerpGoogleOrganicLiveHtmlResultInfo

## Implemented by

- [`SerpGoogleOrganicLiveHtmlResultInfo`](../classes/SerpGoogleOrganicLiveHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](ISerpGoogleOrganicLiveHtmlResultInfo.md#datetime)
- [items](ISerpGoogleOrganicLiveHtmlResultInfo.md#items)
- [items\_count](ISerpGoogleOrganicLiveHtmlResultInfo.md#items_count)
- [keyword](ISerpGoogleOrganicLiveHtmlResultInfo.md#keyword)
- [language\_code](ISerpGoogleOrganicLiveHtmlResultInfo.md#language_code)
- [location\_code](ISerpGoogleOrganicLiveHtmlResultInfo.md#location_code)
- [se\_domain](ISerpGoogleOrganicLiveHtmlResultInfo.md#se_domain)
- [type](ISerpGoogleOrganicLiveHtmlResultInfo.md#type)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:37944

___

### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

elements of search results found in SERP

#### Defined in

main.ts:37948

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:37946

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:37931

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:37939

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:37937

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:37935

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:37933
