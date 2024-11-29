[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleBusinessInfoBusinessDataSerpElementItem

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

##### data?

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md)

#### Returns

[`GoogleBusinessInfoBusinessDataSerpElementItem`](GoogleBusinessInfoBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`constructor`](BaseBusinessDataSerpElementItem.md#constructors)

#### Defined in

main.ts:214119

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`_discriminator`](BaseBusinessDataSerpElementItem.md#_discriminator)

#### Defined in

main.ts:22211

***

### additional\_categories?

> `optional` **additional\_categories**: `string`[]

additional business categories
additional Google My Business categories that describe the services provided by the business entity in more detail

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`additional_categories`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#additional_categories)

#### Defined in

main.ts:214023

***

### address?

> `optional` **address**: `string`

address of the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`address`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#address)

#### Defined in

main.ts:214033

***

### address\_info?

> `optional` **address\_info**: [`AddressInfo`](AddressInfo.md)

object containing address components of the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`address_info`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#address_info)

#### Defined in

main.ts:214035

***

### attributes?

> `optional` **attributes**: [`BusinessDataAttributesInfo`](BusinessDataAttributesInfo.md)

service details in a form of user-reviewed checks;
service details of a business entity displayed in a form of checks and based on user feedback and business category

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`attributes`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#attributes)

#### Defined in

main.ts:214074

***

### book\_online\_url?

> `optional` **book\_online\_url**: `string`

URL in the ‘book online’ button of the element
URL directing users to the online booking or order page of the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`book_online_url`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#book_online_url)

#### Defined in

main.ts:214050

***

### category?

> `optional` **category**: `string`

business category
Google My Business general category that best describes the services provided by the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`category`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#category)

#### Defined in

main.ts:214017

***

### category\_ids?

> `optional` **category\_ids**: `string`[]

global category IDs
universal category IDs that do not change based on the selected country

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`category_ids`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#category_ids)

#### Defined in

main.ts:214020

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

main.ts:214028

***

### contact\_url?

> `optional` **contact\_url**: `string`

URL of the preferred contact page

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`contact_url`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#contact_url)

#### Defined in

main.ts:214045

***

### contributor\_url?

> `optional` **contributor\_url**: `string`

URL of the user’s or entity’s Local Guides profile, if available

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`contributor_url`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#contributor_url)

#### Defined in

main.ts:214047

***

### description?

> `optional` **description**: `string`

description of the element in SERP
the description of the business entity for which the results are collected

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`description`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#description)

#### Defined in

main.ts:214014

***

### directory?

> `optional` **directory**: [`BusinessDirectoryInfo`](BusinessDirectoryInfo.md)

items of the directory
includes information about businesses that are located within the target business establishment and have the same address

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`directory`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#directory)

#### Defined in

main.ts:214115

***

### domain?

> `optional` **domain**: `string`

domain of the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`domain`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#domain)

#### Defined in

main.ts:214052

***

### feature\_id?

> `optional` **feature\_id**: `string`

the unique identifier of the element in SERP
learn more about the identifier in this help center article

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`feature_id`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#feature_id)

#### Defined in

main.ts:214031

***

### hotel\_rating?

> `optional` **hotel\_rating**: `number`

hotel class rating
class ratings range between 1-5 stars, learn more
if there is no hotel class rating information, the value will be null

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`hotel_rating`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#hotel_rating)

#### Defined in

main.ts:214089

***

### is\_claimed?

> `optional` **is\_claimed**: `boolean`

shows whether the entity is verified by its owner on Google Maps

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`is_claimed`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#is_claimed)

#### Defined in

main.ts:214070

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

main.ts:214112

***

### latitude?

> `optional` **latitude**: `number`

latitude coordinate of the local establishments in google maps
example:
"latitude": 51.584091

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`latitude`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#latitude)

#### Defined in

main.ts:214064

***

### local\_business\_links?

> `optional` **local\_business\_links**: [`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)[]

available interactions with the business
list of options to interact with the business directly from search results

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`local_business_links`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#local_business_links)

#### Defined in

main.ts:214107

***

### logo?

> `optional` **logo**: `string`

URL of the logo featured in Google My Business profile

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`logo`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#logo)

#### Defined in

main.ts:214054

***

### longitude?

> `optional` **longitude**: `number`

longitude coordinate of the local establishment in google maps
example:
"longitude": -0.31365919999999997

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`longitude`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#longitude)

#### Defined in

main.ts:214068

***

### main\_image?

> `optional` **main\_image**: `string`

URL of the main image featured in Google My Business profile

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`main_image`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#main_image)

#### Defined in

main.ts:214056

***

### people\_also\_search?

> `optional` **people\_also\_search**: [`PeopleAlsoSearch`](PeopleAlsoSearch.md)[]

related business entities

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`people_also_search`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#people_also_search)

#### Defined in

main.ts:214098

***

### phone?

> `optional` **phone**: `string`

phone number of the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`phone`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#phone)

#### Defined in

main.ts:214041

***

### place\_id?

> `optional` **place\_id**: `string`

unique place identifier
place id of the local establishment featured in the element
learn more about the identifier in this help center article

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`place_id`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#place_id)

#### Defined in

main.ts:214039

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

main.ts:214082

***

### popular\_times?

> `optional` **popular\_times**: [`PopularTimes`](PopularTimes.md)

popular times
information related to busy hours of the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`popular_times`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#popular_times)

#### Defined in

main.ts:214104

***

### position?

> `optional` **position**: `string`

the alignment in SERP

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`position`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#position)

#### Defined in

main.ts:214008

***

### price\_level?

> `optional` **price\_level**: `string`

property price level
can take values: inexpensive, moderate, expensive, very_expensive
if there is no price level information, the value will be null

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`price_level`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#price_level)

#### Defined in

main.ts:214093

***

### questions\_and\_answers\_count?

> `optional` **questions\_and\_answers\_count**: `number`

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`questions_and_answers_count`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#questions_and_answers_count)

#### Defined in

main.ts:214071

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank among all the elements

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`rank_absolute`](BaseBusinessDataSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:22209

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`rank_group`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#rank_group)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`rank_group`](BaseBusinessDataSerpElementItem.md#rank_group)

#### Defined in

main.ts:22207

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`rating`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#rating)

#### Defined in

main.ts:214085

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

main.ts:214096

***

### snippet?

> `optional` **snippet**: `string`

additional information on the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`snippet`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#snippet)

#### Defined in

main.ts:214060

***

### title?

> `optional` **title**: `string`

title of the element in SERP
the name of the business entity for which the results are collected

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`title`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#title)

#### Defined in

main.ts:214011

***

### total\_photos?

> `optional` **total\_photos**: `number`

total count of images featured in Google My Business profile

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`total_photos`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#total_photos)

#### Defined in

main.ts:214058

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`type`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#type)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`type`](BaseBusinessDataSerpElementItem.md#type)

#### Defined in

main.ts:22204

***

### url?

> `optional` **url**: `string`

absolute url of the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`url`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#url)

#### Defined in

main.ts:214043

***

### work\_time?

> `optional` **work\_time**: [`WorkTime`](WorkTime.md)

work time details
information related to operational hours of the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`work_time`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#work_time)

#### Defined in

main.ts:214101

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`init`](BaseBusinessDataSerpElementItem.md#init)

#### Defined in

main.ts:214124

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`toJSON`](BaseBusinessDataSerpElementItem.md#tojson)

#### Defined in

main.ts:214206

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleBusinessInfoBusinessDataSerpElementItem`](GoogleBusinessInfoBusinessDataSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`GoogleBusinessInfoBusinessDataSerpElementItem`](GoogleBusinessInfoBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`fromJS`](BaseBusinessDataSerpElementItem.md#fromjs)

#### Defined in

main.ts:214199
