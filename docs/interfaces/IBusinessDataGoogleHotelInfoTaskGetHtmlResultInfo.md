[Documentation](../README.md) / [Exports](../modules.md) / IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo

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

main.ts:201871

___

### items

• `Optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

HTML pages

#### Defined in

main.ts:201875

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:201873

___

### keyword

• `Optional` **keyword**: `string`

identifier received in a POST array
this field will contain the hotel_identifier parameter specified when setting a task;
example:
CgoI-KWyzenM_MV3EAE

#### Defined in

main.ts:201862

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:201866

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:201864

___

### se\_domain

• `Optional` **se\_domain**: `string`

#### Defined in

main.ts:201877

___

### type

• `Optional` **type**: `string`

#### Defined in

main.ts:201876
