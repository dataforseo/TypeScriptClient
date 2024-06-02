**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IGoogleBusinessInfoBusinessDataSerpElementItem

# Interface: IGoogleBusinessInfoBusinessDataSerpElementItem

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

main.ts:199484

***

### address?

> **`optional`** **address**: `string`

address of the business entity

#### Source

main.ts:199494

***

### address\_info?

> **`optional`** **address\_info**: [`AddressInfo`](../classes/AddressInfo.md)

object containing address components of the business entity

#### Source

main.ts:199496

***

### attributes?

> **`optional`** **attributes**: [`BusinessDataAttributesInfo`](../classes/BusinessDataAttributesInfo.md)

service details in a form of user-reviewed checks;
service details of a business entity displayed in a form of checks and based on user feedback and business category

#### Source

main.ts:199530

***

### category?

> **`optional`** **category**: `string`

business category
Google My Business general category that best describes the services provided by the business entity

#### Source

main.ts:199478

***

### category\_ids?

> **`optional`** **category\_ids**: `string`[]

global category IDs
universal category IDs that do not change based on the selected country

#### Source

main.ts:199481

***

### cid?

> **`optional`** **cid**: `string`

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews
learn more about the identifier in this help center article

#### Source

main.ts:199489

***

### contact\_url?

> **`optional`** **contact\_url**: `string`

URL of the preferred contact page

#### Source

main.ts:199506

***

### description?

> **`optional`** **description**: `string`

description of the element in SERP
the description of the business entity for which the results are collected

#### Source

main.ts:199475

***

### directory?

> **`optional`** **directory**: [`BusinessDirectoryInfo`](../classes/BusinessDirectoryInfo.md)

items of the directory
includes information about businesses that are located within the target business establishment and have the same address

#### Source

main.ts:199571

***

### domain?

> **`optional`** **domain**: `string`

domain of the business entity

#### Source

main.ts:199508

***

### feature\_id?

> **`optional`** **feature\_id**: `string`

the unique identifier of the element in SERP
learn more about the identifier in this help center article

#### Source

main.ts:199492

***

### hotel\_rating?

> **`optional`** **hotel\_rating**: `number`

hotel class rating
class ratings range between 1-5 stars, learn more
if there is no hotel class rating information, the value will be null

#### Source

main.ts:199545

***

### is\_claimed?

> **`optional`** **is\_claimed**: `boolean`

shows whether the entity is verified by its owner on Google Maps

#### Source

main.ts:199526

***

### is\_directory\_item?

> **`optional`** **is\_directory\_item**: `boolean`

business establishment is a part of the directory
indicates whether the business establishment is a part of the directory;
if true, the item is a part of the larger directory of businesses with the same address (e.g., a mall or a business centre);
note: if the business establishment is a parent item in the directory, the value will be null

#### Source

main.ts:199568

***

### latitude?

> **`optional`** **latitude**: `number`

latitude coordinate of the local establishments in google maps
example:
"latitude": 51.584091

#### Source

main.ts:199520

***

### local\_business\_links?

> **`optional`** **local\_business\_links**: [`BaseLocalBusinessLink`](../classes/BaseLocalBusinessLink.md)[]

available interactions with the business
list of options to interact with the business directly from search results

#### Source

main.ts:199563

***

### logo?

> **`optional`** **logo**: `string`

URL of the logo featured in Google My Business profile

#### Source

main.ts:199510

***

### longitude?

> **`optional`** **longitude**: `number`

longitude coordinate of the local establishment in google maps
example:
"longitude": -0.31365919999999997

#### Source

main.ts:199524

***

### main\_image?

> **`optional`** **main\_image**: `string`

URL of the main image featured in Google My Business profile

#### Source

main.ts:199512

***

### people\_also\_search?

> **`optional`** **people\_also\_search**: [`PeopleAlsoSearch`](../classes/PeopleAlsoSearch.md)[]

related business entities

#### Source

main.ts:199554

***

### phone?

> **`optional`** **phone**: `string`

phone number of the business entity

#### Source

main.ts:199502

***

### place\_id?

> **`optional`** **place\_id**: `string`

unique place identifier
place id of the local establishment featured in the element
learn more about the identifier in this help center article

#### Source

main.ts:199500

***

### place\_topics?

> **`optional`** **place\_topics**: `Object`

keywords mentioned in customer reviews
contains most popular keywords related to products/services mentioned in customer reviews of a business entity and the number of reviews mentioning each keyword
example: 
"place_topics": \{
"egg roll": 48,
"birthday": 33
\}

#### Index signature

 \[`key`: `string`\]: `string`

#### Source

main.ts:199538

***

### popular\_times?

> **`optional`** **popular\_times**: [`PopularTimes`](../classes/PopularTimes.md)

popular times
information related to busy hours of the business entity

#### Source

main.ts:199560

***

### position?

> **`optional`** **position**: `string`

the alignment in SERP

#### Source

main.ts:199469

***

### price\_level?

> **`optional`** **price\_level**: `string`

property price level
can take values: inexpensive, moderate, expensive, very_expensive
if there is no price level information, the value will be null

#### Source

main.ts:199549

***

### questions\_and\_answers\_count?

> **`optional`** **questions\_and\_answers\_count**: `number`

#### Source

main.ts:199527

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank among all the elements

#### Source

main.ts:199467

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:199465

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Source

main.ts:199541

***

### rating\_distribution?

> **`optional`** **rating\_distribution**: `Object`

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:199552

***

### snippet?

> **`optional`** **snippet**: `string`

additional information on the business entity

#### Source

main.ts:199516

***

### title?

> **`optional`** **title**: `string`

title of the element in SERP
the name of the business entity for which the results are collected

#### Source

main.ts:199472

***

### total\_photos?

> **`optional`** **total\_photos**: `number`

total count of images featured in Google My Business profile

#### Source

main.ts:199514

***

### url?

> **`optional`** **url**: `string`

absolute url of the business entity

#### Source

main.ts:199504

***

### work\_time?

> **`optional`** **work\_time**: [`WorkInfo`](../classes/WorkInfo.md)

work time details
information related to operational hours of the business entity

#### Source

main.ts:199557
