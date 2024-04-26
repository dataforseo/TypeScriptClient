**Documentation** • [Readme](../README.md) \| [API](../globals.md)

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

### new GoogleBusinessInfoBusinessDataSerpElementItem(data)

> **new GoogleBusinessInfoBusinessDataSerpElementItem**(`data`?): [`GoogleBusinessInfoBusinessDataSerpElementItem`](GoogleBusinessInfoBusinessDataSerpElementItem.md)

#### Parameters

• **data?**: [`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md)

#### Returns

[`GoogleBusinessInfoBusinessDataSerpElementItem`](GoogleBusinessInfoBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`constructor`](BaseBusinessDataSerpElementItem.md#constructors)

#### Source

main.ts:197947

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`_discriminator`](BaseBusinessDataSerpElementItem.md#_discriminator)

#### Source

main.ts:20660

***

### additional\_categories?

> **`optional`** **additional\_categories**: `string`[]

additional business categories
additional Google My Business categories that describe the services provided by the business entity in more detail

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`additional_categories`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#additional_categories)

#### Source

main.ts:197857

***

### address?

> **`optional`** **address**: `string`

address of the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`address`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#address)

#### Source

main.ts:197867

***

### address\_info?

> **`optional`** **address\_info**: [`AddressInfo`](AddressInfo.md)

object containing address components of the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`address_info`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#address_info)

#### Source

main.ts:197869

***

### attributes?

> **`optional`** **attributes**: [`BusinessDataAttributesInfo`](BusinessDataAttributesInfo.md)

service details in a form of user-reviewed checks;
service details of a business entity displayed in a form of checks and based on user feedback and business category

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`attributes`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#attributes)

#### Source

main.ts:197902

***

### category?

> **`optional`** **category**: `string`

business category
Google My Business general category that best describes the services provided by the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`category`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#category)

#### Source

main.ts:197851

***

### category\_ids?

> **`optional`** **category\_ids**: `string`[]

global category IDs
universal category IDs that do not change based on the selected country

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`category_ids`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#category_ids)

#### Source

main.ts:197854

***

### cid?

> **`optional`** **cid**: `string`

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews
learn more about the identifier in this help center article

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`cid`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#cid)

#### Source

main.ts:197862

***

### contact\_url?

> **`optional`** **contact\_url**: `string`

URL of the preferred contact page

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`contact_url`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#contact_url)

#### Source

main.ts:197879

***

### description?

> **`optional`** **description**: `string`

description of the element in SERP
the description of the business entity for which the results are collected

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`description`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#description)

#### Source

main.ts:197848

***

### directory?

> **`optional`** **directory**: [`BusinessDirectoryInfo`](BusinessDirectoryInfo.md)

items of the directory
includes information about businesses that are located within the target business establishment and have the same address

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`directory`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#directory)

#### Source

main.ts:197943

***

### domain?

> **`optional`** **domain**: `string`

domain of the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`domain`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#domain)

#### Source

main.ts:197881

***

### feature\_id?

> **`optional`** **feature\_id**: `string`

the unique identifier of the element in SERP
learn more about the identifier in this help center article

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`feature_id`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#feature_id)

#### Source

main.ts:197865

***

### hotel\_rating?

> **`optional`** **hotel\_rating**: `number`

hotel class rating
class ratings range between 1-5 stars, learn more
if there is no hotel class rating information, the value will be null

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`hotel_rating`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#hotel_rating)

#### Source

main.ts:197917

***

### is\_claimed?

> **`optional`** **is\_claimed**: `boolean`

shows whether the entity is verified by its owner on Google Maps

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`is_claimed`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#is_claimed)

#### Source

main.ts:197899

***

### is\_directory\_item?

> **`optional`** **is\_directory\_item**: `boolean`

business establishment is a part of the directory
indicates whether the business establishment is a part of the directory;
if true, the item is a part of the larger directory of businesses with the same address (e.g., a mall or a business centre);
note: if the business establishment is a parent item in the directory, the value will be null

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`is_directory_item`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#is_directory_item)

#### Source

main.ts:197940

***

### latitude?

> **`optional`** **latitude**: `number`

latitude coordinate of the local establishments in google maps
example:
"latitude": 51.584091

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`latitude`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#latitude)

#### Source

main.ts:197893

***

### local\_business\_links?

> **`optional`** **local\_business\_links**: [`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)[]

