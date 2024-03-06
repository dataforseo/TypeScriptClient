[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IAppDataGoogleAppInfoTaskGetHtmlResultInfo

# Interface: IAppDataGoogleAppInfoTaskGetHtmlResultInfo

## Implemented by

- [`AppDataGoogleAppInfoTaskGetHtmlResultInfo`](../classes/AppDataGoogleAppInfoTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [app\_id](IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md#app_id)
- [datetime](IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md#datetime)
- [items](IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md#items)
- [items\_count](IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md#items_count)
- [language\_code](IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md#language_code)
- [location\_code](IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md#se_domain)
- [type](IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md#type)

## Properties

### app\_id

• `Optional` **app\_id**: `string`

application ID received in a POST request

#### Defined in

[main.ts:180452](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180452)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:180465](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180465)

___


### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

HTML pages and related data

#### Defined in

[main.ts:180469](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180469)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:180467](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180467)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:180460](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180460)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:180458](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180458)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:180456](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180456)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:180454](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180454)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")