[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IAppDataGoogleAppReviewsTaskGetHtmlResultInfo

# Interface: IAppDataGoogleAppReviewsTaskGetHtmlResultInfo

## Implemented by

- [`AppDataGoogleAppReviewsTaskGetHtmlResultInfo`](../classes/AppDataGoogleAppReviewsTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [app\_id](IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#app_id)
- [datetime](IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#datetime)
- [items](IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#items)
- [items\_count](IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#items_count)
- [language\_code](IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#language_code)
- [location\_code](IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#se_domain)
- [type](IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#type)

## Properties

### app\_id

• `Optional` **app\_id**: `string`

app id received in a POST array

#### Defined in

[main.ts:181760](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181760)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:181773](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181773)

___


### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

HTML pages and related data

#### Defined in

[main.ts:181777](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181777)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:181775](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181775)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:181768](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181768)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:181766](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181766)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:181764](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181764)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:181762](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181762)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")