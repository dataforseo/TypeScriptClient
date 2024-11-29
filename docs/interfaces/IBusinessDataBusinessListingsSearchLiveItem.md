[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataBusinessListingsSearchLiveItem

# Interface: IBusinessDataBusinessListingsSearchLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### additional\_categories?

> `optional` **additional\_categories**: `string`[]

additional business categories
additional Google My Business categories that describe the services provided by the business entity in more detail

#### Defined in

main.ts:211466

***

### address?

> `optional` **address**: `string`

address of the business entity

#### Defined in

main.ts:211475

***

### address\_info?

> `optional` **address\_info**: [`AddressInfo`](../classes/AddressInfo.md)

object containing address components of the business entity

#### Defined in

main.ts:211477

***

### attributes?

> `optional` **attributes**: [`BusinessDataAttributesInfo`](../classes/BusinessDataAttributesInfo.md)

service details in a form of user-reviewed checks;
service details of a business entity displayed in a form of checks and based on user feedback and business category

#### Defined in

main.ts:211508

***

### category?

> `optional` **category**: `string`

business category
Google My Business general category that best describes the services provided by the business entity

#### Defined in

main.ts:211460

***

### category\_ids?

> `optional` **category\_ids**: `string`[]

global category IDs
universal category IDs that do not change based on the selected country

#### Defined in

main.ts:211463

***

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:211547

***

### cid?

> `optional` **cid**: `string`

google-defined client id
unique id of a local establishment
learn more about the identifier in this help center article

#### Defined in

main.ts:211470

***

### contact\_info?

> `optional` **contact\_info**: [`BusinessDataContactInfo`](../classes/BusinessDataContactInfo.md)[]

available contacts of the business
list of contacts to interact with the business

#### Defined in

main.ts:211544

***

### description?

> `optional` **description**: `string`

description of the element in SERP
the description of the business entity for which the results are collected

#### Defined in

main.ts:211457

***

### domain?

> `optional` **domain**: `string`

domain of the business entity

#### Defined in

main.ts:211487

***

### feature\_id?

> `optional` **feature\_id**: `string`

the unique identifier of the element in SERP
learn more about the identifier in this help center article

#### Defined in

main.ts:211473

***

### first\_seen?

> `optional` **first\_seen**: `string`

date and time when our crawler found the business listing element for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-03-11 10:04:11 +00:00

#### Defined in

main.ts:211557

***

### hotel\_rating?

> `optional` **hotel\_rating**: `number`

hotel class rating
class ratings range between 1-5 stars, learn more
if there is no hotel class rating information, the value will be null

#### Defined in

main.ts:211523

***

### is\_claimed?

> `optional` **is\_claimed**: `boolean`

shows whether the entity is verified by its owner on Google Maps

#### Defined in

main.ts:211505

***

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

date and time when the data was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-26 09:03:15 +00:00

#### Defined in

main.ts:211552

***

### latitude?

> `optional` **latitude**: `number`

latitude coordinate of the local establishments in google maps
example:
"latitude": 51.584091

#### Defined in

main.ts:211499

***

### local\_business\_links?

> `optional` **local\_business\_links**: [`BaseLocalBusinessLink`](../classes/BaseLocalBusinessLink.md)[]

available interactions with the business
list of options to interact with the business directly from search results

#### Defined in

main.ts:211541

***

### logo?

> `optional` **logo**: `string`

URL of the logo featured in Google My Business profile

#### Defined in

main.ts:211489

***

### longitude?

> `optional` **longitude**: `number`

longitude coordinate of the local establishment in google maps
example:
"longitude": -0.31365919999999997

#### Defined in

main.ts:211503

***

### main\_image?

> `optional` **main\_image**: `string`

URL of the main image featured in Google My Business profile

#### Defined in

main.ts:211491

***

### people\_also\_search?

> `optional` **people\_also\_search**: [`PeopleAlsoSearch`](../classes/PeopleAlsoSearch.md)[]

related business entities

#### Defined in

main.ts:211532

***

### phone?

> `optional` **phone**: `string`

phone number of the business entity

#### Defined in

main.ts:211483

***

### place\_id?

> `optional` **place\_id**: `string`

unique place identifier
place id of the local establishment featured in the element
learn more about the identifier in this help center article

#### Defined in

main.ts:211481

***

### place\_topics?

> `optional` **place\_topics**: `object`

keywords mentioned in customer reviews
contains most popular keywords related to products/services mentioned in customer reviews of a business entity and the number of reviews mentioning each keyword
example: 
"place_topics": {
"egg roll": 48,
"birthday": 33
}

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:211516

***

### popular\_times?

> `optional` **popular\_times**: [`PopularTimes`](../classes/PopularTimes.md)

popular times
information related to busy hours of the business entity

#### Defined in

main.ts:211538

***

### price\_level?

> `optional` **price\_level**: `string`

property price level
can take values: inexpensive, moderate, expensive, very_expensive
if there is no price level information, the value will be null

#### Defined in

main.ts:211527

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Defined in

main.ts:211519

***

### rating\_distribution?

> `optional` **rating\_distribution**: `object`

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:211530

***

### snippet?

> `optional` **snippet**: `string`

additional information on the business entity

#### Defined in

main.ts:211495

***

### title?

> `optional` **title**: `string`

title of the element in SERP
the name of the business entity for which the results are collected

#### Defined in

main.ts:211454

***

### total\_photos?

> `optional` **total\_photos**: `number`

total count of images featured in Google My Business profile

#### Defined in

main.ts:211493

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:211451

***

### url?

> `optional` **url**: `string`

absolute url of the business entity

#### Defined in

main.ts:211485

***

### work\_time?

> `optional` **work\_time**: [`WorkTime`](../classes/WorkTime.md)

work time details
information related to operational hours of the business entity

#### Defined in

main.ts:211535
