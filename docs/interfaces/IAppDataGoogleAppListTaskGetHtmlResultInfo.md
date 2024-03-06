[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IAppDataGoogleAppListTaskGetHtmlResultInfo

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

[main.ts:179125](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179125)

___


### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

HTML pages and related data

#### Defined in

[main.ts:179129](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179129)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:179127](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179127)

___


### keyword

• `Optional` **keyword**: `string`

app collection received in a POST array

#### Defined in

[main.ts:179112](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179112)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:179120](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179120)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:179118](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179118)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:179116](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179116)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:179114](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179114)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")