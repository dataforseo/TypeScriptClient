[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IMapsSearchBusinessDataSerpElementItem

# Interface: IMapsSearchBusinessDataSerpElementItem

## Extends

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### additional\_categories?

> `optional` **additional\_categories**: `string`[]

additional business categories
additional Google My Business categories that describe the services provided by the business entity in more detail

#### Defined in

main.ts:205894

***

### address?

> `optional` **address**: `string`

address of the business entity

#### Defined in

main.ts:205876

***

### address\_info?

> `optional` **address\_info**: [`AddressInfo`](../classes/AddressInfo.md)

object containing address components of the business entity

#### Defined in

main.ts:205878

***

### category?

> `optional` **category**: `string`

business category
Google My Business general category that best describes the services provided by the business entity

#### Defined in

main.ts:205891

***

### category\_ids?

> `optional` **category\_ids**: `string`[]

global category IDs
universal category IDs that do not change based on the selected country

#### Defined in

main.ts:205905

***

### cid?

> `optional` **cid**: `string`

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews
learn more about the identifier in this help center article

#### Defined in

main.ts:205916

***

### domain?

> `optional` **domain**: `string`

domain of the business entity

#### Defined in

main.ts:205861

***

### feature\_id?

> `optional` **feature\_id**: `string`

the unique identifier of the element in SERP
learn more about the identifier in this help center article

#### Defined in

main.ts:205911

***

### hotel\_rating?

> `optional` **hotel\_rating**: `number`

hotel class rating
class ratings range between 1-5 stars, learn more
if there is no hotel class rating information, the value will be null

#### Defined in

main.ts:205902

***

### is\_claimed?

> `optional` **is\_claimed**: `boolean`

shows whether the entity is verified by its owner on Google Maps

#### Defined in

main.ts:205926

***

### is\_directory\_item?

> `optional` **is\_directory\_item**: `boolean`

business establishment is a part of the directory
indicates whether the business establishment is a part of the directory;
if true, the item is a part of the larger directory of businesses with the same address (e.g., a mall or a business centre);
note: if the business establishment is a parent item in the directory, the value will be null

#### Defined in

main.ts:205934

***

### latitude?

> `optional` **latitude**: `number`

latitude coordinate of the local establishments in google maps
example:
"latitude": 51.584091

#### Defined in

main.ts:205920

***

### local\_justifications?

> `optional` **local\_justifications**: `string`[]

Google local justifications
snippets of text that “justify” why the business is showing up for search query

#### Defined in

main.ts:205929

***

### longitude?

> `optional` **longitude**: `number`

longitude coordinate of the local establishment in google maps
example:
"longitude": -0.31365919999999997

#### Defined in

main.ts:205924

***

### main\_image?

> `optional` **main\_image**: `string`

URL of the main image featured in Google My Business profile

#### Defined in

main.ts:205886

***

### phone?

> `optional` **phone**: `string`

phone number of the business entity

#### Defined in

main.ts:205884

***

### place\_id?

> `optional` **place\_id**: `string`

unique place identifier
place id of the local establishment featured in the element
learn more about the identifier in this help center article

#### Defined in

main.ts:205882

***

### price\_level?

> `optional` **price\_level**: `string`

property price level
can take values: inexpensive, moderate, expensive, very_expensive
if there is no price level information, the value will be null

#### Defined in

main.ts:205898

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank among all the elements

#### Defined in

main.ts:205859

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group

#### Defined in

main.ts:205857

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Defined in

main.ts:205869

***

### rating\_distribution?

> `optional` **rating\_distribution**: `object`

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:205872

***

### snippet?

> `optional` **snippet**: `string`

additional information about the business entity

#### Defined in

main.ts:205874

***

### title?

> `optional` **title**: `string`

directory title
can take the following values: At this place, Directory

#### Defined in

main.ts:205864

***

### total\_photos?

> `optional` **total\_photos**: `number`

total count of images featured in Google My Business profile

#### Defined in

main.ts:205888

***

### url?

> `optional` **url**: `string`

URL to view the menu

#### Defined in

main.ts:205866

***

### work\_hours?

> `optional` **work\_hours**: [`WorkInfo`](../classes/WorkInfo.md)

open hours
information about work hours of the local establishment

#### Defined in

main.ts:205908
