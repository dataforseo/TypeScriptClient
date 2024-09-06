[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / GoogleMapsMapsSearchSerpElementItem

# Class: GoogleMapsMapsSearchSerpElementItem

## Extends

- [`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md)

## Implements

- [`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleMapsMapsSearchSerpElementItem()

> **new GoogleMapsMapsSearchSerpElementItem**(`data`?): [`GoogleMapsMapsSearchSerpElementItem`](GoogleMapsMapsSearchSerpElementItem.md)

#### Parameters

• **data?**: [`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md)

#### Returns

[`GoogleMapsMapsSearchSerpElementItem`](GoogleMapsMapsSearchSerpElementItem.md)

#### Overrides

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`constructor`](BaseGoogleMapsSerpElementItem.md#constructors)

#### Defined in

main.ts:39993

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`_discriminator`](BaseGoogleMapsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:39833

***

### additional\_categories?

> `optional` **additional\_categories**: `string`[]

additional business categories
additional Google My Business categories that describe the services provided by the business entity in more detail

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`additional_categories`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#additional_categories)

#### Defined in

main.ts:39962

***

### address?

> `optional` **address**: `string`

address line
address of the local establishment featured in the element

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`address`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#address)

#### Defined in

main.ts:39944

***

### address\_info?

> `optional` **address\_info**: [`AddressInfo`](AddressInfo.md)

object containing address components of the local establishment

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`address_info`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#address_info)

#### Defined in

main.ts:39946

***

### category?

> `optional` **category**: `string`

business category
Google My Business general category that best describes the services provided by the business entity

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`category`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#category)

#### Defined in

main.ts:39959

***

### category\_ids?

> `optional` **category\_ids**: `string`[]

global category IDs
universal category IDs that do not change based on the selected country

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`category_ids`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#category_ids)

#### Defined in

main.ts:39965

***

### cid?

> `optional` **cid**: `string`

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`cid`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#cid)

#### Defined in

main.ts:39974

***

### contact\_url?

> `optional` **contact\_url**: `string`

URL of the preferred contact page

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`contact_url`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#contact_url)

#### Defined in

main.ts:39928

***

### contributor\_url?

> `optional` **contributor\_url**: `string`

URL of the user’s or entity’s Local Guides profile, if available

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`contributor_url`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#contributor_url)

#### Defined in

main.ts:39930

***

### domain?

> `optional` **domain**: `string`

domain in the SERP element

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`domain`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#domain)

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`domain`](BaseGoogleMapsSerpElementItem.md#domain)

#### Defined in

main.ts:39821

***

### feature\_id?

> `optional` **feature\_id**: `string`

the unique identifier of the element in SERP

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`feature_id`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#feature_id)

#### Defined in

main.ts:39970

***

### hotel\_rating?

> `optional` **hotel\_rating**: `number`

hotel class rating
class ratings range between 1-5 stars, learn more
if there is no hotel class rating information, the value will be null

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`hotel_rating`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#hotel_rating)

#### Defined in

main.ts:39934

***

### is\_claimed?

> `optional` **is\_claimed**: `boolean`

indicates whether ownership of this local establishment is claimed

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`is_claimed`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#is_claimed)

#### Defined in

main.ts:39984

***

### is\_directory\_item?

> `optional` **is\_directory\_item**: `boolean`

indicates whether this local establishment is a directory

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`is_directory_item`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#is_directory_item)

#### Defined in

main.ts:39989

***

### latitude?

> `optional` **latitude**: `number`

latitude coordinate of the local establishments in google maps
example:
"latitude": 51.584091

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`latitude`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#latitude)

#### Defined in

main.ts:39978

***

### local\_justifications?

> `optional` **local\_justifications**: [`LocalJustificationInfo`](LocalJustificationInfo.md)[]

Google local justifications
snippets of text that “justify” why the business is showing up for search query

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`local_justifications`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#local_justifications)

#### Defined in

main.ts:39987

***

### longitude?

> `optional` **longitude**: `number`

longitude coordinate of the local establishment in google maps
example:
"longitude": -0.31365919999999997

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`longitude`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#longitude)

#### Defined in

main.ts:39982

***

### main\_image?

> `optional` **main\_image**: `string`

URL of the main image featured in Google My Business profile

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`main_image`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#main_image)

#### Defined in

main.ts:39954

***

### phone?

> `optional` **phone**: `string`

phone number
phone number of the local establishment featured in the element

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`phone`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#phone)

#### Defined in

main.ts:39952

***

### place\_id?

> `optional` **place\_id**: `string`

unique place identifier
place id of the local establishment featured in the element

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`place_id`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#place_id)

#### Defined in

main.ts:39949

***

### price\_level?

> `optional` **price\_level**: `string`

property price level
can take values: inexpensive, moderate, expensive, very_expensive
if there is no price level information, the value will be null

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`price_level`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#price_level)

#### Defined in

main.ts:39938

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`rank_absolute`](BaseGoogleMapsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:39819

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`rank_group`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#rank_group)

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`rank_group`](BaseGoogleMapsSerpElementItem.md#rank_group)

#### Defined in

main.ts:39816

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`rating`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#rating)

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`rating`](BaseGoogleMapsSerpElementItem.md#rating)

#### Defined in

main.ts:39828

***

### rating\_distribution?

> `optional` **rating\_distribution**: `object`

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`rating_distribution`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#rating_distribution)

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`rating_distribution`](BaseGoogleMapsSerpElementItem.md#rating_distribution)

#### Defined in

main.ts:39831

***

### snippet?

> `optional` **snippet**: `string`

element snippet
contains the address and other information about the local establishment featured in the element

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`snippet`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#snippet)

#### Defined in

main.ts:39941

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`title`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#title)

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`title`](BaseGoogleMapsSerpElementItem.md#title)

#### Defined in

main.ts:39823

***

### total\_photos?

> `optional` **total\_photos**: `number`

total count of images featured in Google My Business profile

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`total_photos`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#total_photos)

#### Defined in

main.ts:39956

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`type`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#type)

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`type`](BaseGoogleMapsSerpElementItem.md#type)

#### Defined in

main.ts:39812

***

### url?

> `optional` **url**: `string`

relevant URL in SERP

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`url`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#url)

#### Inherited from

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`url`](BaseGoogleMapsSerpElementItem.md#url)

#### Defined in

main.ts:39825

***

### work\_hours?

> `optional` **work\_hours**: [`WorkHours`](WorkHours.md)

open hours
information about work hours of the local establishment

#### Implementation of

[`IGoogleMapsMapsSearchSerpElementItem`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md).[`work_hours`](../interfaces/IGoogleMapsMapsSearchSerpElementItem.md#work_hours)

#### Defined in

main.ts:39968

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`init`](BaseGoogleMapsSerpElementItem.md#init)

#### Defined in

main.ts:39998

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`toJSON`](BaseGoogleMapsSerpElementItem.md#tojson)

#### Defined in

main.ts:40049

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleMapsMapsSearchSerpElementItem`](GoogleMapsMapsSearchSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`GoogleMapsMapsSearchSerpElementItem`](GoogleMapsMapsSearchSerpElementItem.md)

#### Overrides

[`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md).[`fromJS`](BaseGoogleMapsSerpElementItem.md#fromjs)

#### Defined in

main.ts:40042
