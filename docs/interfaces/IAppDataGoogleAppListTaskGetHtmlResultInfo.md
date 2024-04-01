[Documentation](../README.md) / [Exports](../modules.md) / IAppDataGoogleAppListTaskGetHtmlResultInfo

# Interface: IAppDataGoogleAppListTaskGetHtmlResultInfo

## Implemented by

- [`AppDataGoogleAppListTaskGetHtmlResultInfo`](../classes/AppDataGoogleAppListTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](IAppDataGoogleAppListTaskGetHtmlResultInfo.md#datetime)
- [items](IAppDataGoogleAppListTaskGetHtmlResultInfo.md#items)
- [items\_count](IAppDataGoogleAppListTaskGetHtmlResultInfo.md#items_count)
- [keyword](IAppDataGoogleAppListTaskGetHtmlResultInfo.md#keyword)
- [language\_code](IAppDataGoogleAppListTaskGetHtmlResultInfo.md#language_code)
- [location\_code](IAppDataGoogleAppListTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](IAppDataGoogleAppListTaskGetHtmlResultInfo.md#se_domain)
- [type](IAppDataGoogleAppListTaskGetHtmlResultInfo.md#type)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:184578

___

### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

HTML pages and related data

#### Defined in

main.ts:184582

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:184580

___

### keyword

• `Optional` **keyword**: `string`

app collection received in a POST array

#### Defined in

main.ts:184565

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:184573

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:184571

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:184569

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:184567
