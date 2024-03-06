[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IBusinessDataGoogleHotelSearchesTaskGetResultInfo

# Interface: IBusinessDataGoogleHotelSearchesTaskGetResultInfo

## Implemented by

- [`BusinessDataGoogleHotelSearchesTaskGetResultInfo`](../classes/BusinessDataGoogleHotelSearchesTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md#check_url)
- [datetime](IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md#datetime)
- [items](IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md#items)
- [items\_count](IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md#items_count)
- [keyword](IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md#keyword)
- [language\_code](IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md#language_code)
- [location\_code](IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md#location_code)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:194014](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194014)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:194019](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194019)

___


### items

• `Optional` **items**: [`BusinessDataGoogleHotelSearchesItem`](../classes/BusinessDataGoogleHotelSearchesItem.md)[]

array of items
note: this field always equals null; use it to facilitate integration and ensure interoperability with the Hotel Info endpoint

#### Defined in

[main.ts:194025](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194025)

___


### items\_count

• `Optional` **items\_count**: `number`

item types
the number of items in the items array

#### Defined in

[main.ts:194022](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194022)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character);
in order to obtain accurate search results, the location name is appended to the keyword automatically

#### Defined in

[main.ts:194007](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194007)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:194011](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194011)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:194009](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194009)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")