[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleBusinessInfoBusinessDataSerpElementItem

# Interface: IGoogleBusinessInfoBusinessDataSerpElementItem

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

main.ts:214299

***

### address?

> `optional` **address**: `string`

address of the business entity

#### Defined in

main.ts:214309

***

### address\_info?

> `optional` **address\_info**: [`AddressInfo`](../classes/AddressInfo.md)

object containing address components of the business entity

#### Defined in

main.ts:214311

***

### attributes?

> `optional` **attributes**: [`BusinessDataAttributesInfo`](../classes/BusinessDataAttributesInfo.md)

service details in a form of user-reviewed checks;
service details of a business entity displayed in a form of checks and based on user feedback and business category

#### Defined in

main.ts:214350

***

### book\_online\_url?

> `optional` **book\_online\_url**: `string`

URL in the ‘book online’ button of the element
URL directing users to the online booking or order page of the business entity

#### Defined in

main.ts:214326

***

### category?

> `optional` **category**: `string`

business category
Google My Business general category that best describes the services provided by the business entity

#### Defined in

main.ts:214293

***

### category\_ids?

> `optional` **category\_ids**: `string`[]

global category IDs
universal category IDs that do not change based on the selected country

#### Defined in

main.ts:214296

***

### cid?

> `optional` **cid**: `string`

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews
learn more about the identifier in this help center article

#### Defined in

main.ts:214304

***

### contact\_url?

> `optional` **contact\_url**: `string`

URL of the preferred contact page

#### Defined in

main.ts:214321

***

### contributor\_url?

> `optional` **contributor\_url**: `string`

URL of the user’s or entity’s Local Guides profile, if available

#### Defined in

main.ts:214323

***

### description?

> `optional` **description**: `string`

description of the element in SERP
the description of the business entity for which the results are collected

#### Defined in

main.ts:214290

***

### directory?

> `optional` **directory**: [`BusinessDirectoryInfo`](../classes/BusinessDirectoryInfo.md)

items of the directory
includes information about businesses that are located within the target business establishment and have the same address

#### Defined in

main.ts:214391

***

### domain?

> `optional` **domain**: `string`

domain of the business entity

#### Defined in

main.ts:214328

***

### feature\_id?

> `optional` **feature\_id**: `string`

the unique identifier of the element in SERP
learn more about the identifier in this help center article

#### Defined in

main.ts:214307

***

### hotel\_rating?

> `optional` **hotel\_rating**: `number`

hotel class rating
class ratings range between 1-5 stars, learn more
if there is no hotel class rating information, the value will be null

#### Defined in

main.ts:214365

***

### is\_claimed?

> `optional` **is\_claimed**: `boolean`

shows whether the entity is verified by its owner on Google Maps

#### Defined in

main.ts:214346

***

### is\_directory\_item?

> `optional` **is\_directory\_item**: `boolean`

business establishment is a part of the directory
indicates whether the business establishment is a part of the directory;
if true, the item is a part of the larger directory of businesses with the same address (e.g., a mall or a business centre);
note: if the business establishment is a parent item in the directory, the value will be null

#### Defined in

main.ts:214388

***

### latitude?

> `optional` **latitude**: `number`

latitude coordinate of the local establishments in google maps
example:
"latitude": 51.584091

#### Defined in

main.ts:214340

***

### local\_business\_links?

> `optional` **local\_business\_links**: [`BaseLocalBusinessLink`](../classes/BaseLocalBusinessLink.md)[]

available interactions with the business
list of options to interact with the business directly from search results

#### Defined in

main.ts:214383

***

### logo?

> `optional` **logo**: `string`

URL of the logo featured in Google My Business profile

#### Defined in

main.ts:214330

***

### longitude?

> `optional` **longitude**: `number`

longitude coordinate of the local establishment in google maps
example:
"longitude": -0.31365919999999997

#### Defined in

main.ts:214344

***

### main\_image?

> `optional` **main\_image**: `string`

URL of the main image featured in Google My Business profile

#### Defined in

main.ts:214332

***

### people\_also\_search?

> `optional` **people\_also\_search**: [`PeopleAlsoSearch`](../classes/PeopleAlsoSearch.md)[]

related business entities

#### Defined in

main.ts:214374

***

### phone?

> `optional` **phone**: `string`

phone number of the business entity

#### Defined in

main.ts:214317

***

### place\_id?

> `optional` **place\_id**: `string`

unique place identifier
place id of the local establishment featured in the element
learn more about the identifier in this help center article

#### Defined in

main.ts:214315

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

main.ts:214358

***

### popular\_times?

> `optional` **popular\_times**: [`PopularTimes`](../classes/PopularTimes.md)

popular times
information related to busy hours of the business entity

#### Defined in

main.ts:214380

***

### position?

> `optional` **position**: `string`

the alignment in SERP

#### Defined in

main.ts:214284

***

### price\_level?

> `optional` **price\_level**: `string`

property price level
can take values: inexpensive, moderate, expensive, very_expensive
if there is no price level information, the value will be null

#### Defined in

main.ts:214369

***

### questions\_and\_answers\_count?

> `optional` **questions\_and\_answers\_count**: `number`

#### Defined in

main.ts:214347

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank among all the elements

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`rank_absolute`](IBaseBusinessDataSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:22295

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`rank_group`](IBaseBusinessDataSerpElementItem.md#rank_group)

#### Defined in

main.ts:22293

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Defined in

main.ts:214361

***

### rating\_distribution?

> `optional` **rating\_distribution**: `object`

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:214372

***

### snippet?

> `optional` **snippet**: `string`

additional information on the business entity

#### Defined in

main.ts:214336

***

### title?

> `optional` **title**: `string`

title of the element in SERP
the name of the business entity for which the results are collected

#### Defined in

main.ts:214287

***

### total\_photos?

> `optional` **total\_photos**: `number`

total count of images featured in Google My Business profile

#### Defined in

main.ts:214334

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`type`](IBaseBusinessDataSerpElementItem.md#type)

#### Defined in

main.ts:22290

***

### url?

> `optional` **url**: `string`

absolute url of the business entity

#### Defined in

main.ts:214319

***

### work\_time?

> `optional` **work\_time**: [`WorkTime`](../classes/WorkTime.md)

work time details
information related to operational hours of the business entity

#### Defined in

main.ts:214377
