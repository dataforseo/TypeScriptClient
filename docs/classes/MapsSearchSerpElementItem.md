[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MapsSearchSerpElementItem

# Class: MapsSearchSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)
  
  ↳ **`MapsSearchSerpElementItem`**

## Implements

- [`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MapsSearchSerpElementItem.md#constructor)

### Properties

- [\_discriminator](MapsSearchSerpElementItem.md#_discriminator)
- [additional\_categories](MapsSearchSerpElementItem.md#additional_categories)
- [address](MapsSearchSerpElementItem.md#address)
- [address\_info](MapsSearchSerpElementItem.md#address_info)
- [category](MapsSearchSerpElementItem.md#category)
- [category\_ids](MapsSearchSerpElementItem.md#category_ids)
- [cid](MapsSearchSerpElementItem.md#cid)
- [contact\_url](MapsSearchSerpElementItem.md#contact_url)
- [domain](MapsSearchSerpElementItem.md#domain)
- [feature\_id](MapsSearchSerpElementItem.md#feature_id)
- [hotel\_rating](MapsSearchSerpElementItem.md#hotel_rating)
- [is\_claimed](MapsSearchSerpElementItem.md#is_claimed)
- [is\_directory\_item](MapsSearchSerpElementItem.md#is_directory_item)
- [latitude](MapsSearchSerpElementItem.md#latitude)
- [local\_justifications](MapsSearchSerpElementItem.md#local_justifications)
- [longitude](MapsSearchSerpElementItem.md#longitude)
- [main\_image](MapsSearchSerpElementItem.md#main_image)
- [phone](MapsSearchSerpElementItem.md#phone)
- [place\_id](MapsSearchSerpElementItem.md#place_id)
- [price\_level](MapsSearchSerpElementItem.md#price_level)
- [rank\_absolute](MapsSearchSerpElementItem.md#rank_absolute)
- [rank\_group](MapsSearchSerpElementItem.md#rank_group)
- [rating](MapsSearchSerpElementItem.md#rating)
- [rating\_distribution](MapsSearchSerpElementItem.md#rating_distribution)
- [snippet](MapsSearchSerpElementItem.md#snippet)
- [title](MapsSearchSerpElementItem.md#title)
- [total\_photos](MapsSearchSerpElementItem.md#total_photos)
- [url](MapsSearchSerpElementItem.md#url)
- [work\_hours](MapsSearchSerpElementItem.md#work_hours)

### Methods

- [init](MapsSearchSerpElementItem.md#init)
- [toJSON](MapsSearchSerpElementItem.md#tojson)
- [fromJS](MapsSearchSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new MapsSearchSerpElementItem**(`data?`): [`MapsSearchSerpElementItem`](MapsSearchSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md) |

#### Returns

[`MapsSearchSerpElementItem`](MapsSearchSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:38498](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38498)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19337)

___


### additional\_categories

• `Optional` **additional\_categories**: `string`[]

additional business categories
additional Google My Business categories that describe the services provided by the business entity in more detail

#### Implementation of

[IMapsSearchSerpElementItem](../interfaces/IMapsSearchSerpElementItem.md).[additional_categories](../interfaces/IMapsSearchSerpElementItem.md#additional_categories)

#### Defined in

[main.ts:38467](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38467)

___


### address

• `Optional` **address**: `string`

address line
address of the local establishment featured in the element

#### Implementation of

[IMapsSearchSerpElementItem](../interfaces/IMapsSearchSerpElementItem.md).[address](../interfaces/IMapsSearchSerpElementItem.md#address)

#### Defined in

[main.ts:38449](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38449)

___


### address\_info

• `Optional` **address\_info**: [`AddressInfo`](AddressInfo.md)

object containing address components of the local establishment

#### Implementation of

[IMapsSearchSerpElementItem](../interfaces/IMapsSearchSerpElementItem.md).[address_info](../interfaces/IMapsSearchSerpElementItem.md#address_info)

#### Defined in

[main.ts:38451](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38451)

___


### category

• `Optional` **category**: `string`

business category
Google My Business general category that best describes the services provided by the business entity

#### Implementation of

[IMapsSearchSerpElementItem](../interfaces/IMapsSearchSerpElementItem.md).[category](../interfaces/IMapsSearchSerpElementItem.md#category)

#### Defined in

[main.ts:38464](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38464)

___


### category\_ids

• `Optional` **category\_ids**: `string`[]

global category IDs
universal category IDs that do not change based on the selected country

#### Implementation of

[IMapsSearchSerpElementItem](../interfaces/IMapsSearchSerpElementItem.md).[category_ids](../interfaces/IMapsSearchSerpElementItem.md#category_ids)

#### Defined in

[main.ts:38470](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38470)

___


### cid

• `Optional` **cid**: `string`

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews

#### Implementation of

[IMapsSearchSerpElementItem](../interfaces/IMapsSearchSerpElementItem.md).[cid](../interfaces/IMapsSearchSerpElementItem.md#cid)

#### Defined in

[main.ts:38479](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38479)

___


### contact\_url

• `Optional` **contact\_url**: `string`

URL of the preferred contact page

#### Implementation of

[IMapsSearchSerpElementItem](../interfaces/IMapsSearchSerpElementItem.md).[contact_url](../interfaces/IMapsSearchSerpElementItem.md#contact_url)

#### Defined in

[main.ts:38429](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38429)

___


### domain

• `Optional` **domain**: `string`

domain in the SERP element

#### Implementation of

[IMapsSearchSerpElementItem](../interfaces/IMapsSearchSerpElementItem.md).[domain](../interfaces/IMapsSearchSerpElementItem.md#domain)

#### Defined in

[main.ts:38423](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38423)

___


### feature\_id

• `Optional` **feature\_id**: `string`

the unique identifier of the element in SERP

#### Implementation of

[IMapsSearchSerpElementItem](../interfaces/IMapsSearchSerpElementItem.md).[feature_id](../interfaces/IMapsSearchSerpElementItem.md#feature_id)

#### Defined in

[main.ts:38475](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38475)

___


### hotel\_rating

• `Optional` **hotel\_rating**: `number`

hotel class rating
class ratings range between 1-5 stars, learn more
if there is no hotel class rating information, the value will be null

#### Implementation of

[IMapsSearchSerpElementItem](../interfaces/IMapsSearchSerpElementItem.md).[hotel_rating](../interfaces/IMapsSearchSerpElementItem.md#hotel_rating)

#### Defined in

[main.ts:38436](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38436)

___


### is\_claimed

• `Optional` **is\_claimed**: `boolean`

indicates whether ownership of this local establishment is claimed

#### Implementation of

[IMapsSearchSerpElementItem](../interfaces/IMapsSearchSerpElementItem.md).[is_claimed](../interfaces/IMapsSearchSerpElementItem.md#is_claimed)

#### Defined in

[main.ts:38489](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38489)

___


### is\_directory\_item

• `Optional` **is\_directory\_item**: `boolean`

indicates whether this local establishment is a directory

#### Implementation of

[IMapsSearchSerpElementItem](../interfaces/IMapsSearchSerpElementItem.md).[is_directory_item](../interfaces/IMapsSearchSerpElementItem.md#is_directory_item)

#### Defined in

[main.ts:38494](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38494)

___


### latitude

• `Optional` **latitude**: `number`

latitude coordinate of the local establishments in google maps
example:
"latitude": 51.584091

#### Implementation of

[IMapsSearchSerpElementItem](../interfaces/IMapsSearchSerpElementItem.md).[latitude](../interfaces/IMapsSearchSerpElementItem.md#latitude)

#### Defined in

[main.ts:38483](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38483)

___


### local\_justifications

• `Optional` **local\_justifications**: [`LocalJustificationInfo`](LocalJustificationInfo.md)[]

Google local justifications
snippets of text that “justify” why the business is showing up for search query

#### Implementation of

[IMapsSearchSerpElementItem](../interfaces/IMapsSearchSerpElementItem.md).[local_justifications](../interfaces/IMapsSearchSerpElementItem.md#local_justifications)

#### Defined in

[main.ts:38492](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38492)

___


### longitude

• `Optional` **longitude**: `number`

longitude coordinate of the local establishment in google maps
example:
"longitude": -0.31365919999999997

#### Implementation of

[IMapsSearchSerpElementItem](../interfaces/IMapsSearchSerpElementItem.md).[longitude](../interfaces/IMapsSearchSerpElementItem.md#longitude)

#### Defined in

[main.ts:38487](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38487)

___


### main\_image

• `Optional` **main\_image**: `string`

URL of the main image featured in Google My Business profile

#### Implementation of

[IMapsSearchSerpElementItem](../interfaces/IMapsSearchSerpElementItem.md).[main_image](../interfaces/IMapsSearchSerpElementItem.md#main_image)

#### Defined in

[main.ts:38459](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38459)

___


### phone

• `Optional` **phone**: `string`

phone number
phone number of the local establishment featured in the element

#### Implementation of

[IMapsSearchSerpElementItem](../interfaces/IMapsSearchSerpElementItem.md).[phone](../interfaces/IMapsSearchSerpElementItem.md#phone)

#### Defined in

[main.ts:38457](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38457)

___


### place\_id

• `Optional` **place\_id**: `string`

unique place identifier
place id of the local establishment featured in the element

#### Implementation of

[IMapsSearchSerpElementItem](../interfaces/IMapsSearchSerpElementItem.md).[place_id](../interfaces/IMapsSearchSerpElementItem.md#place_id)

#### Defined in

[main.ts:38454](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38454)

___


### price\_level

• `Optional` **price\_level**: `string`

property price level
can take values: inexpensive, moderate, expensive, very_expensive
if there is no price level information, the value will be null

#### Implementation of

[IMapsSearchSerpElementItem](../interfaces/IMapsSearchSerpElementItem.md).[price_level](../interfaces/IMapsSearchSerpElementItem.md#price_level)

#### Defined in

[main.ts:38440](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38440)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IMapsSearchSerpElementItem](../interfaces/IMapsSearchSerpElementItem.md).[rank_absolute](../interfaces/IMapsSearchSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:38421](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38421)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IMapsSearchSerpElementItem](../interfaces/IMapsSearchSerpElementItem.md).[rank_group](../interfaces/IMapsSearchSerpElementItem.md#rank_group)

#### Defined in

[main.ts:38418](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38418)

___


### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the element’s rating
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[IMapsSearchSerpElementItem](../interfaces/IMapsSearchSerpElementItem.md).[rating](../interfaces/IMapsSearchSerpElementItem.md#rating)

#### Defined in

[main.ts:38432](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38432)

___


### rating\_distribution

• `Optional` **rating\_distribution**: `Object`

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IMapsSearchSerpElementItem](../interfaces/IMapsSearchSerpElementItem.md).[rating_distribution](../interfaces/IMapsSearchSerpElementItem.md#rating_distribution)

#### Defined in

[main.ts:38443](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38443)

___


### snippet

• `Optional` **snippet**: `string`

element snippet
contains the address and other information about the local establishment featured in the element

#### Implementation of

[IMapsSearchSerpElementItem](../interfaces/IMapsSearchSerpElementItem.md).[snippet](../interfaces/IMapsSearchSerpElementItem.md#snippet)

#### Defined in

[main.ts:38446](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38446)

___


### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[IMapsSearchSerpElementItem](../interfaces/IMapsSearchSerpElementItem.md).[title](../interfaces/IMapsSearchSerpElementItem.md#title)

#### Defined in

[main.ts:38425](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38425)

___


### total\_photos

• `Optional` **total\_photos**: `number`

total count of images featured in Google My Business profile

#### Implementation of

[IMapsSearchSerpElementItem](../interfaces/IMapsSearchSerpElementItem.md).[total_photos](../interfaces/IMapsSearchSerpElementItem.md#total_photos)

#### Defined in

[main.ts:38461](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38461)

___


### url

• `Optional` **url**: `string`

relevant URL in SERP

#### Implementation of

[IMapsSearchSerpElementItem](../interfaces/IMapsSearchSerpElementItem.md).[url](../interfaces/IMapsSearchSerpElementItem.md#url)

#### Defined in

[main.ts:38427](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38427)

___


### work\_hours

• `Optional` **work\_hours**: [`WorkHours`](WorkHours.md)

open hours
information about work hours of the local establishment

#### Implementation of

[IMapsSearchSerpElementItem](../interfaces/IMapsSearchSerpElementItem.md).[work_hours](../interfaces/IMapsSearchSerpElementItem.md#work_hours)

#### Defined in

[main.ts:38473](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38473)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[init](BaseSerpElementItem.md#init)

#### Defined in

[main.ts:38503](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38503)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[toJSON](BaseSerpElementItem.md#tojson)

#### Defined in

[main.ts:38566](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38566)

___


### fromJS

▸ **fromJS**(`data`): [`MapsSearchSerpElementItem`](MapsSearchSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MapsSearchSerpElementItem`](MapsSearchSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:38559](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38559)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")