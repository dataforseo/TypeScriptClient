[Documentation](../README.md) / [Exports](../modules.md) / IAppDataGoogleAppSearchesTaskGetHtmlResultInfo

# Interface: IAppDataGoogleAppSearchesTaskGetHtmlResultInfo

## Implemented by

- [`AppDataGoogleAppSearchesTaskGetHtmlResultInfo`](../classes/AppDataGoogleAppSearchesTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#datetime)
- [items](IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#items)
- [items\_count](IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#items_count)
- [keyword](IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#keyword)
- [language\_code](IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#language_code)
- [location\_code](IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#se_domain)
- [type](IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#type)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:178235

___

### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

HTML pages and related data

#### Defined in

main.ts:178239

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:178237

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST request

#### Defined in

main.ts:178222

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:178230

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:178228

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:178226

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:178224
