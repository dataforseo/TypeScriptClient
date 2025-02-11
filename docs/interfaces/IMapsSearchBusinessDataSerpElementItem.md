[**Documentation**](../README.md)

***

[Documentation](../README.md) / IMapsSearchBusinessDataSerpElementItem

# Interface: IMapsSearchBusinessDataSerpElementItem

Defined in: main.ts:214426

## Extends

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### additional\_categories?

> `optional` **additional\_categories**: `string`[]

Defined in: main.ts:214461

additional business categories
additional Google My Business categories that describe the services provided by the business entity in more detail

***

### address?

> `optional` **address**: `string`

Defined in: main.ts:214443

address of the business entity

***

### address\_info?

> `optional` **address\_info**: [`AddressInfo`](../classes/AddressInfo.md)

Defined in: main.ts:214445

object containing address components of the business entity

***

### category?

> `optional` **category**: `string`

Defined in: main.ts:214458

business category
Google My Business general category that best describes the services provided by the business entity

***

### category\_ids?

> `optional` **category\_ids**: `string`[]

Defined in: main.ts:214472

global category IDs
universal category IDs that do not change based on the selected country

***

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:214483

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews
learn more about the identifier in this help center article

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:214428

domain of the business entity

***

### feature\_id?

> `optional` **feature\_id**: `string`

Defined in: main.ts:214478

the unique identifier of the element in SERP
learn more about the identifier in this help center article

***

### hotel\_rating?

> `optional` **hotel\_rating**: `number`

Defined in: main.ts:214469

hotel class rating
class ratings range between 1-5 stars, learn more
if there is no hotel class rating information, the value will be null

***

### is\_claimed?

> `optional` **is\_claimed**: `boolean`

Defined in: main.ts:214493

shows whether the entity is verified by its owner on Google Maps

***

### is\_directory\_item?

> `optional` **is\_directory\_item**: `boolean`

Defined in: main.ts:214501

business establishment is a part of the directory
indicates whether the business establishment is a part of the directory;
if true, the item is a part of the larger directory of businesses with the same address (e.g., a mall or a business centre);
note: if the business establishment is a parent item in the directory, the value will be null

***

### latitude?

> `optional` **latitude**: `number`

Defined in: main.ts:214487

latitude coordinate of the local establishments in google maps
example:
"latitude": 51.584091

***

### local\_justifications?

> `optional` **local\_justifications**: `string`[]

Defined in: main.ts:214496

Google local justifications
snippets of text that “justify” why the business is showing up for search query

***

### longitude?

> `optional` **longitude**: `number`

Defined in: main.ts:214491

longitude coordinate of the local establishment in google maps
example:
"longitude": -0.31365919999999997

***

### main\_image?

> `optional` **main\_image**: `string`

Defined in: main.ts:214453

URL of the main image featured in Google My Business profile

***

### phone?

> `optional` **phone**: `string`

Defined in: main.ts:214451

phone number of the business entity

***

### place\_id?

> `optional` **place\_id**: `string`

Defined in: main.ts:214449

unique place identifier
place id of the local establishment featured in the element
learn more about the identifier in this help center article

***

### price\_level?

> `optional` **price\_level**: `string`

Defined in: main.ts:214465

property price level
can take values: inexpensive, moderate, expensive, very_expensive
if there is no price level information, the value will be null

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22295

absolute rank among all the elements

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`rank_absolute`](IBaseBusinessDataSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22293

position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`rank_group`](IBaseBusinessDataSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

Defined in: main.ts:214436

the element’s rating 
the popularity rate based on reviews and displayed in SERP

***

### rating\_distribution?

> `optional` **rating\_distribution**: `object`

Defined in: main.ts:214439

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index Signature

\[`key`: `string`\]: `number`

***

### snippet?

> `optional` **snippet**: `string`

Defined in: main.ts:214441

additional information about the business entity

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:214431

directory title
can take the following values: At this place, Directory

***

### total\_photos?

> `optional` **total\_photos**: `number`

Defined in: main.ts:214455

total count of images featured in Google My Business profile

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22290

type of element

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`type`](IBaseBusinessDataSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:214433

URL to view the menu

***

### work\_hours?

> `optional` **work\_hours**: [`WorkHours`](../classes/WorkHours.md)

Defined in: main.ts:214475

open hours
information about work hours of the local establishment
