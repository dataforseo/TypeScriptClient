[Documentation](../README.md) / [Exports](../modules.md) / GoogleBusinessInfoBusinessDataSerpElementItem

# Class: GoogleBusinessInfoBusinessDataSerpElementItem

## Hierarchy

- [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

  ↳ **`GoogleBusinessInfoBusinessDataSerpElementItem`**

## Implements

- [`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](GoogleBusinessInfoBusinessDataSerpElementItem.md#constructor)

### Properties

- [\_discriminator](GoogleBusinessInfoBusinessDataSerpElementItem.md#_discriminator)
- [additional\_categories](GoogleBusinessInfoBusinessDataSerpElementItem.md#additional_categories)
- [address](GoogleBusinessInfoBusinessDataSerpElementItem.md#address)
- [address\_info](GoogleBusinessInfoBusinessDataSerpElementItem.md#address_info)
- [attributes](GoogleBusinessInfoBusinessDataSerpElementItem.md#attributes)
- [category](GoogleBusinessInfoBusinessDataSerpElementItem.md#category)
- [category\_ids](GoogleBusinessInfoBusinessDataSerpElementItem.md#category_ids)
- [cid](GoogleBusinessInfoBusinessDataSerpElementItem.md#cid)
- [contact\_url](GoogleBusinessInfoBusinessDataSerpElementItem.md#contact_url)
- [description](GoogleBusinessInfoBusinessDataSerpElementItem.md#description)
- [directory](GoogleBusinessInfoBusinessDataSerpElementItem.md#directory)
- [domain](GoogleBusinessInfoBusinessDataSerpElementItem.md#domain)
- [feature\_id](GoogleBusinessInfoBusinessDataSerpElementItem.md#feature_id)
- [hotel\_rating](GoogleBusinessInfoBusinessDataSerpElementItem.md#hotel_rating)
- [is\_claimed](GoogleBusinessInfoBusinessDataSerpElementItem.md#is_claimed)
- [is\_directory\_item](GoogleBusinessInfoBusinessDataSerpElementItem.md#is_directory_item)
- [latitude](GoogleBusinessInfoBusinessDataSerpElementItem.md#latitude)
- [local\_business\_links](GoogleBusinessInfoBusinessDataSerpElementItem.md#local_business_links)
- [logo](GoogleBusinessInfoBusinessDataSerpElementItem.md#logo)
- [longitude](GoogleBusinessInfoBusinessDataSerpElementItem.md#longitude)
- [main\_image](GoogleBusinessInfoBusinessDataSerpElementItem.md#main_image)
- [people\_also\_search](GoogleBusinessInfoBusinessDataSerpElementItem.md#people_also_search)
- [phone](GoogleBusinessInfoBusinessDataSerpElementItem.md#phone)
- [place\_id](GoogleBusinessInfoBusinessDataSerpElementItem.md#place_id)
- [place\_topics](GoogleBusinessInfoBusinessDataSerpElementItem.md#place_topics)
- [popular\_times](GoogleBusinessInfoBusinessDataSerpElementItem.md#popular_times)
- [position](GoogleBusinessInfoBusinessDataSerpElementItem.md#position)
- [price\_level](GoogleBusinessInfoBusinessDataSerpElementItem.md#price_level)
- [rank\_absolute](GoogleBusinessInfoBusinessDataSerpElementItem.md#rank_absolute)
- [rank\_group](GoogleBusinessInfoBusinessDataSerpElementItem.md#rank_group)
- [rating](GoogleBusinessInfoBusinessDataSerpElementItem.md#rating)
- [rating\_distribution](GoogleBusinessInfoBusinessDataSerpElementItem.md#rating_distribution)
- [snippet](GoogleBusinessInfoBusinessDataSerpElementItem.md#snippet)
- [title](GoogleBusinessInfoBusinessDataSerpElementItem.md#title)
- [total\_photos](GoogleBusinessInfoBusinessDataSerpElementItem.md#total_photos)
- [url](GoogleBusinessInfoBusinessDataSerpElementItem.md#url)
- [work\_time](GoogleBusinessInfoBusinessDataSerpElementItem.md#work_time)

### Methods

- [init](GoogleBusinessInfoBusinessDataSerpElementItem.md#init)
- [toJSON](GoogleBusinessInfoBusinessDataSerpElementItem.md#tojson)
- [fromJS](GoogleBusinessInfoBusinessDataSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new GoogleBusinessInfoBusinessDataSerpElementItem**(`data?`): [`GoogleBusinessInfoBusinessDataSerpElementItem`](GoogleBusinessInfoBusinessDataSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md) |

#### Returns

[`GoogleBusinessInfoBusinessDataSerpElementItem`](GoogleBusinessInfoBusinessDataSerpElementItem.md)

#### Overrides

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[constructor](BaseBusinessDataSerpElementItem.md#constructor)

#### Defined in

main.ts:196937

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[_discriminator](BaseBusinessDataSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20532

___

### additional\_categories

• `Optional` **additional\_categories**: `string`[]

additional business categories
additional Google My Business categories that describe the services provided by the business entity in more detail

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[additional_categories](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#additional_categories)

#### Defined in

main.ts:196847

___

### address

• `Optional` **address**: `string`

address of the business entity

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[address](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#address)

#### Defined in

main.ts:196857

___

### address\_info

• `Optional` **address\_info**: [`AddressInfo`](AddressInfo.md)

object containing address components of the business entity

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[address_info](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#address_info)

#### Defined in

main.ts:196859

___

### attributes

• `Optional` **attributes**: [`BusinessDataAttributesInfo`](BusinessDataAttributesInfo.md)

service details in a form of user-reviewed checks;
service details of a business entity displayed in a form of checks and based on user feedback and business category

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[attributes](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#attributes)

#### Defined in

main.ts:196892

___

### category

• `Optional` **category**: `string`

business category
Google My Business general category that best describes the services provided by the business entity

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[category](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#category)

#### Defined in

main.ts:196841

___

### category\_ids

• `Optional` **category\_ids**: `string`[]

global category IDs
universal category IDs that do not change based on the selected country

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[category_ids](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#category_ids)

#### Defined in

main.ts:196844

___

### cid

• `Optional` **cid**: `string`

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews
learn more about the identifier in this help center article

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[cid](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#cid)

#### Defined in

main.ts:196852

___

### contact\_url

• `Optional` **contact\_url**: `string`

URL of the preferred contact page

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[contact_url](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#contact_url)

#### Defined in

main.ts:196869

___

### description

• `Optional` **description**: `string`

description of the element in SERP
the description of the business entity for which the results are collected

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[description](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#description)

#### Defined in

main.ts:196838

___

### directory

• `Optional` **directory**: [`BusinessDirectoryInfo`](BusinessDirectoryInfo.md)

items of the directory
includes information about businesses that are located within the target business establishment and have the same address

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[directory](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#directory)

#### Defined in

main.ts:196933

___

### domain

• `Optional` **domain**: `string`

domain of the business entity

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[domain](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#domain)

#### Defined in

main.ts:196871

___

### feature\_id

• `Optional` **feature\_id**: `string`

the unique identifier of the element in SERP
learn more about the identifier in this help center article

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[feature_id](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#feature_id)

#### Defined in

main.ts:196855

___

### hotel\_rating

• `Optional` **hotel\_rating**: `number`

hotel class rating
class ratings range between 1-5 stars, learn more
if there is no hotel class rating information, the value will be null

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[hotel_rating](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#hotel_rating)

#### Defined in

main.ts:196907

___

### is\_claimed

• `Optional` **is\_claimed**: `boolean`

shows whether the entity is verified by its owner on Google Maps

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[is_claimed](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#is_claimed)

#### Defined in

main.ts:196889

___

### is\_directory\_item

• `Optional` **is\_directory\_item**: `boolean`

business establishment is a part of the directory
indicates whether the business establishment is a part of the directory;
if true, the item is a part of the larger directory of businesses with the same address (e.g., a mall or a business centre);
note: if the business establishment is a parent item in the directory, the value will be null

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[is_directory_item](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#is_directory_item)

#### Defined in

main.ts:196930

___

### latitude

• `Optional` **latitude**: `number`

latitude coordinate of the local establishments in google maps
example:
"latitude": 51.584091

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[latitude](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#latitude)

#### Defined in

main.ts:196883

___

### local\_business\_links

• `Optional` **local\_business\_links**: [`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)[]

available interactions with the business
list of options to interact with the business directly from search results

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[local_business_links](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#local_business_links)

#### Defined in

main.ts:196925

___

### logo

• `Optional` **logo**: `string`

URL of the logo featured in Google My Business profile

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[logo](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#logo)

#### Defined in

main.ts:196873

___

### longitude

• `Optional` **longitude**: `number`

longitude coordinate of the local establishment in google maps
example:
"longitude": -0.31365919999999997

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[longitude](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#longitude)

#### Defined in

main.ts:196887

___

### main\_image

• `Optional` **main\_image**: `string`

URL of the main image featured in Google My Business profile

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[main_image](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#main_image)

#### Defined in

main.ts:196875

___

### people\_also\_search

• `Optional` **people\_also\_search**: [`PeopleAlsoSearch`](PeopleAlsoSearch.md)[]

related business entities

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[people_also_search](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#people_also_search)

#### Defined in

main.ts:196916

___

### phone

• `Optional` **phone**: `string`

phone number of the business entity

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[phone](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#phone)

#### Defined in

main.ts:196865

___

### place\_id

• `Optional` **place\_id**: `string`

unique place identifier
place id of the local establishment featured in the element
learn more about the identifier in this help center article

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[place_id](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#place_id)

#### Defined in

main.ts:196863

___

### place\_topics

• `Optional` **place\_topics**: `Object`

keywords mentioned in customer reviews
contains most popular keywords related to products/services mentioned in customer reviews of a business entity and the number of reviews mentioning each keyword
example: 
"place_topics": {
"egg roll": 48,
"birthday": 33
}

#### Index signature

▪ [key: `string`]: `string`

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[place_topics](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#place_topics)

#### Defined in

main.ts:196900

___

### popular\_times

• `Optional` **popular\_times**: [`PopularTimes`](PopularTimes.md)

popular times
information related to busy hours of the business entity

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[popular_times](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#popular_times)

#### Defined in

main.ts:196922

___

### position

• `Optional` **position**: `string`

the alignment in SERP

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[position](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#position)

#### Defined in

main.ts:196832

___

### price\_level

• `Optional` **price\_level**: `string`

property price level
can take values: inexpensive, moderate, expensive, very_expensive
if there is no price level information, the value will be null

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[price_level](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#price_level)

#### Defined in

main.ts:196911

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank among all the elements

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[rank_absolute](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:196830

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[rank_group](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#rank_group)

#### Defined in

main.ts:196828

___

### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[rating](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#rating)

#### Defined in

main.ts:196903

___

### rating\_distribution

• `Optional` **rating\_distribution**: `Object`

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[rating_distribution](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#rating_distribution)

#### Defined in

main.ts:196914

___

### snippet

• `Optional` **snippet**: `string`

additional information on the business entity

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[snippet](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#snippet)

#### Defined in

main.ts:196879

___

### title

• `Optional` **title**: `string`

title of the element in SERP
the name of the business entity for which the results are collected

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[title](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#title)

#### Defined in

main.ts:196835

___

### total\_photos

• `Optional` **total\_photos**: `number`

total count of images featured in Google My Business profile

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[total_photos](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#total_photos)

#### Defined in

main.ts:196877

___

### url

• `Optional` **url**: `string`

absolute url of the business entity

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[url](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#url)

#### Defined in

main.ts:196867

___

### work\_time

• `Optional` **work\_time**: [`WorkInfo`](WorkInfo.md)

work time details
information related to operational hours of the business entity

#### Implementation of

[IGoogleBusinessInfoBusinessDataSerpElementItem](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[work_time](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#work_time)

#### Defined in

main.ts:196919

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

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[init](BaseBusinessDataSerpElementItem.md#init)

#### Defined in

main.ts:196942

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

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[toJSON](BaseBusinessDataSerpElementItem.md#tojson)

#### Defined in

main.ts:197023

___

### fromJS

▸ **fromJS**(`data`): [`GoogleBusinessInfoBusinessDataSerpElementItem`](GoogleBusinessInfoBusinessDataSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`GoogleBusinessInfoBusinessDataSerpElementItem`](GoogleBusinessInfoBusinessDataSerpElementItem.md)

#### Overrides

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[fromJS](BaseBusinessDataSerpElementItem.md#fromjs)

#### Defined in

main.ts:197016
