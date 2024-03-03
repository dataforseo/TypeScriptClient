[Documentation](../README.md) / [Exports](../modules.md) / IMapsSearchBusinessDataSerpElementItem

# Interface: IMapsSearchBusinessDataSerpElementItem

## Hierarchy

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)

  ↳ **`IMapsSearchBusinessDataSerpElementItem`**

## Implemented by

- [`MapsSearchBusinessDataSerpElementItem`](../classes/MapsSearchBusinessDataSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [additional\_categories](IMapsSearchBusinessDataSerpElementItem.md#additional_categories)
- [address](IMapsSearchBusinessDataSerpElementItem.md#address)
- [address\_info](IMapsSearchBusinessDataSerpElementItem.md#address_info)
- [category](IMapsSearchBusinessDataSerpElementItem.md#category)
- [category\_ids](IMapsSearchBusinessDataSerpElementItem.md#category_ids)
- [cid](IMapsSearchBusinessDataSerpElementItem.md#cid)
- [domain](IMapsSearchBusinessDataSerpElementItem.md#domain)
- [feature\_id](IMapsSearchBusinessDataSerpElementItem.md#feature_id)
- [hotel\_rating](IMapsSearchBusinessDataSerpElementItem.md#hotel_rating)
- [is\_claimed](IMapsSearchBusinessDataSerpElementItem.md#is_claimed)
- [is\_directory\_item](IMapsSearchBusinessDataSerpElementItem.md#is_directory_item)
- [latitude](IMapsSearchBusinessDataSerpElementItem.md#latitude)
- [local\_justifications](IMapsSearchBusinessDataSerpElementItem.md#local_justifications)
- [longitude](IMapsSearchBusinessDataSerpElementItem.md#longitude)
- [main\_image](IMapsSearchBusinessDataSerpElementItem.md#main_image)
- [phone](IMapsSearchBusinessDataSerpElementItem.md#phone)
- [place\_id](IMapsSearchBusinessDataSerpElementItem.md#place_id)
- [price\_level](IMapsSearchBusinessDataSerpElementItem.md#price_level)
- [rank\_absolute](IMapsSearchBusinessDataSerpElementItem.md#rank_absolute)
- [rank\_group](IMapsSearchBusinessDataSerpElementItem.md#rank_group)
- [rating](IMapsSearchBusinessDataSerpElementItem.md#rating)
- [rating\_distribution](IMapsSearchBusinessDataSerpElementItem.md#rating_distribution)
- [snippet](IMapsSearchBusinessDataSerpElementItem.md#snippet)
- [title](IMapsSearchBusinessDataSerpElementItem.md#title)
- [total\_photos](IMapsSearchBusinessDataSerpElementItem.md#total_photos)
- [url](IMapsSearchBusinessDataSerpElementItem.md#url)
- [work\_hours](IMapsSearchBusinessDataSerpElementItem.md#work_hours)

## Properties

### additional\_categories

• `Optional` **additional\_categories**: `string`[]

additional business categories
additional Google My Business categories that describe the services provided by the business entity in more detail

#### Defined in

main.ts:191377

___

### address

• `Optional` **address**: `string`

address of the business entity

#### Defined in

main.ts:191359

___

### address\_info

• `Optional` **address\_info**: [`AddressInfo`](../classes/AddressInfo.md)

object containing address components of the business entity

#### Defined in

main.ts:191361

___

### category

• `Optional` **category**: `string`

business category
Google My Business general category that best describes the services provided by the business entity

#### Defined in

main.ts:191374

___

### category\_ids

• `Optional` **category\_ids**: `string`[]

global category IDs
universal category IDs that do not change based on the selected country

#### Defined in

main.ts:191388

___

### cid

• `Optional` **cid**: `string`

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews
learn more about the identifier in this help center article

#### Defined in

main.ts:191399

___

### domain

• `Optional` **domain**: `string`

domain of the business entity

#### Defined in

main.ts:191344

___

### feature\_id

• `Optional` **feature\_id**: `string`

the unique identifier of the element in SERP
learn more about the identifier in this help center article

#### Defined in

main.ts:191394

___

### hotel\_rating

• `Optional` **hotel\_rating**: `number`

hotel class rating
class ratings range between 1-5 stars, learn more
if there is no hotel class rating information, the value will be null

#### Defined in

main.ts:191385

___

### is\_claimed

• `Optional` **is\_claimed**: `boolean`

shows whether the entity is verified by its owner on Google Maps

#### Defined in

main.ts:191409

___

### is\_directory\_item

• `Optional` **is\_directory\_item**: `boolean`

business establishment is a part of the directory
indicates whether the business establishment is a part of the directory;
if true, the item is a part of the larger directory of businesses with the same address (e.g., a mall or a business centre);
note: if the business establishment is a parent item in the directory, the value will be null

#### Defined in

main.ts:191417

___

### latitude

• `Optional` **latitude**: `number`

latitude coordinate of the local establishments in google maps
example:
"latitude": 51.584091

#### Defined in

main.ts:191403

___

### local\_justifications

• `Optional` **local\_justifications**: `string`[]

Google local justifications
snippets of text that “justify” why the business is showing up for search query

#### Defined in

main.ts:191412

___

### longitude

• `Optional` **longitude**: `number`

longitude coordinate of the local establishment in google maps
example:
"longitude": -0.31365919999999997

#### Defined in

main.ts:191407

___

### main\_image

• `Optional` **main\_image**: `string`

URL of the main image featured in Google My Business profile

#### Defined in

main.ts:191369

___

### phone

• `Optional` **phone**: `string`

phone number of the business entity

#### Defined in

main.ts:191367

___

### place\_id

• `Optional` **place\_id**: `string`

unique place identifier
place id of the local establishment featured in the element
learn more about the identifier in this help center article

#### Defined in

main.ts:191365

___

### price\_level

• `Optional` **price\_level**: `string`

property price level
can take values: inexpensive, moderate, expensive, very_expensive
if there is no price level information, the value will be null

#### Defined in

main.ts:191381

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank among all the elements

#### Defined in

main.ts:191342

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group

#### Defined in

main.ts:191340

___

### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Defined in

main.ts:191352

___

### rating\_distribution

• `Optional` **rating\_distribution**: `Object`

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

main.ts:191355

___

### snippet

• `Optional` **snippet**: `string`

additional information about the business entity

#### Defined in

main.ts:191357

___

### title

• `Optional` **title**: `string`

directory title
can take the following values: At this place, Directory

#### Defined in

main.ts:191347

___

### total\_photos

• `Optional` **total\_photos**: `number`

total count of images featured in Google My Business profile

#### Defined in

main.ts:191371

___

### url

• `Optional` **url**: `string`

URL to view the menu

#### Defined in

main.ts:191349

___

### work\_hours

• `Optional` **work\_hours**: [`WorkInfo`](../classes/WorkInfo.md)

open hours
information about work hours of the local establishment

#### Defined in

main.ts:191391
