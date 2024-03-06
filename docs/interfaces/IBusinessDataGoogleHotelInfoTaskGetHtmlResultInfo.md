[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo

# Interface: IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo

## Implemented by

- [`BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](../classes/BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#datetime)
- [items](IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#items)
- [items\_count](IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#items_count)
- [keyword](IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#keyword)
- [language\_code](IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#language_code)
- [location\_code](IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#se_domain)
- [type](IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#type)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:196410](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196410)

___


### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

HTML pages

#### Defined in

[main.ts:196414](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196414)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:196412](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196412)

___


### keyword

• `Optional` **keyword**: `string`

identifier received in a POST array
this field will contain the hotel_identifier parameter specified when setting a task;
example:
CgoI-KWyzenM_MV3EAE

#### Defined in

[main.ts:196401](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196401)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:196405](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196405)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:196403](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196403)

___


### se\_domain

• `Optional` **se\_domain**: `string`

#### Defined in

[main.ts:196416](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196416)

___


### type

• `Optional` **type**: `string`

#### Defined in

[main.ts:196415](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196415)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")