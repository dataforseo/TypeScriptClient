[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / MapsSearchSerpElementItem

# Class: MapsSearchSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MapsSearchSerpElementItem()

> **new MapsSearchSerpElementItem**(`data`?): [`MapsSearchSerpElementItem`](MapsSearchSerpElementItem.md)

#### Parameters

• **data?**: [`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md)

#### Returns

[`MapsSearchSerpElementItem`](MapsSearchSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:41703

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### additional\_categories?

> `optional` **additional\_categories**: `string`[]

additional business categories
additional Google My Business categories that describe the services provided by the business entity in more detail

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`additional_categories`](../interfaces/IMapsSearchSerpElementItem.md#additional_categories)

#### Defined in

main.ts:41672

***

### address?

> `optional` **address**: `string`

address line
address of the local establishment featured in the element

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`address`](../interfaces/IMapsSearchSerpElementItem.md#address)

#### Defined in

main.ts:41654

***

### address\_info?

> `optional` **address\_info**: [`AddressInfo`](AddressInfo.md)

object containing address components of the local establishment

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`address_info`](../interfaces/IMapsSearchSerpElementItem.md#address_info)

#### Defined in

main.ts:41656

***

### category?

> `optional` **category**: `string`

business category
Google My Business general category that best describes the services provided by the business entity

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`category`](../interfaces/IMapsSearchSerpElementItem.md#category)

#### Defined in

main.ts:41669

***

### category\_ids?

> `optional` **category\_ids**: `string`[]

global category IDs
universal category IDs that do not change based on the selected country

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`category_ids`](../interfaces/IMapsSearchSerpElementItem.md#category_ids)

#### Defined in

main.ts:41675

***

### cid?

> `optional` **cid**: `string`

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`cid`](../interfaces/IMapsSearchSerpElementItem.md#cid)

#### Defined in

main.ts:41684

***

### contact\_url?

> `optional` **contact\_url**: `string`

URL of the preferred contact page

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`contact_url`](../interfaces/IMapsSearchSerpElementItem.md#contact_url)

#### Defined in

main.ts:41632

***

### contributor\_url?

> `optional` **contributor\_url**: `string`

URL of the user’s or entity’s Local Guides profile, if available

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`contributor_url`](../interfaces/IMapsSearchSerpElementItem.md#contributor_url)

#### Defined in

main.ts:41634

***

### domain?

> `optional` **domain**: `string`

domain in the SERP element

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`domain`](../interfaces/IMapsSearchSerpElementItem.md#domain)

#### Defined in

main.ts:41626

***

### feature\_id?

> `optional` **feature\_id**: `string`

the unique identifier of the element in SERP

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`feature_id`](../interfaces/IMapsSearchSerpElementItem.md#feature_id)

#### Defined in

main.ts:41680

***

### hotel\_rating?

> `optional` **hotel\_rating**: `number`

hotel class rating
class ratings range between 1-5 stars, learn more
if there is no hotel class rating information, the value will be null

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`hotel_rating`](../interfaces/IMapsSearchSerpElementItem.md#hotel_rating)

#### Defined in

main.ts:41641

***

### is\_claimed?

> `optional` **is\_claimed**: `boolean`

indicates whether ownership of this local establishment is claimed

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`is_claimed`](../interfaces/IMapsSearchSerpElementItem.md#is_claimed)

#### Defined in

main.ts:41694

***

### is\_directory\_item?

> `optional` **is\_directory\_item**: `boolean`

indicates whether this local establishment is a directory

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`is_directory_item`](../interfaces/IMapsSearchSerpElementItem.md#is_directory_item)

#### Defined in

main.ts:41699

***

### latitude?

> `optional` **latitude**: `number`

latitude coordinate of the local establishments in google maps
example:
"latitude": 51.584091

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`latitude`](../interfaces/IMapsSearchSerpElementItem.md#latitude)

#### Defined in

main.ts:41688

***

### local\_justifications?

> `optional` **local\_justifications**: [`LocalJustificationInfo`](LocalJustificationInfo.md)[]

Google local justifications
snippets of text that “justify” why the business is showing up for search query

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`local_justifications`](../interfaces/IMapsSearchSerpElementItem.md#local_justifications)

#### Defined in

main.ts:41697

***

### longitude?

> `optional` **longitude**: `number`

longitude coordinate of the local establishment in google maps
example:
"longitude": -0.31365919999999997

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`longitude`](../interfaces/IMapsSearchSerpElementItem.md#longitude)

#### Defined in

main.ts:41692

***

### main\_image?

> `optional` **main\_image**: `string`

URL of the main image featured in Google My Business profile

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`main_image`](../interfaces/IMapsSearchSerpElementItem.md#main_image)

#### Defined in

main.ts:41664

***

### phone?

> `optional` **phone**: `string`

phone number
phone number of the local establishment featured in the element

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`phone`](../interfaces/IMapsSearchSerpElementItem.md#phone)

#### Defined in

main.ts:41662

***

### place\_id?

> `optional` **place\_id**: `string`

unique place identifier
place id of the local establishment featured in the element

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`place_id`](../interfaces/IMapsSearchSerpElementItem.md#place_id)

#### Defined in

main.ts:41659

***

### price\_level?

> `optional` **price\_level**: `string`

property price level
can take values: inexpensive, moderate, expensive, very_expensive
if there is no price level information, the value will be null

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`price_level`](../interfaces/IMapsSearchSerpElementItem.md#price_level)

#### Defined in

main.ts:41645

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`rank_absolute`](../interfaces/IMapsSearchSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:41624

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`rank_group`](../interfaces/IMapsSearchSerpElementItem.md#rank_group)

#### Defined in

main.ts:41621

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`rating`](../interfaces/IMapsSearchSerpElementItem.md#rating)

#### Defined in

main.ts:41637

***

### rating\_distribution?

> `optional` **rating\_distribution**: `object`

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`rating_distribution`](../interfaces/IMapsSearchSerpElementItem.md#rating_distribution)

#### Defined in

main.ts:41648

***

### snippet?

> `optional` **snippet**: `string`

element snippet
contains the address and other information about the local establishment featured in the element

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`snippet`](../interfaces/IMapsSearchSerpElementItem.md#snippet)

#### Defined in

main.ts:41651

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`title`](../interfaces/IMapsSearchSerpElementItem.md#title)

#### Defined in

main.ts:41628

***

### total\_photos?

> `optional` **total\_photos**: `number`

total count of images featured in Google My Business profile

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`total_photos`](../interfaces/IMapsSearchSerpElementItem.md#total_photos)

#### Defined in

main.ts:41666

***

### url?

> `optional` **url**: `string`

relevant URL in SERP

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`url`](../interfaces/IMapsSearchSerpElementItem.md#url)

#### Defined in

main.ts:41630

***

### work\_hours?

> `optional` **work\_hours**: [`WorkHours`](WorkHours.md)

open hours
information about work hours of the local establishment

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`work_hours`](../interfaces/IMapsSearchSerpElementItem.md#work_hours)

#### Defined in

main.ts:41678

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Defined in

main.ts:41708

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:41772

***

### fromJS()

> `static` **fromJS**(`data`): [`MapsSearchSerpElementItem`](MapsSearchSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`MapsSearchSerpElementItem`](MapsSearchSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:41765
