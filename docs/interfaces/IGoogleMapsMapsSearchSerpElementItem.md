[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleMapsMapsSearchSerpElementItem

# Interface: IGoogleMapsMapsSearchSerpElementItem

Defined in: main.ts:41908

## Extends

- [`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### additional\_categories?

> `optional` **additional\_categories**: `string`[]

Defined in: main.ts:41947

additional business categories
additional Google My Business categories that describe the services provided by the business entity in more detail

***

### address?

> `optional` **address**: `string`

Defined in: main.ts:41929

address line
address of the local establishment featured in the element

***

### address\_info?

> `optional` **address\_info**: [`AddressInfo`](../classes/AddressInfo.md)

Defined in: main.ts:41931

object containing address components of the local establishment

***

### book\_online\_url?

> `optional` **book\_online\_url**: `string`

Defined in: main.ts:41915

URL in the ‘book online’ button of the element
URL directing users to the online booking or order page of the business entity

***

### category?

> `optional` **category**: `string`

Defined in: main.ts:41944

business category
Google My Business general category that best describes the services provided by the business entity

***

### category\_ids?

> `optional` **category\_ids**: `string`[]

Defined in: main.ts:41950

global category IDs
universal category IDs that do not change based on the selected country

***

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:41959

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews

***

### contact\_url?

> `optional` **contact\_url**: `string`

Defined in: main.ts:41910

URL of the preferred contact page

***

### contributor\_url?

> `optional` **contributor\_url**: `string`

Defined in: main.ts:41912

URL of the user’s or entity’s Local Guides profile, if available

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:41722

domain in SERP

#### Inherited from

[`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md).[`domain`](IBaseGoogleMapsSerpElementItem.md#domain)

***

### feature\_id?

> `optional` **feature\_id**: `string`

Defined in: main.ts:41955

the unique identifier of the element in SERP

***

### hotel\_rating?

> `optional` **hotel\_rating**: `number`

Defined in: main.ts:41919

hotel class rating
class ratings range between 1-5 stars, learn more
if there is no hotel class rating information, the value will be null

***

### is\_claimed?

> `optional` **is\_claimed**: `boolean`

Defined in: main.ts:41969

indicates whether ownership of this local establishment is claimed

***

### is\_directory\_item?

> `optional` **is\_directory\_item**: `boolean`

Defined in: main.ts:41974

indicates whether this local establishment is a directory

***

### latitude?

> `optional` **latitude**: `number`

Defined in: main.ts:41963

latitude coordinate of the local establishments in google maps
example:
"latitude": 51.584091

***

### local\_justifications?

> `optional` **local\_justifications**: [`LocalJustificationInfo`](../classes/LocalJustificationInfo.md)[]

Defined in: main.ts:41972

Google local justifications
snippets of text that “justify” why the business is showing up for search query

***

### longitude?

> `optional` **longitude**: `number`

Defined in: main.ts:41967

longitude coordinate of the local establishment in google maps
example:
"longitude": -0.31365919999999997

***

### main\_image?

> `optional` **main\_image**: `string`

Defined in: main.ts:41939

URL of the main image featured in Google My Business profile

***

### phone?

> `optional` **phone**: `string`

Defined in: main.ts:41937

phone number
phone number of the local establishment featured in the element

***

### place\_id?

> `optional` **place\_id**: `string`

Defined in: main.ts:41934

unique place identifier
place id of the local establishment featured in the element

***

### price\_level?

> `optional` **price\_level**: `string`

Defined in: main.ts:41923

property price level
can take values: inexpensive, moderate, expensive, very_expensive
if there is no price level information, the value will be null

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:41720

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md).[`rank_absolute`](IBaseGoogleMapsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:41717

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md).[`rank_group`](IBaseGoogleMapsSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

Defined in: main.ts:41729

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Inherited from

[`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md).[`rating`](IBaseGoogleMapsSerpElementItem.md#rating)

***

### rating\_distribution?

> `optional` **rating\_distribution**: `object`

Defined in: main.ts:41732

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index Signature

\[`key`: `string`\]: `number`

#### Inherited from

[`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md).[`rating_distribution`](IBaseGoogleMapsSerpElementItem.md#rating_distribution)

***

### snippet?

> `optional` **snippet**: `string`

Defined in: main.ts:41926

element snippet
contains the address and other information about the local establishment featured in the element

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:41724

title of the element

#### Inherited from

[`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md).[`title`](IBaseGoogleMapsSerpElementItem.md#title)

***

### total\_photos?

> `optional` **total\_photos**: `number`

Defined in: main.ts:41941

total count of images featured in Google My Business profile

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:41713

type of element

#### Inherited from

[`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md).[`type`](IBaseGoogleMapsSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:41726

search URL with refinement parameters

#### Inherited from

[`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md).[`url`](IBaseGoogleMapsSerpElementItem.md#url)

***

### work\_hours?

> `optional` **work\_hours**: [`WorkHours`](../classes/WorkHours.md)

Defined in: main.ts:41953

open hours
information about work hours of the local establishment
