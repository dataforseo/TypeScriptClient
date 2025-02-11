[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleBusinessInfoBusinessDataSerpElementItem

# Class: GoogleBusinessInfoBusinessDataSerpElementItem

Defined in: main.ts:214576

## Extends

- [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

## Implements

- [`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new GoogleBusinessInfoBusinessDataSerpElementItem()

> **new GoogleBusinessInfoBusinessDataSerpElementItem**(`data`?): [`GoogleBusinessInfoBusinessDataSerpElementItem`](GoogleBusinessInfoBusinessDataSerpElementItem.md)

Defined in: main.ts:214689

#### Parameters

##### data?

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md)

#### Returns

[`GoogleBusinessInfoBusinessDataSerpElementItem`](GoogleBusinessInfoBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`constructor`](BaseBusinessDataSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22211

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`_discriminator`](BaseBusinessDataSerpElementItem.md#_discriminator)

***

### additional\_categories?

> `optional` **additional\_categories**: `string`[]

Defined in: main.ts:214593

additional business categories
additional Google My Business categories that describe the services provided by the business entity in more detail

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`additional_categories`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#additional_categories)

***

### address?

> `optional` **address**: `string`

Defined in: main.ts:214603

address of the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`address`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#address)

***

### address\_info?

> `optional` **address\_info**: [`AddressInfo`](AddressInfo.md)

Defined in: main.ts:214605

object containing address components of the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`address_info`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#address_info)

***

### attributes?

> `optional` **attributes**: [`BusinessDataAttributesInfo`](BusinessDataAttributesInfo.md)

Defined in: main.ts:214644

service details in a form of user-reviewed checks;
service details of a business entity displayed in a form of checks and based on user feedback and business category

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`attributes`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#attributes)

***

### book\_online\_url?

> `optional` **book\_online\_url**: `string`

Defined in: main.ts:214620

URL in the ‘book online’ button of the element
URL directing users to the online booking or order page of the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`book_online_url`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#book_online_url)

***

### category?

> `optional` **category**: `string`

Defined in: main.ts:214587

business category
Google My Business general category that best describes the services provided by the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`category`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#category)

***

### category\_ids?

> `optional` **category\_ids**: `string`[]

Defined in: main.ts:214590

global category IDs
universal category IDs that do not change based on the selected country

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`category_ids`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#category_ids)

***

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:214598

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews
learn more about the identifier in this help center article

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`cid`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#cid)

***

### contact\_url?

> `optional` **contact\_url**: `string`

Defined in: main.ts:214615

URL of the preferred contact page

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`contact_url`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#contact_url)

***

### contributor\_url?

> `optional` **contributor\_url**: `string`

Defined in: main.ts:214617

URL of the user’s or entity’s Local Guides profile, if available

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`contributor_url`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#contributor_url)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:214584

description of the element in SERP
the description of the business entity for which the results are collected

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`description`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#description)

***

### directory?

> `optional` **directory**: [`BusinessDirectoryInfo`](BusinessDirectoryInfo.md)

Defined in: main.ts:214685

items of the directory
includes information about businesses that are located within the target business establishment and have the same address

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`directory`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#directory)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:214622

domain of the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`domain`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#domain)

***

### feature\_id?

> `optional` **feature\_id**: `string`

Defined in: main.ts:214601

the unique identifier of the element in SERP
learn more about the identifier in this help center article

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`feature_id`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#feature_id)

***

### hotel\_rating?

> `optional` **hotel\_rating**: `number`

Defined in: main.ts:214659

hotel class rating
class ratings range between 1-5 stars, learn more
if there is no hotel class rating information, the value will be null

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`hotel_rating`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#hotel_rating)

***

### is\_claimed?

> `optional` **is\_claimed**: `boolean`

Defined in: main.ts:214640

shows whether the entity is verified by its owner on Google Maps

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`is_claimed`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#is_claimed)

***

### is\_directory\_item?

> `optional` **is\_directory\_item**: `boolean`

Defined in: main.ts:214682

business establishment is a part of the directory
indicates whether the business establishment is a part of the directory;
if true, the item is a part of the larger directory of businesses with the same address (e.g., a mall or a business centre);
note: if the business establishment is a parent item in the directory, the value will be null

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`is_directory_item`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#is_directory_item)

***

### latitude?

> `optional` **latitude**: `number`

Defined in: main.ts:214634

latitude coordinate of the local establishments in google maps
example:
"latitude": 51.584091

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`latitude`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#latitude)

***

### local\_business\_links?

> `optional` **local\_business\_links**: [`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)[]

Defined in: main.ts:214677

available interactions with the business
list of options to interact with the business directly from search results

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`local_business_links`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#local_business_links)

***

### logo?

> `optional` **logo**: `string`

Defined in: main.ts:214624

URL of the logo featured in Google My Business profile

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`logo`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#logo)

***

### longitude?

> `optional` **longitude**: `number`

Defined in: main.ts:214638

longitude coordinate of the local establishment in google maps
example:
"longitude": -0.31365919999999997

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`longitude`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#longitude)

***

### main\_image?

> `optional` **main\_image**: `string`

Defined in: main.ts:214626

URL of the main image featured in Google My Business profile

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`main_image`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#main_image)

***

### people\_also\_search?

> `optional` **people\_also\_search**: [`PeopleAlsoSearch`](PeopleAlsoSearch.md)[]

Defined in: main.ts:214668

related business entities

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`people_also_search`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#people_also_search)

***

### phone?

> `optional` **phone**: `string`

Defined in: main.ts:214611

phone number of the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`phone`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#phone)

***

### place\_id?

> `optional` **place\_id**: `string`

Defined in: main.ts:214609

unique place identifier
place id of the local establishment featured in the element
learn more about the identifier in this help center article

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`place_id`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#place_id)

***

### place\_topics?

> `optional` **place\_topics**: `object`

Defined in: main.ts:214652

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

***

### popular\_times?

> `optional` **popular\_times**: [`PopularTimes`](PopularTimes.md)

Defined in: main.ts:214674

popular times
information related to busy hours of the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`popular_times`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#popular_times)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:214578

the alignment in SERP

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`position`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#position)

***

### price\_level?

> `optional` **price\_level**: `string`

Defined in: main.ts:214663

property price level
can take values: inexpensive, moderate, expensive, very_expensive
if there is no price level information, the value will be null

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`price_level`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#price_level)

***

### questions\_and\_answers\_count?

> `optional` **questions\_and\_answers\_count**: `number`

Defined in: main.ts:214641

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`questions_and_answers_count`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#questions_and_answers_count)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22209

absolute rank among all the elements

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`rank_absolute`](BaseBusinessDataSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22207

position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`rank_group`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#rank_group)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`rank_group`](BaseBusinessDataSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:214655

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`rating`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#rating)

***

### rating\_distribution?

> `optional` **rating\_distribution**: `object`

Defined in: main.ts:214666

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`rating_distribution`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#rating_distribution)

***

### snippet?

> `optional` **snippet**: `string`

Defined in: main.ts:214630

additional information on the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`snippet`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#snippet)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:214581

title of the element in SERP
the name of the business entity for which the results are collected

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`title`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#title)

***

### total\_photos?

> `optional` **total\_photos**: `number`

Defined in: main.ts:214628

total count of images featured in Google My Business profile

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`total_photos`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#total_photos)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22204

type of element

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`type`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#type)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`type`](BaseBusinessDataSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:214613

absolute url of the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`url`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#url)

***

### work\_time?

> `optional` **work\_time**: [`WorkTime`](WorkTime.md)

Defined in: main.ts:214671

work time details
information related to operational hours of the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`work_time`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#work_time)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:214694

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`init`](BaseBusinessDataSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:214776

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`toJSON`](BaseBusinessDataSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleBusinessInfoBusinessDataSerpElementItem`](GoogleBusinessInfoBusinessDataSerpElementItem.md)

Defined in: main.ts:214769

#### Parameters

##### data

`any`

#### Returns

[`GoogleBusinessInfoBusinessDataSerpElementItem`](GoogleBusinessInfoBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`fromJS`](BaseBusinessDataSerpElementItem.md#fromjs)
