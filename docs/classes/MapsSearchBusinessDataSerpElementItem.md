[**Documentation**](../README.md)

***

[Documentation](../README.md) / MapsSearchBusinessDataSerpElementItem

# Class: MapsSearchBusinessDataSerpElementItem

Defined in: main.ts:213726

## Extends

- [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

## Implements

- [`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MapsSearchBusinessDataSerpElementItem()

> **new MapsSearchBusinessDataSerpElementItem**(`data`?): [`MapsSearchBusinessDataSerpElementItem`](MapsSearchBusinessDataSerpElementItem.md)

Defined in: main.ts:213805

#### Parameters

##### data?

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md)

#### Returns

[`MapsSearchBusinessDataSerpElementItem`](MapsSearchBusinessDataSerpElementItem.md)

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

Defined in: main.ts:213761

additional business categories
additional Google My Business categories that describe the services provided by the business entity in more detail

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`additional_categories`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#additional_categories)

***

### address?

> `optional` **address**: `string`

Defined in: main.ts:213743

address of the business entity

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`address`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#address)

***

### address\_info?

> `optional` **address\_info**: [`AddressInfo`](AddressInfo.md)

Defined in: main.ts:213745

object containing address components of the business entity

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`address_info`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#address_info)

***

### category?

> `optional` **category**: `string`

Defined in: main.ts:213758

business category
Google My Business general category that best describes the services provided by the business entity

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`category`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#category)

***

### category\_ids?

> `optional` **category\_ids**: `string`[]

Defined in: main.ts:213772

global category IDs
universal category IDs that do not change based on the selected country

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`category_ids`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#category_ids)

***

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:213783

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews
learn more about the identifier in this help center article

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`cid`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#cid)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:213728

domain of the business entity

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`domain`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#domain)

***

### feature\_id?

> `optional` **feature\_id**: `string`

Defined in: main.ts:213778

the unique identifier of the element in SERP
learn more about the identifier in this help center article

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`feature_id`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#feature_id)

***

### hotel\_rating?

> `optional` **hotel\_rating**: `number`

Defined in: main.ts:213769

hotel class rating
class ratings range between 1-5 stars, learn more
if there is no hotel class rating information, the value will be null

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`hotel_rating`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#hotel_rating)

***

### is\_claimed?

> `optional` **is\_claimed**: `boolean`

Defined in: main.ts:213793

shows whether the entity is verified by its owner on Google Maps

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`is_claimed`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#is_claimed)

***

### is\_directory\_item?

> `optional` **is\_directory\_item**: `boolean`

Defined in: main.ts:213801

business establishment is a part of the directory
indicates whether the business establishment is a part of the directory;
if true, the item is a part of the larger directory of businesses with the same address (e.g., a mall or a business centre);
note: if the business establishment is a parent item in the directory, the value will be null

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`is_directory_item`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#is_directory_item)

***

### latitude?

> `optional` **latitude**: `number`

Defined in: main.ts:213787

latitude coordinate of the local establishments in google maps
example:
"latitude": 51.584091

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`latitude`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#latitude)

***

### local\_justifications?

> `optional` **local\_justifications**: `string`[]

Defined in: main.ts:213796

Google local justifications
snippets of text that “justify” why the business is showing up for search query

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`local_justifications`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#local_justifications)

***

### longitude?

> `optional` **longitude**: `number`

Defined in: main.ts:213791

longitude coordinate of the local establishment in google maps
example:
"longitude": -0.31365919999999997

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`longitude`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#longitude)

***

### main\_image?

> `optional` **main\_image**: `string`

Defined in: main.ts:213753

URL of the main image featured in Google My Business profile

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`main_image`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#main_image)

***

### phone?

> `optional` **phone**: `string`

Defined in: main.ts:213751

phone number of the business entity

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`phone`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#phone)

***

### place\_id?

> `optional` **place\_id**: `string`

Defined in: main.ts:213749

unique place identifier
place id of the local establishment featured in the element
learn more about the identifier in this help center article

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`place_id`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#place_id)

***

### price\_level?

> `optional` **price\_level**: `string`

Defined in: main.ts:213765

property price level
can take values: inexpensive, moderate, expensive, very_expensive
if there is no price level information, the value will be null

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`price_level`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#price_level)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22209

absolute rank among all the elements

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`rank_absolute`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`rank_absolute`](BaseBusinessDataSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22207

position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`rank_group`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#rank_group)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`rank_group`](BaseBusinessDataSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:213736

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`rating`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#rating)

***

### rating\_distribution?

> `optional` **rating\_distribution**: `object`

Defined in: main.ts:213739

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`rating_distribution`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#rating_distribution)

***

### snippet?

> `optional` **snippet**: `string`

Defined in: main.ts:213741

additional information about the business entity

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`snippet`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#snippet)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:213731

directory title
can take the following values: At this place, Directory

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`title`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#title)

***

### total\_photos?

> `optional` **total\_photos**: `number`

Defined in: main.ts:213755

total count of images featured in Google My Business profile

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`total_photos`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#total_photos)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22204

type of element

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`type`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#type)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`type`](BaseBusinessDataSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:213733

URL to view the menu

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`url`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#url)

***

### work\_hours?

> `optional` **work\_hours**: [`WorkHours`](WorkHours.md)

Defined in: main.ts:213775

open hours
information about work hours of the local establishment

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`work_hours`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#work_hours)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:213810

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

Defined in: main.ts:213870

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`toJSON`](BaseBusinessDataSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`MapsSearchBusinessDataSerpElementItem`](MapsSearchBusinessDataSerpElementItem.md)

Defined in: main.ts:213863

#### Parameters

##### data

`any`

#### Returns

[`MapsSearchBusinessDataSerpElementItem`](MapsSearchBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`fromJS`](BaseBusinessDataSerpElementItem.md#fromjs)
