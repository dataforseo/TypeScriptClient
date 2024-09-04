[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / GoogleBusinessInfoBusinessDataSerpElementItem

# Class: GoogleBusinessInfoBusinessDataSerpElementItem

## Extends

- [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

## Implements

- [`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleBusinessInfoBusinessDataSerpElementItem()

> **new GoogleBusinessInfoBusinessDataSerpElementItem**(`data`?): [`GoogleBusinessInfoBusinessDataSerpElementItem`](GoogleBusinessInfoBusinessDataSerpElementItem.md)

#### Parameters

• **data?**: [`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md)

#### Returns

[`GoogleBusinessInfoBusinessDataSerpElementItem`](GoogleBusinessInfoBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`constructor`](BaseBusinessDataSerpElementItem.md#constructors)

#### Defined in

main.ts:206124

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`_discriminator`](BaseBusinessDataSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21279

***

### additional\_categories?

> `optional` **additional\_categories**: `string`[]

additional business categories
additional Google My Business categories that describe the services provided by the business entity in more detail

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`additional_categories`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#additional_categories)

#### Defined in

main.ts:206031

***

### address?

> `optional` **address**: `string`

address of the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`address`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#address)

#### Defined in

main.ts:206041

***

### address\_info?

> `optional` **address\_info**: [`AddressInfo`](AddressInfo.md)

object containing address components of the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`address_info`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#address_info)

#### Defined in

main.ts:206043

***

### attributes?

> `optional` **attributes**: [`BusinessDataAttributesInfo`](BusinessDataAttributesInfo.md)

service details in a form of user-reviewed checks;
service details of a business entity displayed in a form of checks and based on user feedback and business category

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`attributes`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#attributes)

#### Defined in

main.ts:206079

***

### category?

> `optional` **category**: `string`

business category
Google My Business general category that best describes the services provided by the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`category`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#category)

#### Defined in

main.ts:206025

***

### category\_ids?

> `optional` **category\_ids**: `string`[]

global category IDs
universal category IDs that do not change based on the selected country

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`category_ids`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#category_ids)

#### Defined in

main.ts:206028

***

### cid?

> `optional` **cid**: `string`

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews
learn more about the identifier in this help center article

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`cid`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#cid)

#### Defined in

main.ts:206036

***

### contact\_url?

> `optional` **contact\_url**: `string`

URL of the preferred contact page

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`contact_url`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#contact_url)

#### Defined in

main.ts:206053

***

### contributor\_url?

> `optional` **contributor\_url**: `string`

URL of the user’s or entity’s Local Guides profile, if available

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`contributor_url`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#contributor_url)

#### Defined in

main.ts:206055

***

### description?

> `optional` **description**: `string`

description of the element in SERP
the description of the business entity for which the results are collected

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`description`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#description)

#### Defined in

main.ts:206022

***

### directory?

> `optional` **directory**: [`BusinessDirectoryInfo`](BusinessDirectoryInfo.md)

items of the directory
includes information about businesses that are located within the target business establishment and have the same address

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`directory`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#directory)

#### Defined in

main.ts:206120

***

### domain?

> `optional` **domain**: `string`

domain of the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`domain`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#domain)

#### Defined in

main.ts:206057

***

### feature\_id?

> `optional` **feature\_id**: `string`

the unique identifier of the element in SERP
learn more about the identifier in this help center article

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`feature_id`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#feature_id)

#### Defined in

main.ts:206039

***

### hotel\_rating?

> `optional` **hotel\_rating**: `number`

hotel class rating
class ratings range between 1-5 stars, learn more
if there is no hotel class rating information, the value will be null

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`hotel_rating`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#hotel_rating)

#### Defined in

main.ts:206094

***

### is\_claimed?

> `optional` **is\_claimed**: `boolean`

shows whether the entity is verified by its owner on Google Maps

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`is_claimed`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#is_claimed)

#### Defined in

main.ts:206075

***

### is\_directory\_item?

> `optional` **is\_directory\_item**: `boolean`

business establishment is a part of the directory
indicates whether the business establishment is a part of the directory;
if true, the item is a part of the larger directory of businesses with the same address (e.g., a mall or a business centre);
note: if the business establishment is a parent item in the directory, the value will be null

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`is_directory_item`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#is_directory_item)

#### Defined in

main.ts:206117

***

### latitude?

> `optional` **latitude**: `number`

latitude coordinate of the local establishments in google maps
example:
"latitude": 51.584091

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`latitude`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#latitude)

#### Defined in

main.ts:206069

***

### local\_business\_links?

> `optional` **local\_business\_links**: [`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)[]

available interactions with the business
list of options to interact with the business directly from search results

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`local_business_links`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#local_business_links)

#### Defined in

main.ts:206112

***

### logo?

> `optional` **logo**: `string`

URL of the logo featured in Google My Business profile

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`logo`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#logo)

#### Defined in

main.ts:206059

***

### longitude?

> `optional` **longitude**: `number`

longitude coordinate of the local establishment in google maps
example:
"longitude": -0.31365919999999997

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`longitude`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#longitude)

#### Defined in

main.ts:206073

***

### main\_image?

> `optional` **main\_image**: `string`

URL of the main image featured in Google My Business profile

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`main_image`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#main_image)

#### Defined in

main.ts:206061

***

### people\_also\_search?

> `optional` **people\_also\_search**: [`PeopleAlsoSearch`](PeopleAlsoSearch.md)[]

related business entities

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`people_also_search`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#people_also_search)

#### Defined in

main.ts:206103

***

### phone?

> `optional` **phone**: `string`

phone number of the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`phone`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#phone)

#### Defined in

main.ts:206049

***

### place\_id?

> `optional` **place\_id**: `string`

unique place identifier
place id of the local establishment featured in the element
learn more about the identifier in this help center article

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`place_id`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#place_id)

#### Defined in

main.ts:206047

***

### place\_topics?

> `optional` **place\_topics**: `object`

keywords mentioned in customer reviews
contains most popular keywords related to products/services mentioned in customer reviews of a business entity and the number of reviews mentioning each keyword
example: 
"place_topics": {
"egg roll": 48,
"birthday": 33
}

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`place_topics`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#place_topics)

#### Defined in

main.ts:206087

***

### popular\_times?

> `optional` **popular\_times**: [`PopularTimes`](PopularTimes.md)

popular times
information related to busy hours of the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`popular_times`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#popular_times)

#### Defined in

main.ts:206109

***

### position?

> `optional` **position**: `string`

the alignment in SERP

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`position`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#position)

#### Defined in

main.ts:206016

***

### price\_level?

> `optional` **price\_level**: `string`

property price level
can take values: inexpensive, moderate, expensive, very_expensive
if there is no price level information, the value will be null

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`price_level`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#price_level)

#### Defined in

main.ts:206098

***

### questions\_and\_answers\_count?

> `optional` **questions\_and\_answers\_count**: `number`

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`questions_and_answers_count`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#questions_and_answers_count)

#### Defined in

main.ts:206076

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank among all the elements

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:206014

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`rank_group`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#rank_group)

#### Defined in

main.ts:206012

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`rating`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#rating)

#### Defined in

main.ts:206090

***

### rating\_distribution?

> `optional` **rating\_distribution**: `object`

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`rating_distribution`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#rating_distribution)

#### Defined in

main.ts:206101

***

### snippet?

> `optional` **snippet**: `string`

additional information on the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`snippet`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#snippet)

#### Defined in

main.ts:206065

***

### title?

> `optional` **title**: `string`

title of the element in SERP
the name of the business entity for which the results are collected

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`title`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#title)

#### Defined in

main.ts:206019

***

### total\_photos?

> `optional` **total\_photos**: `number`

total count of images featured in Google My Business profile

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`total_photos`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#total_photos)

#### Defined in

main.ts:206063

***

### url?

> `optional` **url**: `string`

absolute url of the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`url`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#url)

#### Defined in

main.ts:206051

***

### work\_time?

> `optional` **work\_time**: [`WorkInfo`](WorkInfo.md)

work time details
information related to operational hours of the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`work_time`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#work_time)

#### Defined in

main.ts:206106

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`init`](BaseBusinessDataSerpElementItem.md#init)

#### Defined in

main.ts:206129

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`toJSON`](BaseBusinessDataSerpElementItem.md#tojson)

#### Defined in

main.ts:206212

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleBusinessInfoBusinessDataSerpElementItem`](GoogleBusinessInfoBusinessDataSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`GoogleBusinessInfoBusinessDataSerpElementItem`](GoogleBusinessInfoBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`fromJS`](BaseBusinessDataSerpElementItem.md#fromjs)

#### Defined in

main.ts:206205
