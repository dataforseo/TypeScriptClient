[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataBusinessListingsSearchLiveItem

# Class: BusinessDataBusinessListingsSearchLiveItem

Defined in: main.ts:211236

## Implements

- [`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataBusinessListingsSearchLiveItem()

> **new BusinessDataBusinessListingsSearchLiveItem**(`data`?): [`BusinessDataBusinessListingsSearchLiveItem`](BusinessDataBusinessListingsSearchLiveItem.md)

Defined in: main.ts:211348

#### Parameters

##### data?

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md)

#### Returns

[`BusinessDataBusinessListingsSearchLiveItem`](BusinessDataBusinessListingsSearchLiveItem.md)

## Properties

### additional\_categories?

> `optional` **additional\_categories**: `string`[]

Defined in: main.ts:211253

additional business categories
additional Google My Business categories that describe the services provided by the business entity in more detail

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`additional_categories`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#additional_categories)

***

### address?

> `optional` **address**: `string`

Defined in: main.ts:211262

address of the business entity

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`address`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#address)

***

### address\_info?

> `optional` **address\_info**: [`AddressInfo`](AddressInfo.md)

Defined in: main.ts:211264

object containing address components of the business entity

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`address_info`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#address_info)

***

### attributes?

> `optional` **attributes**: [`BusinessDataAttributesInfo`](BusinessDataAttributesInfo.md)

Defined in: main.ts:211295

service details in a form of user-reviewed checks;
service details of a business entity displayed in a form of checks and based on user feedback and business category

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`attributes`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#attributes)

***

### category?

> `optional` **category**: `string`

Defined in: main.ts:211247

business category
Google My Business general category that best describes the services provided by the business entity

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`category`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#category)

***

### category\_ids?

> `optional` **category\_ids**: `string`[]

Defined in: main.ts:211250

global category IDs
universal category IDs that do not change based on the selected country

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`category_ids`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#category_ids)

***

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:211334

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`check_url`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#check_url)

***

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:211257

google-defined client id
unique id of a local establishment
learn more about the identifier in this help center article

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`cid`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#cid)

***

### contact\_info?

> `optional` **contact\_info**: [`BusinessDataContactInfo`](BusinessDataContactInfo.md)[]

Defined in: main.ts:211331

available contacts of the business
list of contacts to interact with the business

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`contact_info`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#contact_info)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:211244

description of the element in SERP
the description of the business entity for which the results are collected

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`description`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#description)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:211274

domain of the business entity

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`domain`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#domain)

***

### feature\_id?

> `optional` **feature\_id**: `string`

Defined in: main.ts:211260

the unique identifier of the element in SERP
learn more about the identifier in this help center article

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`feature_id`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#feature_id)

***

### first\_seen?

> `optional` **first\_seen**: `string`

Defined in: main.ts:211344

date and time when our crawler found the business listing element for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-03-11 10:04:11 +00:00

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`first_seen`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#first_seen)

***

### hotel\_rating?

> `optional` **hotel\_rating**: `number`

Defined in: main.ts:211310

hotel class rating
class ratings range between 1-5 stars, learn more
if there is no hotel class rating information, the value will be null

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`hotel_rating`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#hotel_rating)

***

### is\_claimed?

> `optional` **is\_claimed**: `boolean`

Defined in: main.ts:211292

shows whether the entity is verified by its owner on Google Maps

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`is_claimed`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#is_claimed)

***

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

Defined in: main.ts:211339

date and time when the data was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-26 09:03:15 +00:00

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`last_updated_time`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#last_updated_time)

***

### latitude?

> `optional` **latitude**: `number`

Defined in: main.ts:211286

latitude coordinate of the local establishments in google maps
example:
"latitude": 51.584091

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`latitude`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#latitude)

***

### local\_business\_links?

> `optional` **local\_business\_links**: [`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)[]

Defined in: main.ts:211328

available interactions with the business
list of options to interact with the business directly from search results

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`local_business_links`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#local_business_links)

***

### logo?

> `optional` **logo**: `string`

Defined in: main.ts:211276

URL of the logo featured in Google My Business profile

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`logo`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#logo)

***

### longitude?

> `optional` **longitude**: `number`

Defined in: main.ts:211290

longitude coordinate of the local establishment in google maps
example:
"longitude": -0.31365919999999997

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`longitude`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#longitude)

***

### main\_image?

> `optional` **main\_image**: `string`

Defined in: main.ts:211278

URL of the main image featured in Google My Business profile

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`main_image`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#main_image)

***

### people\_also\_search?

> `optional` **people\_also\_search**: [`PeopleAlsoSearch`](PeopleAlsoSearch.md)[]

Defined in: main.ts:211319

related business entities

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`people_also_search`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#people_also_search)

***

### phone?

> `optional` **phone**: `string`

Defined in: main.ts:211270

phone number of the business entity

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`phone`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#phone)

***

### place\_id?

> `optional` **place\_id**: `string`

Defined in: main.ts:211268

unique place identifier
place id of the local establishment featured in the element
learn more about the identifier in this help center article

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`place_id`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#place_id)

***

### place\_topics?

> `optional` **place\_topics**: `object`

Defined in: main.ts:211303

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

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`place_topics`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#place_topics)

***

### popular\_times?

> `optional` **popular\_times**: [`PopularTimes`](PopularTimes.md)

Defined in: main.ts:211325

popular times
information related to busy hours of the business entity

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`popular_times`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#popular_times)

***

### price\_level?

> `optional` **price\_level**: `string`

Defined in: main.ts:211314

property price level
can take values: inexpensive, moderate, expensive, very_expensive
if there is no price level information, the value will be null

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`price_level`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#price_level)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:211306

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`rating`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#rating)

***

### rating\_distribution?

> `optional` **rating\_distribution**: `object`

Defined in: main.ts:211317

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`rating_distribution`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#rating_distribution)

***

### snippet?

> `optional` **snippet**: `string`

Defined in: main.ts:211282

additional information on the business entity

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`snippet`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#snippet)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:211241

title of the element in SERP
the name of the business entity for which the results are collected

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`title`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#title)

***

### total\_photos?

> `optional` **total\_photos**: `number`

Defined in: main.ts:211280

total count of images featured in Google My Business profile

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`total_photos`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#total_photos)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:211238

type of element

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`type`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:211272

absolute url of the business entity

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`url`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#url)

***

### work\_time?

> `optional` **work\_time**: [`WorkTime`](WorkTime.md)

Defined in: main.ts:211322

work time details
information related to operational hours of the business entity

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`work_time`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#work_time)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:211357

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:211440

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataBusinessListingsSearchLiveItem`](BusinessDataBusinessListingsSearchLiveItem.md)

Defined in: main.ts:211433

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataBusinessListingsSearchLiveItem`](BusinessDataBusinessListingsSearchLiveItem.md)
