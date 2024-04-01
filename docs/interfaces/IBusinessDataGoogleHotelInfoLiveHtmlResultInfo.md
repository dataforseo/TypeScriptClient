[Documentation](../README.md) / [Exports](../modules.md) / IBusinessDataGoogleHotelInfoLiveHtmlResultInfo

# Interface: IBusinessDataGoogleHotelInfoLiveHtmlResultInfo

## Implemented by

- [`BusinessDataGoogleHotelInfoLiveHtmlResultInfo`](../classes/BusinessDataGoogleHotelInfoLiveHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#datetime)
- [items](IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#items)
- [items\_count](IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#items_count)
- [keyword](IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#keyword)
- [language\_code](IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#language_code)
- [location\_code](IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#location_code)
- [se\_domain](IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#se_domain)
- [type](IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#type)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:203099

___

### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

HTML pages

#### Defined in

main.ts:203103

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:203101

___

### keyword

• `Optional` **keyword**: `string`

unique hotel identifier specified as "hotel_id:$"

#### Defined in

main.ts:203086

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:203094

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:203092

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:203090

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:203088
