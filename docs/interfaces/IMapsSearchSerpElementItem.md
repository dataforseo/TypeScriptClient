**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IMapsSearchSerpElementItem

# Interface: IMapsSearchSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### additional\_categories?

> **`optional`** **additional\_categories**: `string`[]

additional business categories
additional Google My Business categories that describe the services provided by the business entity in more detail

#### Source

main.ts:40484

***

### address?

> **`optional`** **address**: `string`

address line
address of the local establishment featured in the element

#### Source

main.ts:40466

***

### address\_info?

> **`optional`** **address\_info**: [`AddressInfo`](../classes/AddressInfo.md)

object containing address components of the local establishment

#### Source

main.ts:40468

***

### category?

> **`optional`** **category**: `string`

business category
Google My Business general category that best describes the services provided by the business entity

#### Source

main.ts:40481

***

### category\_ids?

> **`optional`** **category\_ids**: `string`[]

global category IDs
universal category IDs that do not change based on the selected country

#### Source

main.ts:40487

***

### cid?

> **`optional`** **cid**: `string`

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews

#### Source

main.ts:40496

***

### contact\_url?

> **`optional`** **contact\_url**: `string`

URL of the preferred contact page

#### Source

main.ts:40446

***

### domain?

> **`optional`** **domain**: `string`

domain in the SERP element

#### Source

main.ts:40440

***

### feature\_id?

> **`optional`** **feature\_id**: `string`

the unique identifier of the element in SERP

#### Source

main.ts:40492

***

### hotel\_rating?

> **`optional`** **hotel\_rating**: `number`

hotel class rating
class ratings range between 1-5 stars, learn more
if there is no hotel class rating information, the value will be null

#### Source

main.ts:40453

***

### is\_claimed?

> **`optional`** **is\_claimed**: `boolean`

indicates whether ownership of this local establishment is claimed

#### Source

main.ts:40506

***

### is\_directory\_item?

> **`optional`** **is\_directory\_item**: `boolean`

indicates whether this local establishment is a directory

#### Source

main.ts:40511

***

### latitude?

> **`optional`** **latitude**: `number`

latitude coordinate of the local establishments in google maps
example:
"latitude": 51.584091

#### Source

main.ts:40500

***

### local\_justifications?

> **`optional`** **local\_justifications**: [`LocalJustificationInfo`](../classes/LocalJustificationInfo.md)[]

Google local justifications
snippets of text that “justify” why the business is showing up for search query

#### Source

main.ts:40509

***

### longitude?

> **`optional`** **longitude**: `number`

longitude coordinate of the local establishment in google maps
example:
"longitude": -0.31365919999999997

#### Source

main.ts:40504

***

### main\_image?

> **`optional`** **main\_image**: `string`

URL of the main image featured in Google My Business profile

#### Source

main.ts:40476

***

### phone?

> **`optional`** **phone**: `string`

phone number
phone number of the local establishment featured in the element

#### Source

main.ts:40474

***

### place\_id?

> **`optional`** **place\_id**: `string`

unique place identifier
place id of the local establishment featured in the element

#### Source

main.ts:40471

***

### price\_level?

> **`optional`** **price\_level**: `string`

property price level
can take values: inexpensive, moderate, expensive, very_expensive
if there is no price level information, the value will be null

#### Source

main.ts:40457

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:40438

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:40435

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Source

main.ts:40449

***

### rating\_distribution?

> **`optional`** **rating\_distribution**: `Object`

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:40460

***

### snippet?

> **`optional`** **snippet**: `string`

element snippet
contains the address and other information about the local establishment featured in the element

#### Source

main.ts:40463

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Source

main.ts:40442

***

### total\_photos?

> **`optional`** **total\_photos**: `number`

total count of images featured in Google My Business profile

#### Source

main.ts:40478

***

### url?

> **`optional`** **url**: `string`

relevant URL in SERP

#### Source

main.ts:40444

***

### work\_hours?

> **`optional`** **work\_hours**: [`WorkHours`](../classes/WorkHours.md)

open hours
information about work hours of the local establishment

#### Source

main.ts:40490
