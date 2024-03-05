[dataforseo-client](../README.md) / [Exports](../modules.md) / IBusinessDataGoogleHotelSearchesLiveResultInfo

# Interface: IBusinessDataGoogleHotelSearchesLiveResultInfo

## Implemented by

- [`BusinessDataGoogleHotelSearchesLiveResultInfo`](../classes/BusinessDataGoogleHotelSearchesLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](IBusinessDataGoogleHotelSearchesLiveResultInfo.md#check_url)
- [datetime](IBusinessDataGoogleHotelSearchesLiveResultInfo.md#datetime)
- [items](IBusinessDataGoogleHotelSearchesLiveResultInfo.md#items)
- [items\_count](IBusinessDataGoogleHotelSearchesLiveResultInfo.md#items_count)
- [keyword](IBusinessDataGoogleHotelSearchesLiveResultInfo.md#keyword)
- [language\_code](IBusinessDataGoogleHotelSearchesLiveResultInfo.md#language_code)
- [location\_code](IBusinessDataGoogleHotelSearchesLiveResultInfo.md#location_code)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:194690](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194690)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:194695](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194695)

___

### items

• `Optional` **items**: [`BusinessDataGoogleHotelSearchesItem`](../classes/BusinessDataGoogleHotelSearchesItem.md)[]

array of items
note: this field always equals null; use it to facilitate integration and ensure interoperability with the Hotel Info endpoint

#### Defined in

[main.ts:194701](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194701)

___

### items\_count

• `Optional` **items\_count**: `number`

item types
the number of items in the items array

#### Defined in

[main.ts:194698](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194698)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:194683](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194683)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:194687](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194687)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:194685](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194685)
