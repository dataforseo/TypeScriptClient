**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MapsSearchBusinessDataSerpElementItem

# Class: MapsSearchBusinessDataSerpElementItem

## Extends

- [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

## Implements

- [`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MapsSearchBusinessDataSerpElementItem(data)

> **new MapsSearchBusinessDataSerpElementItem**(`data`?): [`MapsSearchBusinessDataSerpElementItem`](MapsSearchBusinessDataSerpElementItem.md)

#### Parameters

• **data?**: [`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md)

#### Returns

[`MapsSearchBusinessDataSerpElementItem`](MapsSearchBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`constructor`](BaseBusinessDataSerpElementItem.md#constructors)

#### Source

main.ts:196547

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`_discriminator`](BaseBusinessDataSerpElementItem.md#_discriminator)

#### Source

main.ts:20532

***

### additional\_categories?

> **`optional`** **additional\_categories**: `string`[]

additional business categories
additional Google My Business categories that describe the services provided by the business entity in more detail

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`additional_categories`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#additional_categories)

#### Source

main.ts:196503

***

### address?

> **`optional`** **address**: `string`

address of the business entity

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`address`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#address)

#### Source

main.ts:196485

***

### address\_info?

> **`optional`** **address\_info**: [`AddressInfo`](AddressInfo.md)

object containing address components of the business entity

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`address_info`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#address_info)

#### Source

main.ts:196487

***

### category?

> **`optional`** **category**: `string`

business category
Google My Business general category that best describes the services provided by the business entity

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`category`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#category)

#### Source

main.ts:196500

***

### category\_ids?

> **`optional`** **category\_ids**: `string`[]

global category IDs
universal category IDs that do not change based on the selected country

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`category_ids`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#category_ids)

#### Source

main.ts:196514

***

### cid?

> **`optional`** **cid**: `string`

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews
learn more about the identifier in this help center article

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`cid`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#cid)

#### Source

main.ts:196525

***

### domain?

> **`optional`** **domain**: `string`

domain of the business entity

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`domain`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#domain)

#### Source

main.ts:196470

***

### feature\_id?

> **`optional`** **feature\_id**: `string`

the unique identifier of the element in SERP
learn more about the identifier in this help center article

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`feature_id`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#feature_id)

#### Source

main.ts:196520

***

### hotel\_rating?

> **`optional`** **hotel\_rating**: `number`

hotel class rating
class ratings range between 1-5 stars, learn more
if there is no hotel class rating information, the value will be null

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`hotel_rating`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#hotel_rating)

#### Source

main.ts:196511

***

### is\_claimed?

> **`optional`** **is\_claimed**: `boolean`

shows whether the entity is verified by its owner on Google Maps

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`is_claimed`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#is_claimed)

#### Source

main.ts:196535

***

### is\_directory\_item?

> **`optional`** **is\_directory\_item**: `boolean`

business establishment is a part of the directory
indicates whether the business establishment is a part of the directory;
if true, the item is a part of the larger directory of businesses with the same address (e.g., a mall or a business centre);
note: if the business establishment is a parent item in the directory, the value will be null

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`is_directory_item`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#is_directory_item)

#### Source

main.ts:196543

***

### latitude?

> **`optional`** **latitude**: `number`

latitude coordinate of the local establishments in google maps
example:
"latitude": 51.584091

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`latitude`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#latitude)

#### Source

main.ts:196529

***

### local\_justifications?

> **`optional`** **local\_justifications**: `string`[]

Google local justifications
snippets of text that “justify” why the business is showing up for search query

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`local_justifications`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#local_justifications)

#### Source

main.ts:196538

***

### longitude?

> **`optional`** **longitude**: `number`

longitude coordinate of the local establishment in google maps
example:
"longitude": -0.31365919999999997

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`longitude`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#longitude)

#### Source

main.ts:196533

***

### main\_image?

> **`optional`** **main\_image**: `string`

URL of the main image featured in Google My Business profile

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`main_image`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#main_image)

#### Source

main.ts:196495

***

### phone?

> **`optional`** **phone**: `string`

phone number of the business entity

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`phone`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#phone)

#### Source

main.ts:196493

***

### place\_id?

> **`optional`** **place\_id**: `string`

unique place identifier
place id of the local establishment featured in the element
learn more about the identifier in this help center article

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`place_id`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#place_id)

#### Source

main.ts:196491

***

### price\_level?

> **`optional`** **price\_level**: `string`

property price level
can take values: inexpensive, moderate, expensive, very_expensive
if there is no price level information, the value will be null

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`price_level`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#price_level)

#### Source

main.ts:196507

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank among all the elements

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`rank_absolute`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#rank_absolute)

#### Source

main.ts:196468

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`rank_group`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#rank_group)

#### Source

main.ts:196466

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`rating`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#rating)

#### Source

main.ts:196478

***

### rating\_distribution?

> **`optional`** **rating\_distribution**: `Object`

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`rating_distribution`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#rating_distribution)

#### Source

main.ts:196481

***

### snippet?

> **`optional`** **snippet**: `string`

additional information about the business entity

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`snippet`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#snippet)

#### Source

main.ts:196483

***

### title?

> **`optional`** **title**: `string`

directory title
can take the following values: At this place, Directory

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`title`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#title)

#### Source

main.ts:196473

***

### total\_photos?

> **`optional`** **total\_photos**: `number`

total count of images featured in Google My Business profile

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`total_photos`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#total_photos)

#### Source

main.ts:196497

***

### url?

> **`optional`** **url**: `string`

URL to view the menu

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`url`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#url)

#### Source

main.ts:196475

***

### work\_hours?

> **`optional`** **work\_hours**: [`WorkInfo`](WorkInfo.md)

open hours
information about work hours of the local establishment

#### Implementation of

[`IMapsSearchBusinessDataSerpElementItem`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md).[`work_hours`](../interfaces/IMapsSearchBusinessDataSerpElementItem.md#work_hours)

#### Source

main.ts:196517

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

main.ts:196552

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

main.ts:196614

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MapsSearchBusinessDataSerpElementItem`](MapsSearchBusinessDataSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`MapsSearchBusinessDataSerpElementItem`](MapsSearchBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`fromJS`](BaseBusinessDataSerpElementItem.md#fromjs)

#### Source

main.ts:196607
