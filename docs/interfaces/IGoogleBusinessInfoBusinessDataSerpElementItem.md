[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleBusinessInfoBusinessDataSerpElementItem

# Interface: IGoogleBusinessInfoBusinessDataSerpElementItem

Defined in: main.ts:214852

## Extends

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### additional\_categories?

> `optional` **additional\_categories**: `string`[]

Defined in: main.ts:214869

additional business categories
additional Google My Business categories that describe the services provided by the business entity in more detail

***

### address?

> `optional` **address**: `string`

Defined in: main.ts:214879

address of the business entity

***

### address\_info?

> `optional` **address\_info**: [`AddressInfo`](../classes/AddressInfo.md)

Defined in: main.ts:214881

object containing address components of the business entity

***

### attributes?

> `optional` **attributes**: [`BusinessDataAttributesInfo`](../classes/BusinessDataAttributesInfo.md)

Defined in: main.ts:214920

service details in a form of user-reviewed checks;
service details of a business entity displayed in a form of checks and based on user feedback and business category

***

### book\_online\_url?

> `optional` **book\_online\_url**: `string`

Defined in: main.ts:214896

URL in the ‘book online’ button of the element
URL directing users to the online booking or order page of the business entity

***

### category?

> `optional` **category**: `string`

Defined in: main.ts:214863

business category
Google My Business general category that best describes the services provided by the business entity

***

### category\_ids?

> `optional` **category\_ids**: `string`[]

Defined in: main.ts:214866

global category IDs
universal category IDs that do not change based on the selected country

***

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:214874

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews
learn more about the identifier in this help center article

***

### contact\_url?

> `optional` **contact\_url**: `string`

Defined in: main.ts:214891

URL of the preferred contact page

***

### contributor\_url?

> `optional` **contributor\_url**: `string`

Defined in: main.ts:214893

URL of the user’s or entity’s Local Guides profile, if available

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:214860

description of the element in SERP
the description of the business entity for which the results are collected

***

### directory?

> `optional` **directory**: [`BusinessDirectoryInfo`](../classes/BusinessDirectoryInfo.md)

Defined in: main.ts:214961

items of the directory
includes information about businesses that are located within the target business establishment and have the same address

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:214898

domain of the business entity

***

### feature\_id?

> `optional` **feature\_id**: `string`

Defined in: main.ts:214877

the unique identifier of the element in SERP
learn more about the identifier in this help center article

***

### hotel\_rating?

> `optional` **hotel\_rating**: `number`

Defined in: main.ts:214935

hotel class rating
class ratings range between 1-5 stars, learn more
if there is no hotel class rating information, the value will be null

***

### is\_claimed?

> `optional` **is\_claimed**: `boolean`

Defined in: main.ts:214916

shows whether the entity is verified by its owner on Google Maps

***

### is\_directory\_item?

> `optional` **is\_directory\_item**: `boolean`

Defined in: main.ts:214958

business establishment is a part of the directory
indicates whether the business establishment is a part of the directory;
if true, the item is a part of the larger directory of businesses with the same address (e.g., a mall or a business centre);
note: if the business establishment is a parent item in the directory, the value will be null

***

### latitude?

> `optional` **latitude**: `number`

Defined in: main.ts:214910

latitude coordinate of the local establishments in google maps
example:
"latitude": 51.584091

***

### local\_business\_links?

> `optional` **local\_business\_links**: [`BaseLocalBusinessLink`](../classes/BaseLocalBusinessLink.md)[]

Defined in: main.ts:214953

available interactions with the business
list of options to interact with the business directly from search results

***

### logo?

> `optional` **logo**: `string`

Defined in: main.ts:214900

URL of the logo featured in Google My Business profile

***

### longitude?

> `optional` **longitude**: `number`

Defined in: main.ts:214914

longitude coordinate of the local establishment in google maps
example:
"longitude": -0.31365919999999997

***

### main\_image?

> `optional` **main\_image**: `string`

Defined in: main.ts:214902

URL of the main image featured in Google My Business profile

***

### people\_also\_search?

> `optional` **people\_also\_search**: [`PeopleAlsoSearch`](../classes/PeopleAlsoSearch.md)[]

Defined in: main.ts:214944

related business entities

***

### phone?

> `optional` **phone**: `string`

Defined in: main.ts:214887

phone number of the business entity

***

### place\_id?

> `optional` **place\_id**: `string`

Defined in: main.ts:214885

unique place identifier
place id of the local establishment featured in the element
learn more about the identifier in this help center article

***

### place\_topics?

> `optional` **place\_topics**: `object`

Defined in: main.ts:214928

keywords mentioned in customer reviews
contains most popular keywords related to products/services mentioned in customer reviews of a business entity and the number of reviews mentioning each keyword
example: 
"place_topics": {
"egg roll": 48,
"birthday": 33
}

#### Index Signature

\[`key`: `string`\]: `number`

***

### popular\_times?

> `optional` **popular\_times**: [`PopularTimes`](../classes/PopularTimes.md)

Defined in: main.ts:214950

popular times
information related to busy hours of the business entity

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:214854

the alignment in SERP

***

### price\_level?

> `optional` **price\_level**: `string`

Defined in: main.ts:214939

property price level
can take values: inexpensive, moderate, expensive, very_expensive
if there is no price level information, the value will be null

***

### questions\_and\_answers\_count?

> `optional` **questions\_and\_answers\_count**: `number`

Defined in: main.ts:214917

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

Defined in: main.ts:214931

the element’s rating 
the popularity rate based on reviews and displayed in SERP

***

### rating\_distribution?

> `optional` **rating\_distribution**: `object`

Defined in: main.ts:214942

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index Signature

\[`key`: `string`\]: `number`

***

### snippet?

> `optional` **snippet**: `string`

Defined in: main.ts:214906

additional information on the business entity

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:214857

title of the element in SERP
the name of the business entity for which the results are collected

***

### total\_photos?

> `optional` **total\_photos**: `number`

Defined in: main.ts:214904

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

Defined in: main.ts:214889

absolute url of the business entity

***

### work\_time?

> `optional` **work\_time**: [`WorkTime`](../classes/WorkTime.md)

Defined in: main.ts:214947

work time details
information related to operational hours of the business entity
