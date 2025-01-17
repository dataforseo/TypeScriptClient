[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleMapsMapsSearchSerpElementItem

# Class: GoogleMapsMapsSearchSerpElementItem

Defined in: main.ts:41735

## Extends

- [`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md)

## Implements

- [`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new GoogleMapsMapsSearchSerpElementItem()

> **new GoogleMapsMapsSearchSerpElementItem**(`data`?): [`GoogleMapsMapsSearchSerpElementItem`](GoogleMapsMapsSearchSerpElementItem.md)

Defined in: main.ts:41805

#### Parameters

##### data?

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md)

#### Returns

[`GoogleMapsMapsSearchSerpElementItem`](GoogleMapsMapsSearchSerpElementItem.md)

#### Overrides

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`constructor`](BaseGoogleMapsSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:41642

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`_discriminator`](BaseGoogleMapsSerpElementItem.md#_discriminator)

***

### additional\_categories?

> `optional` **additional\_categories**: `string`[]

Defined in: main.ts:41774

additional business categories
additional Google My Business categories that describe the services provided by the business entity in more detail

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`additional_categories`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#additional_categories)

***

### address?

> `optional` **address**: `string`

Defined in: main.ts:41756

address line
address of the local establishment featured in the element

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`address`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#address)

***

### address\_info?

> `optional` **address\_info**: [`AddressInfo`](AddressInfo.md)

Defined in: main.ts:41758

object containing address components of the local establishment

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`address_info`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#address_info)

***

### book\_online\_url?

> `optional` **book\_online\_url**: `string`

Defined in: main.ts:41742

URL in the ‘book online’ button of the element
URL directing users to the online booking or order page of the business entity

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`book_online_url`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#book_online_url)

***

### category?

> `optional` **category**: `string`

Defined in: main.ts:41771

business category
Google My Business general category that best describes the services provided by the business entity

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`category`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#category)

***

### category\_ids?

> `optional` **category\_ids**: `string`[]

Defined in: main.ts:41777

global category IDs
universal category IDs that do not change based on the selected country

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`category_ids`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#category_ids)

***

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:41786

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`cid`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#cid)

***

### contact\_url?

> `optional` **contact\_url**: `string`

Defined in: main.ts:41737

URL of the preferred contact page

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`contact_url`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#contact_url)

***

### contributor\_url?

> `optional` **contributor\_url**: `string`

Defined in: main.ts:41739

URL of the user’s or entity’s Local Guides profile, if available

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`contributor_url`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#contributor_url)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:41630

domain in SERP

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`domain`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#domain)

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`domain`](BaseGoogleMapsSerpElementItem.md#domain)

***

### feature\_id?

> `optional` **feature\_id**: `string`

Defined in: main.ts:41782

the unique identifier of the element in SERP

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`feature_id`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#feature_id)

***

### hotel\_rating?

> `optional` **hotel\_rating**: `number`

Defined in: main.ts:41746

hotel class rating
class ratings range between 1-5 stars, learn more
if there is no hotel class rating information, the value will be null

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`hotel_rating`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#hotel_rating)

***

### is\_claimed?

> `optional` **is\_claimed**: `boolean`

Defined in: main.ts:41796

indicates whether ownership of this local establishment is claimed

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`is_claimed`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#is_claimed)

***

### is\_directory\_item?

> `optional` **is\_directory\_item**: `boolean`

Defined in: main.ts:41801

indicates whether this local establishment is a directory

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`is_directory_item`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#is_directory_item)

***

### latitude?

> `optional` **latitude**: `number`

Defined in: main.ts:41790

latitude coordinate of the local establishments in google maps
example:
"latitude": 51.584091

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`latitude`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#latitude)

***

### local\_justifications?

> `optional` **local\_justifications**: [`LocalJustificationInfo`](LocalJustificationInfo.md)[]

Defined in: main.ts:41799

Google local justifications
snippets of text that “justify” why the business is showing up for search query

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`local_justifications`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#local_justifications)

***

### longitude?

> `optional` **longitude**: `number`

Defined in: main.ts:41794

longitude coordinate of the local establishment in google maps
example:
"longitude": -0.31365919999999997

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`longitude`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#longitude)

***

### main\_image?

> `optional` **main\_image**: `string`

Defined in: main.ts:41766

URL of the main image featured in Google My Business profile

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`main_image`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#main_image)

***

### phone?

> `optional` **phone**: `string`

Defined in: main.ts:41764

phone number
phone number of the local establishment featured in the element

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`phone`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#phone)

***

### place\_id?

> `optional` **place\_id**: `string`

Defined in: main.ts:41761

unique place identifier
place id of the local establishment featured in the element

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`place_id`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#place_id)

***

### price\_level?

> `optional` **price\_level**: `string`

Defined in: main.ts:41750

property price level
can take values: inexpensive, moderate, expensive, very_expensive
if there is no price level information, the value will be null

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`price_level`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#price_level)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:41628

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`rank_absolute`](BaseGoogleMapsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:41625

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`rank_group`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#rank_group)

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`rank_group`](BaseGoogleMapsSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:41637

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`rating`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#rating)

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`rating`](BaseGoogleMapsSerpElementItem.md#rating)

***

### rating\_distribution?

> `optional` **rating\_distribution**: `object`

Defined in: main.ts:41640

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`rating_distribution`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#rating_distribution)

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`rating_distribution`](BaseGoogleMapsSerpElementItem.md#rating_distribution)

***

### snippet?

> `optional` **snippet**: `string`

Defined in: main.ts:41753

element snippet
contains the address and other information about the local establishment featured in the element

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`snippet`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#snippet)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:41632

title of the element

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`title`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#title)

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`title`](BaseGoogleMapsSerpElementItem.md#title)

***

### total\_photos?

> `optional` **total\_photos**: `number`

Defined in: main.ts:41768

total count of images featured in Google My Business profile

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`total_photos`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#total_photos)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:41621

type of element

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`type`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#type)

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`type`](BaseGoogleMapsSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:41634

search URL with refinement parameters

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`url`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#url)

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`url`](BaseGoogleMapsSerpElementItem.md#url)

***

### work\_hours?

> `optional` **work\_hours**: [`WorkHours`](WorkHours.md)

Defined in: main.ts:41780

open hours
information about work hours of the local establishment

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`work_hours`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#work_hours)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:41810

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`init`](BaseGoogleMapsSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:41862

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`toJSON`](BaseGoogleMapsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleMapsMapsSearchSerpElementItem`](GoogleMapsMapsSearchSerpElementItem.md)

Defined in: main.ts:41855

#### Parameters

##### data

`any`

#### Returns

[`GoogleMapsMapsSearchSerpElementItem`](GoogleMapsMapsSearchSerpElementItem.md)

#### Overrides

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`fromJS`](BaseGoogleMapsSerpElementItem.md#fromjs)
