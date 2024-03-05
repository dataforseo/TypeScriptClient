[dataforseo-client](../README.md) / [Exports](../modules.md) / IMapsSearchSerpElementItem

# Interface: IMapsSearchSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IMapsSearchSerpElementItem`**

## Implemented by

- [`MapsSearchSerpElementItem`](../classes/MapsSearchSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [additional\_categories](IMapsSearchSerpElementItem.md#additional_categories)
- [address](IMapsSearchSerpElementItem.md#address)
- [address\_info](IMapsSearchSerpElementItem.md#address_info)
- [category](IMapsSearchSerpElementItem.md#category)
- [category\_ids](IMapsSearchSerpElementItem.md#category_ids)
- [cid](IMapsSearchSerpElementItem.md#cid)
- [contact\_url](IMapsSearchSerpElementItem.md#contact_url)
- [domain](IMapsSearchSerpElementItem.md#domain)
- [feature\_id](IMapsSearchSerpElementItem.md#feature_id)
- [hotel\_rating](IMapsSearchSerpElementItem.md#hotel_rating)
- [is\_claimed](IMapsSearchSerpElementItem.md#is_claimed)
- [is\_directory\_item](IMapsSearchSerpElementItem.md#is_directory_item)
- [latitude](IMapsSearchSerpElementItem.md#latitude)
- [local\_justifications](IMapsSearchSerpElementItem.md#local_justifications)
- [longitude](IMapsSearchSerpElementItem.md#longitude)
- [main\_image](IMapsSearchSerpElementItem.md#main_image)
- [phone](IMapsSearchSerpElementItem.md#phone)
- [place\_id](IMapsSearchSerpElementItem.md#place_id)
- [price\_level](IMapsSearchSerpElementItem.md#price_level)
- [rank\_absolute](IMapsSearchSerpElementItem.md#rank_absolute)
- [rank\_group](IMapsSearchSerpElementItem.md#rank_group)
- [rating](IMapsSearchSerpElementItem.md#rating)
- [rating\_distribution](IMapsSearchSerpElementItem.md#rating_distribution)
- [snippet](IMapsSearchSerpElementItem.md#snippet)
- [title](IMapsSearchSerpElementItem.md#title)
- [total\_photos](IMapsSearchSerpElementItem.md#total_photos)
- [url](IMapsSearchSerpElementItem.md#url)
- [work\_hours](IMapsSearchSerpElementItem.md#work_hours)

## Properties

### additional\_categories

• `Optional` **additional\_categories**: `string`[]

additional business categories
additional Google My Business categories that describe the services provided by the business entity in more detail

#### Defined in

[main.ts:38676](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38676)

___

### address

• `Optional` **address**: `string`

address line
address of the local establishment featured in the element

#### Defined in

[main.ts:38658](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38658)

___

### address\_info

• `Optional` **address\_info**: [`AddressInfo`](../classes/AddressInfo.md)

object containing address components of the local establishment

#### Defined in

[main.ts:38660](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38660)

___

### category

• `Optional` **category**: `string`

business category
Google My Business general category that best describes the services provided by the business entity

#### Defined in

[main.ts:38673](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38673)

___

### category\_ids

• `Optional` **category\_ids**: `string`[]

global category IDs
universal category IDs that do not change based on the selected country

#### Defined in

[main.ts:38679](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38679)

___

### cid

• `Optional` **cid**: `string`

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews

#### Defined in

[main.ts:38688](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38688)

___

### contact\_url

• `Optional` **contact\_url**: `string`

URL of the preferred contact page

#### Defined in

[main.ts:38638](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38638)

___

### domain

• `Optional` **domain**: `string`

domain in the SERP element

#### Defined in

[main.ts:38632](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38632)

___

### feature\_id

• `Optional` **feature\_id**: `string`

the unique identifier of the element in SERP

#### Defined in

[main.ts:38684](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38684)

___

### hotel\_rating

• `Optional` **hotel\_rating**: `number`

hotel class rating
class ratings range between 1-5 stars, learn more
if there is no hotel class rating information, the value will be null

#### Defined in

[main.ts:38645](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38645)

___

### is\_claimed

• `Optional` **is\_claimed**: `boolean`

indicates whether ownership of this local establishment is claimed

#### Defined in

[main.ts:38698](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38698)

___

### is\_directory\_item

• `Optional` **is\_directory\_item**: `boolean`

indicates whether this local establishment is a directory

#### Defined in

[main.ts:38703](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38703)

___

### latitude

• `Optional` **latitude**: `number`

latitude coordinate of the local establishments in google maps
example:
"latitude": 51.584091

#### Defined in

[main.ts:38692](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38692)

___

### local\_justifications

• `Optional` **local\_justifications**: [`LocalJustificationInfo`](../classes/LocalJustificationInfo.md)[]

Google local justifications
snippets of text that “justify” why the business is showing up for search query

#### Defined in

[main.ts:38701](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38701)

___

### longitude

• `Optional` **longitude**: `number`

longitude coordinate of the local establishment in google maps
example:
"longitude": -0.31365919999999997

#### Defined in

[main.ts:38696](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38696)

___

### main\_image

• `Optional` **main\_image**: `string`

URL of the main image featured in Google My Business profile

#### Defined in

[main.ts:38668](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38668)

___

### phone

• `Optional` **phone**: `string`

phone number
phone number of the local establishment featured in the element

#### Defined in

[main.ts:38666](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38666)

___

### place\_id

• `Optional` **place\_id**: `string`

unique place identifier
place id of the local establishment featured in the element

#### Defined in

[main.ts:38663](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38663)

___

### price\_level

• `Optional` **price\_level**: `string`

property price level
can take values: inexpensive, moderate, expensive, very_expensive
if there is no price level information, the value will be null

#### Defined in

[main.ts:38649](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38649)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:38630](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38630)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:38627](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38627)

___

### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Defined in

[main.ts:38641](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38641)

___

### rating\_distribution

• `Optional` **rating\_distribution**: `Object`

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:38652](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38652)

___

### snippet

• `Optional` **snippet**: `string`

element snippet
contains the address and other information about the local establishment featured in the element

#### Defined in

[main.ts:38655](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38655)

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

[main.ts:38634](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38634)

___

### total\_photos

• `Optional` **total\_photos**: `number`

total count of images featured in Google My Business profile

#### Defined in

[main.ts:38670](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38670)

___

### url

• `Optional` **url**: `string`

relevant URL in SERP

#### Defined in

[main.ts:38636](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38636)

___

### work\_hours

• `Optional` **work\_hours**: [`WorkHours`](../classes/WorkHours.md)

open hours
information about work hours of the local establishment

#### Defined in

[main.ts:38682](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38682)