available interactions with the business
list of options to interact with the business directly from search results

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`local_business_links`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#local_business_links)

#### Source

main.ts:197935

***

### logo?

> **`optional`** **logo**: `string`

URL of the logo featured in Google My Business profile

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`logo`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#logo)

#### Source

main.ts:197883

***

### longitude?

> **`optional`** **longitude**: `number`

longitude coordinate of the local establishment in google maps
example:
"longitude": -0.31365919999999997

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`longitude`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#longitude)

#### Source

main.ts:197897

***

### main\_image?

> **`optional`** **main\_image**: `string`

URL of the main image featured in Google My Business profile

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`main_image`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#main_image)

#### Source

main.ts:197885

***

### people\_also\_search?

> **`optional`** **people\_also\_search**: [`PeopleAlsoSearch`](PeopleAlsoSearch.md)[]

related business entities

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`people_also_search`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#people_also_search)

#### Source

main.ts:197926

***

### phone?

> **`optional`** **phone**: `string`

phone number of the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`phone`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#phone)

#### Source

main.ts:197875

***

### place\_id?

> **`optional`** **place\_id**: `string`

unique place identifier
place id of the local establishment featured in the element
learn more about the identifier in this help center article

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`place_id`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#place_id)

#### Source

main.ts:197873

***

### place\_topics?

> **`optional`** **place\_topics**: `Object`

keywords mentioned in customer reviews
contains most popular keywords related to products/services mentioned in customer reviews of a business entity and the number of reviews mentioning each keyword
example: 
"place_topics": \{
"egg roll": 48,
"birthday": 33
\}

#### Index signature

 \[`key`: `string`\]: `string`

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`place_topics`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#place_topics)

#### Source

main.ts:197910

***

### popular\_times?

> **`optional`** **popular\_times**: [`PopularTimes`](PopularTimes.md)

popular times
information related to busy hours of the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`popular_times`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#popular_times)

#### Source

main.ts:197932

***

### position?

> **`optional`** **position**: `string`

the alignment in SERP

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`position`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#position)

#### Source

main.ts:197842

***

### price\_level?

> **`optional`** **price\_level**: `string`

property price level
can take values: inexpensive, moderate, expensive, very_expensive
if there is no price level information, the value will be null

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`price_level`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#price_level)

#### Source

main.ts:197921

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank among all the elements

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#rank_absolute)

#### Source

main.ts:197840

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`rank_group`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#rank_group)

#### Source

main.ts:197838

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`rating`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#rating)

#### Source

main.ts:197913

***

### rating\_distribution?

> **`optional`** **rating\_distribution**: `Object`

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`rating_distribution`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#rating_distribution)

#### Source

main.ts:197924

***

### snippet?

> **`optional`** **snippet**: `string`

additional information on the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`snippet`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#snippet)

#### Source

main.ts:197889

***

### title?

> **`optional`** **title**: `string`

title of the element in SERP
the name of the business entity for which the results are collected

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`title`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#title)

#### Source

main.ts:197845

***

### total\_photos?

> **`optional`** **total\_photos**: `number`

total count of images featured in Google My Business profile

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`total_photos`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#total_photos)

#### Source

main.ts:197887

***

### url?

> **`optional`** **url**: `string`

absolute url of the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`url`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#url)

#### Source

main.ts:197877

***

### work\_time?

> **`optional`** **work\_time**: [`WorkInfo`](WorkInfo.md)

work time details
information related to operational hours of the business entity

#### Implementation of

[`IGoogleBusinessInfoBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md).[`work_time`](../interfaces/IGoogleBusinessInfoBusinessDataSerpElementItem.md#work_time)

#### Source

main.ts:197929

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`init`](BaseBusinessDataSerpElementItem.md#init)

#### Source

main.ts:197952

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`toJSON`](BaseBusinessDataSerpElementItem.md#tojson)

#### Source

main.ts:198033

***

### fromJS()

> **`static`** **fromJS**(`data`): [`GoogleBusinessInfoBusinessDataSerpElementItem`](GoogleBusinessInfoBusinessDataSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`GoogleBusinessInfoBusinessDataSerpElementItem`](GoogleBusinessInfoBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`fromJS`](BaseBusinessDataSerpElementItem.md#fromjs)

#### Source

main.ts:198026
