[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataBusinessListingsSearchLiveItem

# Class: BusinessDataBusinessListingsSearchLiveItem

## Implements

- [`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataBusinessListingsSearchLiveItem()

> **new BusinessDataBusinessListingsSearchLiveItem**(`data`?): [`BusinessDataBusinessListingsSearchLiveItem`](BusinessDataBusinessListingsSearchLiveItem.md)

#### Parameters

##### data?

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md)

#### Returns

[`BusinessDataBusinessListingsSearchLiveItem`](BusinessDataBusinessListingsSearchLiveItem.md)

#### Defined in

main.ts:211280

## Properties

### additional\_categories?

> `optional` **additional\_categories**: `string`[]

additional business categories
additional Google My Business categories that describe the services provided by the business entity in more detail

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`additional_categories`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#additional_categories)

#### Defined in

main.ts:211185

***

### address?

> `optional` **address**: `string`

address of the business entity

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`address`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#address)

#### Defined in

main.ts:211194

***

### address\_info?

> `optional` **address\_info**: [`AddressInfo`](AddressInfo.md)

object containing address components of the business entity

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`address_info`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#address_info)

#### Defined in

main.ts:211196

***

### attributes?

> `optional` **attributes**: [`BusinessDataAttributesInfo`](BusinessDataAttributesInfo.md)

service details in a form of user-reviewed checks;
service details of a business entity displayed in a form of checks and based on user feedback and business category

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`attributes`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#attributes)

#### Defined in

main.ts:211227

***

### category?

> `optional` **category**: `string`

business category
Google My Business general category that best describes the services provided by the business entity

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`category`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#category)

#### Defined in

main.ts:211179

***

### category\_ids?

> `optional` **category\_ids**: `string`[]

global category IDs
universal category IDs that do not change based on the selected country

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`category_ids`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#category_ids)

#### Defined in

main.ts:211182

***

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`check_url`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#check_url)

#### Defined in

main.ts:211266

***

### cid?

> `optional` **cid**: `string`

google-defined client id
unique id of a local establishment
learn more about the identifier in this help center article

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`cid`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#cid)

#### Defined in

main.ts:211189

***

### contact\_info?

> `optional` **contact\_info**: [`BusinessDataContactInfo`](BusinessDataContactInfo.md)[]

available contacts of the business
list of contacts to interact with the business

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`contact_info`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#contact_info)

#### Defined in

main.ts:211263

***

### description?

> `optional` **description**: `string`

description of the element in SERP
the description of the business entity for which the results are collected

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`description`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#description)

#### Defined in

main.ts:211176

***

### domain?

> `optional` **domain**: `string`

domain of the business entity

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`domain`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#domain)

#### Defined in

main.ts:211206

***

### feature\_id?

> `optional` **feature\_id**: `string`

the unique identifier of the element in SERP
learn more about the identifier in this help center article

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`feature_id`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#feature_id)

#### Defined in

main.ts:211192

***

### first\_seen?

> `optional` **first\_seen**: `string`

date and time when our crawler found the business listing element for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-03-11 10:04:11 +00:00

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`first_seen`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#first_seen)

#### Defined in

main.ts:211276

***

### hotel\_rating?

> `optional` **hotel\_rating**: `number`

hotel class rating
class ratings range between 1-5 stars, learn more
if there is no hotel class rating information, the value will be null

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`hotel_rating`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#hotel_rating)

#### Defined in

main.ts:211242

***

### is\_claimed?

> `optional` **is\_claimed**: `boolean`

shows whether the entity is verified by its owner on Google Maps

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`is_claimed`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#is_claimed)

#### Defined in

main.ts:211224

***

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

date and time when the data was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-26 09:03:15 +00:00

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`last_updated_time`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#last_updated_time)

#### Defined in

main.ts:211271

***

### latitude?

> `optional` **latitude**: `number`

latitude coordinate of the local establishments in google maps
example:
"latitude": 51.584091

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`latitude`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#latitude)

#### Defined in

main.ts:211218

***

### local\_business\_links?

> `optional` **local\_business\_links**: [`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)[]

available interactions with the business
list of options to interact with the business directly from search results

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`local_business_links`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#local_business_links)

#### Defined in

main.ts:211260

***

### logo?

> `optional` **logo**: `string`

URL of the logo featured in Google My Business profile

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`logo`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#logo)

#### Defined in

main.ts:211208

***

### longitude?

> `optional` **longitude**: `number`

longitude coordinate of the local establishment in google maps
example:
"longitude": -0.31365919999999997

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`longitude`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#longitude)

#### Defined in

main.ts:211222

***

### main\_image?

> `optional` **main\_image**: `string`

URL of the main image featured in Google My Business profile

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`main_image`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#main_image)

#### Defined in

main.ts:211210

***

### people\_also\_search?

> `optional` **people\_also\_search**: [`PeopleAlsoSearch`](PeopleAlsoSearch.md)[]

related business entities

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`people_also_search`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#people_also_search)

#### Defined in

main.ts:211251

***

### phone?

> `optional` **phone**: `string`

phone number of the business entity

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`phone`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#phone)

#### Defined in

main.ts:211202

***

### place\_id?

> `optional` **place\_id**: `string`

unique place identifier
place id of the local establishment featured in the element
learn more about the identifier in this help center article

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`place_id`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#place_id)

#### Defined in

main.ts:211200

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

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`place_topics`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#place_topics)

#### Defined in

main.ts:211235

***

### popular\_times?

> `optional` **popular\_times**: [`PopularTimes`](PopularTimes.md)

popular times
information related to busy hours of the business entity

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`popular_times`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#popular_times)

#### Defined in

main.ts:211257

***

### price\_level?

> `optional` **price\_level**: `string`

property price level
can take values: inexpensive, moderate, expensive, very_expensive
if there is no price level information, the value will be null

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`price_level`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#price_level)

#### Defined in

main.ts:211246

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`rating`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#rating)

#### Defined in

main.ts:211238

***

### rating\_distribution?

> `optional` **rating\_distribution**: `object`

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`rating_distribution`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#rating_distribution)

#### Defined in

main.ts:211249

***

### snippet?

> `optional` **snippet**: `string`

additional information on the business entity

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`snippet`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#snippet)

#### Defined in

main.ts:211214

***

### title?

> `optional` **title**: `string`

title of the element in SERP
the name of the business entity for which the results are collected

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`title`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#title)

#### Defined in

main.ts:211173

***

### total\_photos?

> `optional` **total\_photos**: `number`

total count of images featured in Google My Business profile

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`total_photos`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#total_photos)

#### Defined in

main.ts:211212

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`type`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#type)

#### Defined in

main.ts:211170

***

### url?

> `optional` **url**: `string`

absolute url of the business entity

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`url`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#url)

#### Defined in

main.ts:211204

***

### work\_time?

> `optional` **work\_time**: [`WorkTime`](WorkTime.md)

work time details
information related to operational hours of the business entity

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[`work_time`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#work_time)

#### Defined in

main.ts:211254

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:211289

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:211372

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataBusinessListingsSearchLiveItem`](BusinessDataBusinessListingsSearchLiveItem.md)

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataBusinessListingsSearchLiveItem`](BusinessDataBusinessListingsSearchLiveItem.md)

#### Defined in

main.ts:211365
