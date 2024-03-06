[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IBusinessDataGoogleHotelSearchesItem

# Interface: IBusinessDataGoogleHotelSearchesItem

## Implemented by

- [`BusinessDataGoogleHotelSearchesItem`](../classes/BusinessDataGoogleHotelSearchesItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [hotel\_identifier](IBusinessDataGoogleHotelSearchesItem.md#hotel_identifier)
- [is\_paid](IBusinessDataGoogleHotelSearchesItem.md#is_paid)
- [location](IBusinessDataGoogleHotelSearchesItem.md#location)
- [overview\_images](IBusinessDataGoogleHotelSearchesItem.md#overview_images)
- [prices](IBusinessDataGoogleHotelSearchesItem.md#prices)
- [reviews](IBusinessDataGoogleHotelSearchesItem.md#reviews)
- [stars](IBusinessDataGoogleHotelSearchesItem.md#stars)
- [title](IBusinessDataGoogleHotelSearchesItem.md#title)
- [type](IBusinessDataGoogleHotelSearchesItem.md#type)

## Properties

### hotel\_identifier

• `Optional` **hotel\_identifier**: `string`

unique identifier of a hotel entity in Google search
example:
CgoI-KWyzenM_MV3EAE

#### Defined in

[main.ts:193898](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193898)

___


### is\_paid

• `Optional` **is\_paid**: `boolean`

indicates a paid hotel listing
if true, related hotel_search_item is a paid ad
if false, related hotel_search_item is an organic hotel listing

#### Defined in

[main.ts:193907](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193907)

___


### location

• `Optional` **location**: [`GpsCoordinatesLocationInfo`](../classes/GpsCoordinatesLocationInfo.md)

GPS coordinates of the hotel’s location

#### Defined in

[main.ts:193909](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193909)

___


### overview\_images

• `Optional` **overview\_images**: `string`[]

featured images for a hotel

#### Defined in

[main.ts:193913](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193913)

___


### prices

• `Optional` **prices**: [`HotelPriceInfo`](../classes/HotelPriceInfo.md)

hotel price

#### Defined in

[main.ts:193915](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193915)

___


### reviews

• `Optional` **reviews**: [`HotelReviewInfo`](../classes/HotelReviewInfo.md)

hotel reviews and rating information

#### Defined in

[main.ts:193911](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193911)

___


### stars

• `Optional` **stars**: `number`

hotel class rating
class rating that ranges between 1-5 stars

#### Defined in

[main.ts:193903](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193903)

___


### title

• `Optional` **title**: `string`

title of the hotel

#### Defined in

[main.ts:193900](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193900)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:193894](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193894)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")