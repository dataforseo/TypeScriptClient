**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IMapsSearchBusinessDataSerpElementItem

# Interface: IMapsSearchBusinessDataSerpElementItem

## Extends

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### additional\_categories?

> **`optional`** **additional\_categories**: `string`[]

additional business categories
additional Google My Business categories that describe the services provided by the business entity in more detail

#### Source

main.ts:196860

***

### address?

> **`optional`** **address**: `string`

address of the business entity

#### Source

main.ts:196842

***

### address\_info?

> **`optional`** **address\_info**: [`AddressInfo`](../classes/AddressInfo.md)

object containing address components of the business entity

#### Source

main.ts:196844

***

### category?

> **`optional`** **category**: `string`

business category
Google My Business general category that best describes the services provided by the business entity

#### Source

main.ts:196857

***

### category\_ids?

> **`optional`** **category\_ids**: `string`[]

global category IDs
universal category IDs that do not change based on the selected country

#### Source

main.ts:196871

***

### cid?

> **`optional`** **cid**: `string`

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews
learn more about the identifier in this help center article

#### Source

main.ts:196882

***

### domain?

> **`optional`** **domain**: `string`

domain of the business entity

#### Source

main.ts:196827

***

### feature\_id?

> **`optional`** **feature\_id**: `string`

the unique identifier of the element in SERP
learn more about the identifier in this help center article

#### Source

main.ts:196877

***

### hotel\_rating?

> **`optional`** **hotel\_rating**: `number`

hotel class rating
class ratings range between 1-5 stars, learn more
if there is no hotel class rating information, the value will be null

#### Source

main.ts:196868

***

### is\_claimed?

> **`optional`** **is\_claimed**: `boolean`

shows whether the entity is verified by its owner on Google Maps

#### Source

main.ts:196892

***

### is\_directory\_item?

> **`optional`** **is\_directory\_item**: `boolean`

business establishment is a part of the directory
indicates whether the business establishment is a part of the directory;
if true, the item is a part of the larger directory of businesses with the same address (e.g., a mall or a business centre);
note: if the business establishment is a parent item in the directory, the value will be null

#### Source

main.ts:196900

***

### latitude?

> **`optional`** **latitude**: `number`

latitude coordinate of the local establishments in google maps
example:
"latitude": 51.584091

#### Source

main.ts:196886

***

### local\_justifications?

> **`optional`** **local\_justifications**: `string`[]

Google local justifications
snippets of text that “justify” why the business is showing up for search query

#### Source

main.ts:196895

***

### longitude?

> **`optional`** **longitude**: `number`

longitude coordinate of the local establishment in google maps
example:
"longitude": -0.31365919999999997

#### Source

main.ts:196890

***

### main\_image?

> **`optional`** **main\_image**: `string`

URL of the main image featured in Google My Business profile

#### Source

main.ts:196852

***

### phone?

> **`optional`** **phone**: `string`

phone number of the business entity

#### Source

main.ts:196850

***

### place\_id?

> **`optional`** **place\_id**: `string`

unique place identifier
place id of the local establishment featured in the element
learn more about the identifier in this help center article

#### Source

main.ts:196848

***

### price\_level?

> **`optional`** **price\_level**: `string`

property price level
can take values: inexpensive, moderate, expensive, very_expensive
if there is no price level information, the value will be null

#### Source

main.ts:196864

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank among all the elements

#### Source

main.ts:196825

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group

#### Source

main.ts:196823

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Source

main.ts:196835

***

### rating\_distribution?

> **`optional`** **rating\_distribution**: `Object`

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:196838

***

### snippet?

> **`optional`** **snippet**: `string`

additional information about the business entity

#### Source

main.ts:196840

***

### title?

> **`optional`** **title**: `string`

directory title
can take the following values: At this place, Directory

#### Source

main.ts:196830

***

### total\_photos?

> **`optional`** **total\_photos**: `number`

total count of images featured in Google My Business profile

#### Source

main.ts:196854

***

### url?

> **`optional`** **url**: `string`

URL to view the menu

#### Source

main.ts:196832

***

### work\_hours?

> **`optional`** **work\_hours**: [`WorkInfo`](../classes/WorkInfo.md)

open hours
information about work hours of the local establishment

#### Source

main.ts:196874
