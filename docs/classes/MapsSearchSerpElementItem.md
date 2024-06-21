**Documentation** • [Readme](../README.md) \| [API](../globals.md)

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

### new MapsSearchSerpElementItem(data)

> **new MapsSearchSerpElementItem**(`data`?): [`MapsSearchSerpElementItem`](MapsSearchSerpElementItem.md)

#### Parameters

• **data?**: [`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md)

#### Returns

[`MapsSearchSerpElementItem`](MapsSearchSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:40618

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19855

***

### additional\_categories?

> **`optional`** **additional\_categories**: `string`[]

additional business categories
additional Google My Business categories that describe the services provided by the business entity in more detail

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`additional_categories`](../interfaces/IMapsSearchSerpElementItem.md#additional_categories)

#### Source

main.ts:40587

***

### address?

> **`optional`** **address**: `string`

address line
address of the local establishment featured in the element

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`address`](../interfaces/IMapsSearchSerpElementItem.md#address)

#### Source

main.ts:40569

***

### address\_info?

> **`optional`** **address\_info**: [`AddressInfo`](AddressInfo.md)

object containing address components of the local establishment

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`address_info`](../interfaces/IMapsSearchSerpElementItem.md#address_info)

#### Source

main.ts:40571

***

### category?

> **`optional`** **category**: `string`

business category
Google My Business general category that best describes the services provided by the business entity

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`category`](../interfaces/IMapsSearchSerpElementItem.md#category)

#### Source

main.ts:40584

***

### category\_ids?

> **`optional`** **category\_ids**: `string`[]

global category IDs
universal category IDs that do not change based on the selected country

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`category_ids`](../interfaces/IMapsSearchSerpElementItem.md#category_ids)

#### Source

main.ts:40590

***

### cid?

> **`optional`** **cid**: `string`

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`cid`](../interfaces/IMapsSearchSerpElementItem.md#cid)

#### Source

main.ts:40599

***

### contact\_url?

> **`optional`** **contact\_url**: `string`

URL of the preferred contact page

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`contact_url`](../interfaces/IMapsSearchSerpElementItem.md#contact_url)

#### Source

main.ts:40549

***

### domain?

> **`optional`** **domain**: `string`

domain in the SERP element

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`domain`](../interfaces/IMapsSearchSerpElementItem.md#domain)

#### Source

main.ts:40543

***

### feature\_id?

> **`optional`** **feature\_id**: `string`

the unique identifier of the element in SERP

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`feature_id`](../interfaces/IMapsSearchSerpElementItem.md#feature_id)

#### Source

main.ts:40595

***

### hotel\_rating?

> **`optional`** **hotel\_rating**: `number`

hotel class rating
class ratings range between 1-5 stars, learn more
if there is no hotel class rating information, the value will be null

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`hotel_rating`](../interfaces/IMapsSearchSerpElementItem.md#hotel_rating)

#### Source

main.ts:40556

***

### is\_claimed?

> **`optional`** **is\_claimed**: `boolean`

indicates whether ownership of this local establishment is claimed

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`is_claimed`](../interfaces/IMapsSearchSerpElementItem.md#is_claimed)

#### Source

main.ts:40609

***

### is\_directory\_item?

> **`optional`** **is\_directory\_item**: `boolean`

indicates whether this local establishment is a directory

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`is_directory_item`](../interfaces/IMapsSearchSerpElementItem.md#is_directory_item)

#### Source

main.ts:40614

***

### latitude?

> **`optional`** **latitude**: `number`

latitude coordinate of the local establishments in google maps
example:
"latitude": 51.584091

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`latitude`](../interfaces/IMapsSearchSerpElementItem.md#latitude)

#### Source

main.ts:40603

***

### local\_justifications?

> **`optional`** **local\_justifications**: [`LocalJustificationInfo`](LocalJustificationInfo.md)[]

Google local justifications
snippets of text that “justify” why the business is showing up for search query

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`local_justifications`](../interfaces/IMapsSearchSerpElementItem.md#local_justifications)

#### Source

main.ts:40612

***

### longitude?

> **`optional`** **longitude**: `number`

longitude coordinate of the local establishment in google maps
example:
"longitude": -0.31365919999999997

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`longitude`](../interfaces/IMapsSearchSerpElementItem.md#longitude)

#### Source

main.ts:40607

***

### main\_image?

> **`optional`** **main\_image**: `string`

URL of the main image featured in Google My Business profile

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`main_image`](../interfaces/IMapsSearchSerpElementItem.md#main_image)

#### Source

main.ts:40579

***

### phone?

> **`optional`** **phone**: `string`

phone number
phone number of the local establishment featured in the element

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`phone`](../interfaces/IMapsSearchSerpElementItem.md#phone)

#### Source

main.ts:40577

***

### place\_id?

> **`optional`** **place\_id**: `string`

unique place identifier
place id of the local establishment featured in the element

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`place_id`](../interfaces/IMapsSearchSerpElementItem.md#place_id)

#### Source

main.ts:40574

***

### price\_level?

> **`optional`** **price\_level**: `string`

property price level
can take values: inexpensive, moderate, expensive, very_expensive
if there is no price level information, the value will be null

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`price_level`](../interfaces/IMapsSearchSerpElementItem.md#price_level)

#### Source

main.ts:40560

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`rank_absolute`](../interfaces/IMapsSearchSerpElementItem.md#rank_absolute)

#### Source

main.ts:40541

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`rank_group`](../interfaces/IMapsSearchSerpElementItem.md#rank_group)

#### Source

main.ts:40538

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`rating`](../interfaces/IMapsSearchSerpElementItem.md#rating)

#### Source

main.ts:40552

***

### rating\_distribution?

> **`optional`** **rating\_distribution**: `Object`

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`rating_distribution`](../interfaces/IMapsSearchSerpElementItem.md#rating_distribution)

#### Source

main.ts:40563

***

### snippet?

> **`optional`** **snippet**: `string`

element snippet
contains the address and other information about the local establishment featured in the element

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`snippet`](../interfaces/IMapsSearchSerpElementItem.md#snippet)

#### Source

main.ts:40566

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`title`](../interfaces/IMapsSearchSerpElementItem.md#title)

#### Source

main.ts:40545

***

### total\_photos?

> **`optional`** **total\_photos**: `number`

total count of images featured in Google My Business profile

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`total_photos`](../interfaces/IMapsSearchSerpElementItem.md#total_photos)

#### Source

main.ts:40581

***

### url?

> **`optional`** **url**: `string`

relevant URL in SERP

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`url`](../interfaces/IMapsSearchSerpElementItem.md#url)

#### Source

main.ts:40547

***

### work\_hours?

> **`optional`** **work\_hours**: [`WorkHours`](WorkHours.md)

open hours
information about work hours of the local establishment

#### Implementation of

[`IMapsSearchSerpElementItem`](../interfaces/IMapsSearchSerpElementItem.md).[`work_hours`](../interfaces/IMapsSearchSerpElementItem.md#work_hours)

#### Source

main.ts:40593

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Source

main.ts:40623

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Source

main.ts:40686

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MapsSearchSerpElementItem`](MapsSearchSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`MapsSearchSerpElementItem`](MapsSearchSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:40679
