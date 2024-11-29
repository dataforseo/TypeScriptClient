[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleMapsMapsSearchSerpElementItem

# Interface: IGoogleMapsMapsSearchSerpElementItem

## Extends

- [`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### additional\_categories?

> `optional` **additional\_categories**: `string`[]

additional business categories
additional Google My Business categories that describe the services provided by the business entity in more detail

#### Defined in

main.ts:41947

***

### address?

> `optional` **address**: `string`

address line
address of the local establishment featured in the element

#### Defined in

main.ts:41929

***

### address\_info?

> `optional` **address\_info**: [`AddressInfo`](../classes/AddressInfo.md)

object containing address components of the local establishment

#### Defined in

main.ts:41931

***

### book\_online\_url?

> `optional` **book\_online\_url**: `string`

URL in the ‘book online’ button of the element
URL directing users to the online booking or order page of the business entity

#### Defined in

main.ts:41915

***

### category?

> `optional` **category**: `string`

business category
Google My Business general category that best describes the services provided by the business entity

#### Defined in

main.ts:41944

***

### category\_ids?

> `optional` **category\_ids**: `string`[]

global category IDs
universal category IDs that do not change based on the selected country

#### Defined in

main.ts:41950

***

### cid?

> `optional` **cid**: `string`

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews

#### Defined in

main.ts:41959

***

### contact\_url?

> `optional` **contact\_url**: `string`

URL of the preferred contact page

#### Defined in

main.ts:41910

***

### contributor\_url?

> `optional` **contributor\_url**: `string`

URL of the user’s or entity’s Local Guides profile, if available

#### Defined in

main.ts:41912

***

### domain?

> `optional` **domain**: `string`

domain in SERP

#### Inherited from

[`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md).[`domain`](IBaseGoogleMapsSerpElementItem.md#domain)

#### Defined in

main.ts:41722

***

### feature\_id?

> `optional` **feature\_id**: `string`

the unique identifier of the element in SERP

#### Defined in

main.ts:41955

***

### hotel\_rating?

> `optional` **hotel\_rating**: `number`

hotel class rating
class ratings range between 1-5 stars, learn more
if there is no hotel class rating information, the value will be null

#### Defined in

main.ts:41919

***

### is\_claimed?

> `optional` **is\_claimed**: `boolean`

indicates whether ownership of this local establishment is claimed

#### Defined in

main.ts:41969

***

### is\_directory\_item?

> `optional` **is\_directory\_item**: `boolean`

indicates whether this local establishment is a directory

#### Defined in

main.ts:41974

***

### latitude?

> `optional` **latitude**: `number`

latitude coordinate of the local establishments in google maps
example:
"latitude": 51.584091

#### Defined in

main.ts:41963

***

### local\_justifications?

> `optional` **local\_justifications**: [`LocalJustificationInfo`](../classes/LocalJustificationInfo.md)[]

Google local justifications
snippets of text that “justify” why the business is showing up for search query

#### Defined in

main.ts:41972

***

### longitude?

> `optional` **longitude**: `number`

longitude coordinate of the local establishment in google maps
example:
"longitude": -0.31365919999999997

#### Defined in

main.ts:41967

***

### main\_image?

> `optional` **main\_image**: `string`

URL of the main image featured in Google My Business profile

#### Defined in

main.ts:41939

***

### phone?

> `optional` **phone**: `string`

phone number
phone number of the local establishment featured in the element

#### Defined in

main.ts:41937

***

### place\_id?

> `optional` **place\_id**: `string`

unique place identifier
place id of the local establishment featured in the element

#### Defined in

main.ts:41934

***

### price\_level?

> `optional` **price\_level**: `string`

property price level
can take values: inexpensive, moderate, expensive, very_expensive
if there is no price level information, the value will be null

#### Defined in

main.ts:41923

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md).[`rank_absolute`](IBaseGoogleMapsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:41720

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md).[`rank_group`](IBaseGoogleMapsSerpElementItem.md#rank_group)

#### Defined in

main.ts:41717

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Inherited from

[`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md).[`rating`](IBaseGoogleMapsSerpElementItem.md#rating)

#### Defined in

main.ts:41729

***

### rating\_distribution?

> `optional` **rating\_distribution**: `object`

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index Signature

 \[`key`: `string`\]: `number`

#### Inherited from

[`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md).[`rating_distribution`](IBaseGoogleMapsSerpElementItem.md#rating_distribution)

#### Defined in

main.ts:41732

***

### snippet?

> `optional` **snippet**: `string`

element snippet
contains the address and other information about the local establishment featured in the element

#### Defined in

main.ts:41926

***

### title?

> `optional` **title**: `string`

title of the element

#### Inherited from

[`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md).[`title`](IBaseGoogleMapsSerpElementItem.md#title)

#### Defined in

main.ts:41724

***

### total\_photos?

> `optional` **total\_photos**: `number`

total count of images featured in Google My Business profile

#### Defined in

main.ts:41941

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md).[`type`](IBaseGoogleMapsSerpElementItem.md#type)

#### Defined in

main.ts:41713

***

### url?

> `optional` **url**: `string`

search URL with refinement parameters

#### Inherited from

[`IBaseGoogleMapsSerpElementItem`](IBaseGoogleMapsSerpElementItem.md).[`url`](IBaseGoogleMapsSerpElementItem.md#url)

#### Defined in

main.ts:41726

***

### work\_hours?

> `optional` **work\_hours**: [`WorkHours`](../classes/WorkHours.md)

open hours
information about work hours of the local establishment

#### Defined in

main.ts:41953
