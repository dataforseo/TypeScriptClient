[dataforseo-client](../README.md) / [Exports](../modules.md) / IGoogleBusinessInfoBusinessDataSerpElementItem

# Interface: IGoogleBusinessInfoBusinessDataSerpElementItem

## Hierarchy

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)

  ↳ **`IGoogleBusinessInfoBusinessDataSerpElementItem`**

## Implemented by

- [`GoogleBusinessInfoBusinessDataSerpElementItem`](../classes/GoogleBusinessInfoBusinessDataSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [additional\_categories](IGoogleBusinessInfoBusinessDataSerpElementItem.md#additional_categories)
- [address](IGoogleBusinessInfoBusinessDataSerpElementItem.md#address)
- [address\_info](IGoogleBusinessInfoBusinessDataSerpElementItem.md#address_info)
- [attributes](IGoogleBusinessInfoBusinessDataSerpElementItem.md#attributes)
- [category](IGoogleBusinessInfoBusinessDataSerpElementItem.md#category)
- [category\_ids](IGoogleBusinessInfoBusinessDataSerpElementItem.md#category_ids)
- [cid](IGoogleBusinessInfoBusinessDataSerpElementItem.md#cid)
- [contact\_url](IGoogleBusinessInfoBusinessDataSerpElementItem.md#contact_url)
- [description](IGoogleBusinessInfoBusinessDataSerpElementItem.md#description)
- [directory](IGoogleBusinessInfoBusinessDataSerpElementItem.md#directory)
- [domain](IGoogleBusinessInfoBusinessDataSerpElementItem.md#domain)
- [feature\_id](IGoogleBusinessInfoBusinessDataSerpElementItem.md#feature_id)
- [hotel\_rating](IGoogleBusinessInfoBusinessDataSerpElementItem.md#hotel_rating)
- [is\_claimed](IGoogleBusinessInfoBusinessDataSerpElementItem.md#is_claimed)
- [is\_directory\_item](IGoogleBusinessInfoBusinessDataSerpElementItem.md#is_directory_item)
- [latitude](IGoogleBusinessInfoBusinessDataSerpElementItem.md#latitude)
- [local\_business\_links](IGoogleBusinessInfoBusinessDataSerpElementItem.md#local_business_links)
- [logo](IGoogleBusinessInfoBusinessDataSerpElementItem.md#logo)
- [longitude](IGoogleBusinessInfoBusinessDataSerpElementItem.md#longitude)
- [main\_image](IGoogleBusinessInfoBusinessDataSerpElementItem.md#main_image)
- [people\_also\_search](IGoogleBusinessInfoBusinessDataSerpElementItem.md#people_also_search)
- [phone](IGoogleBusinessInfoBusinessDataSerpElementItem.md#phone)
- [place\_id](IGoogleBusinessInfoBusinessDataSerpElementItem.md#place_id)
- [place\_topics](IGoogleBusinessInfoBusinessDataSerpElementItem.md#place_topics)
- [popular\_times](IGoogleBusinessInfoBusinessDataSerpElementItem.md#popular_times)
- [position](IGoogleBusinessInfoBusinessDataSerpElementItem.md#position)
- [price\_level](IGoogleBusinessInfoBusinessDataSerpElementItem.md#price_level)
- [rank\_absolute](IGoogleBusinessInfoBusinessDataSerpElementItem.md#rank_absolute)
- [rank\_group](IGoogleBusinessInfoBusinessDataSerpElementItem.md#rank_group)
- [rating](IGoogleBusinessInfoBusinessDataSerpElementItem.md#rating)
- [rating\_distribution](IGoogleBusinessInfoBusinessDataSerpElementItem.md#rating_distribution)
- [snippet](IGoogleBusinessInfoBusinessDataSerpElementItem.md#snippet)
- [title](IGoogleBusinessInfoBusinessDataSerpElementItem.md#title)
- [total\_photos](IGoogleBusinessInfoBusinessDataSerpElementItem.md#total_photos)
- [url](IGoogleBusinessInfoBusinessDataSerpElementItem.md#url)
- [work\_time](IGoogleBusinessInfoBusinessDataSerpElementItem.md#work_time)

## Properties

### additional\_categories

• `Optional` **additional\_categories**: `string`[]

additional business categories
additional Google My Business categories that describe the services provided by the business entity in more detail

#### Defined in

[main.ts:191659](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191659)

___

### address

• `Optional` **address**: `string`

address of the business entity

#### Defined in

[main.ts:191669](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191669)

___

### address\_info

• `Optional` **address\_info**: [`AddressInfo`](../classes/AddressInfo.md)

object containing address components of the business entity

#### Defined in

[main.ts:191671](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191671)

___

### attributes

• `Optional` **attributes**: [`BusinessDataAttributesInfo`](../classes/BusinessDataAttributesInfo.md)

service details in a form of user-reviewed checks;
service details of a business entity displayed in a form of checks and based on user feedback and business category

#### Defined in

[main.ts:191704](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191704)

___

### category

• `Optional` **category**: `string`

business category
Google My Business general category that best describes the services provided by the business entity

#### Defined in

[main.ts:191653](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191653)

___

### category\_ids

• `Optional` **category\_ids**: `string`[]

global category IDs
universal category IDs that do not change based on the selected country

#### Defined in

[main.ts:191656](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191656)

___

### cid

• `Optional` **cid**: `string`

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews
learn more about the identifier in this help center article

#### Defined in

[main.ts:191664](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191664)

___

### contact\_url

• `Optional` **contact\_url**: `string`

URL of the preferred contact page

#### Defined in

[main.ts:191681](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191681)

___

### description

• `Optional` **description**: `string`

description of the element in SERP
the description of the business entity for which the results are collected

#### Defined in

[main.ts:191650](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191650)

___

### directory

• `Optional` **directory**: [`BusinessDirectoryInfo`](../classes/BusinessDirectoryInfo.md)

items of the directory
includes information about businesses that are located within the target business establishment and have the same address

#### Defined in

[main.ts:191745](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191745)

___

### domain

• `Optional` **domain**: `string`

domain of the business entity

#### Defined in

[main.ts:191683](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191683)

___

### feature\_id

• `Optional` **feature\_id**: `string`

the unique identifier of the element in SERP
learn more about the identifier in this help center article

#### Defined in

[main.ts:191667](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191667)

___

### hotel\_rating

• `Optional` **hotel\_rating**: `number`

hotel class rating
class ratings range between 1-5 stars, learn more
if there is no hotel class rating information, the value will be null

#### Defined in

[main.ts:191719](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191719)

___

### is\_claimed

• `Optional` **is\_claimed**: `boolean`

shows whether the entity is verified by its owner on Google Maps

#### Defined in

[main.ts:191701](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191701)

___

### is\_directory\_item

• `Optional` **is\_directory\_item**: `boolean`

business establishment is a part of the directory
indicates whether the business establishment is a part of the directory;
if true, the item is a part of the larger directory of businesses with the same address (e.g., a mall or a business centre);
note: if the business establishment is a parent item in the directory, the value will be null

#### Defined in

[main.ts:191742](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191742)

___

### latitude

• `Optional` **latitude**: `number`

latitude coordinate of the local establishments in google maps
example:
"latitude": 51.584091

#### Defined in

[main.ts:191695](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191695)

___

### local\_business\_links

• `Optional` **local\_business\_links**: [`BaseLocalBusinessLink`](../classes/BaseLocalBusinessLink.md)

available interactions with the business
list of options to interact with the business directly from search results

#### Defined in

[main.ts:191737](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191737)

___

### logo

• `Optional` **logo**: `string`

URL of the logo featured in Google My Business profile

#### Defined in

[main.ts:191685](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191685)

___

### longitude

• `Optional` **longitude**: `number`

longitude coordinate of the local establishment in google maps
example:
"longitude": -0.31365919999999997

#### Defined in

[main.ts:191699](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191699)

___

### main\_image

• `Optional` **main\_image**: `string`

URL of the main image featured in Google My Business profile

#### Defined in

[main.ts:191687](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191687)

___

### people\_also\_search

• `Optional` **people\_also\_search**: [`PeopleAlsoSearch`](../classes/PeopleAlsoSearch.md)[]

related business entities

#### Defined in

[main.ts:191728](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191728)

___

### phone

• `Optional` **phone**: `string`

phone number of the business entity

#### Defined in

[main.ts:191677](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191677)

___

### place\_id

• `Optional` **place\_id**: `string`

unique place identifier
place id of the local establishment featured in the element
learn more about the identifier in this help center article

#### Defined in

[main.ts:191675](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191675)

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

#### Defined in

[main.ts:191712](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191712)

___

### popular\_times

• `Optional` **popular\_times**: [`PopularTimes`](../classes/PopularTimes.md)

popular times
information related to busy hours of the business entity

#### Defined in

[main.ts:191734](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191734)

___

### position

• `Optional` **position**: `string`

the alignment in SERP

#### Defined in

[main.ts:191644](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191644)

___

### price\_level

• `Optional` **price\_level**: `string`

property price level
can take values: inexpensive, moderate, expensive, very_expensive
if there is no price level information, the value will be null

#### Defined in

[main.ts:191723](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191723)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank among all the elements

#### Defined in

[main.ts:191642](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191642)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:191640](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191640)

___

### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Defined in

[main.ts:191715](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191715)

___

### rating\_distribution

• `Optional` **rating\_distribution**: `Object`

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:191726](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191726)

___

### snippet

• `Optional` **snippet**: `string`

additional information on the business entity

#### Defined in

[main.ts:191691](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191691)

___

### title

• `Optional` **title**: `string`

title of the element in SERP
the name of the business entity for which the results are collected

#### Defined in

[main.ts:191647](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191647)

___

### total\_photos

• `Optional` **total\_photos**: `number`

total count of images featured in Google My Business profile

#### Defined in

[main.ts:191689](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191689)

___

### url

• `Optional` **url**: `string`

absolute url of the business entity

#### Defined in

[main.ts:191679](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191679)

___

### work\_time

• `Optional` **work\_time**: [`WorkInfo`](../classes/WorkInfo.md)

work time details
information related to operational hours of the business entity

#### Defined in

[main.ts:191731](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191731)
