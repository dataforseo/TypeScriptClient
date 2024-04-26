**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBusinessDataBusinessListingsSearchLiveItem

# Interface: IBusinessDataBusinessListingsSearchLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### additional\_categories?

> **`optional`** **additional\_categories**: `string`[]

additional business categories
additional Google My Business categories that describe the services provided by the business entity in more detail

#### Source

main.ts:195740

***

### address?

> **`optional`** **address**: `string`

address of the business entity

#### Source

main.ts:195749

***

### address\_info?

> **`optional`** **address\_info**: [`AddressInfo`](../classes/AddressInfo.md)

object containing address components of the business entity

#### Source

main.ts:195751

***

### attributes?

> **`optional`** **attributes**: [`BusinessDataAttributesInfo`](../classes/BusinessDataAttributesInfo.md)

service details in a form of user-reviewed checks;
service details of a business entity displayed in a form of checks and based on user feedback and business category

#### Source

main.ts:195782

***

### category?

> **`optional`** **category**: `string`

business category
Google My Business general category that best describes the services provided by the business entity

#### Source

main.ts:195734

***

### category\_ids?

> **`optional`** **category\_ids**: `string`[]

global category IDs
universal category IDs that do not change based on the selected country

#### Source

main.ts:195737

***

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Source

main.ts:195813

***

### cid?

> **`optional`** **cid**: `string`

google-defined client id
unique id of a local establishment
learn more about the identifier in this help center article

#### Source

main.ts:195744

***

### contact\_info?

> **`optional`** **contact\_info**: [`BusinessDataContactInfo`](../classes/BusinessDataContactInfo.md)[]

available contacts of the business
list of contacts to interact with the business

#### Source

main.ts:195810

***

### description?

> **`optional`** **description**: `string`

description of the element in SERP
the description of the business entity for which the results are collected

#### Source

main.ts:195731

***

### domain?

> **`optional`** **domain**: `string`

domain of the business entity

#### Source

main.ts:195761

***

### feature\_id?

> **`optional`** **feature\_id**: `string`

the unique identifier of the element in SERP
learn more about the identifier in this help center article

#### Source

main.ts:195747

***

### is\_claimed?

> **`optional`** **is\_claimed**: `boolean`

shows whether the entity is verified by its owner on Google Maps

#### Source

main.ts:195779

***

### last\_updated\_time?

> **`optional`** **last\_updated\_time**: `string`

date and time when the data was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-26 09:03:15 +00:00

#### Source

main.ts:195818

***

### latitude?

> **`optional`** **latitude**: `number`

latitude coordinate of the local establishments in google maps
example:
"latitude": 51.584091

#### Source

main.ts:195773

***

### local\_business\_links?

> **`optional`** **local\_business\_links**: [`BaseLocalBusinessLink`](../classes/BaseLocalBusinessLink.md)[]

available interactions with the business
list of options to interact with the business directly from search results

#### Source

main.ts:195807

***

### logo?

> **`optional`** **logo**: `string`

URL of the logo featured in Google My Business profile

#### Source

main.ts:195763

***

### longitude?

> **`optional`** **longitude**: `number`

longitude coordinate of the local establishment in google maps
example:
"longitude": -0.31365919999999997

#### Source

main.ts:195777

***

### main\_image?

> **`optional`** **main\_image**: `string`

URL of the main image featured in Google My Business profile

#### Source

main.ts:195765

***

### people\_also\_search?

> **`optional`** **people\_also\_search**: [`PeopleAlsoSearch`](../classes/PeopleAlsoSearch.md)[]

related business entities

#### Source

main.ts:195798

***

### phone?

> **`optional`** **phone**: `string`

phone number of the business entity

#### Source

main.ts:195757

***

### place\_id?

> **`optional`** **place\_id**: `string`

unique place identifier
place id of the local establishment featured in the element
learn more about the identifier in this help center article

#### Source

main.ts:195755

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

 \[`key`: `string`\]: `number`

#### Source

main.ts:195790

***

### popular\_times?

> **`optional`** **popular\_times**: [`PopularTimes`](../classes/PopularTimes.md)

popular times
information related to busy hours of the business entity

#### Source

main.ts:195804

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Source

main.ts:195793

***

### rating\_distribution?

> **`optional`** **rating\_distribution**: `Object`

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:195796

***

### snippet?

> **`optional`** **snippet**: `string`

additional information on the business entity

#### Source

main.ts:195769

***

### title?

> **`optional`** **title**: `string`

title of the element in SERP
the name of the business entity for which the results are collected

#### Source

main.ts:195728

***

### total\_photos?

> **`optional`** **total\_photos**: `number`

total count of images featured in Google My Business profile

#### Source

main.ts:195767

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:195725

***

### url?

> **`optional`** **url**: `string`

absolute url of the business entity

#### Source

main.ts:195759

***

### work\_time?

> **`optional`** **work\_time**: [`WorkInfo`](../classes/WorkInfo.md)

work time details
information related to operational hours of the business entity

#### Source

main.ts:195801
