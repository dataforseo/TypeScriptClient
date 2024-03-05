[dataforseo-client](../README.md) / [Exports](../modules.md) / IBusinessDataBusinessListingsSearchLiveItem

# Interface: IBusinessDataBusinessListingsSearchLiveItem

## Implemented by

- [`BusinessDataBusinessListingsSearchLiveItem`](../classes/BusinessDataBusinessListingsSearchLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [additional\_categories](IBusinessDataBusinessListingsSearchLiveItem.md#additional_categories)
- [address](IBusinessDataBusinessListingsSearchLiveItem.md#address)
- [address\_info](IBusinessDataBusinessListingsSearchLiveItem.md#address_info)
- [attributes](IBusinessDataBusinessListingsSearchLiveItem.md#attributes)
- [category](IBusinessDataBusinessListingsSearchLiveItem.md#category)
- [category\_ids](IBusinessDataBusinessListingsSearchLiveItem.md#category_ids)
- [check\_url](IBusinessDataBusinessListingsSearchLiveItem.md#check_url)
- [cid](IBusinessDataBusinessListingsSearchLiveItem.md#cid)
- [contact\_info](IBusinessDataBusinessListingsSearchLiveItem.md#contact_info)
- [description](IBusinessDataBusinessListingsSearchLiveItem.md#description)
- [domain](IBusinessDataBusinessListingsSearchLiveItem.md#domain)
- [feature\_id](IBusinessDataBusinessListingsSearchLiveItem.md#feature_id)
- [is\_claimed](IBusinessDataBusinessListingsSearchLiveItem.md#is_claimed)
- [last\_updated\_time](IBusinessDataBusinessListingsSearchLiveItem.md#last_updated_time)
- [latitude](IBusinessDataBusinessListingsSearchLiveItem.md#latitude)
- [local\_business\_links](IBusinessDataBusinessListingsSearchLiveItem.md#local_business_links)
- [logo](IBusinessDataBusinessListingsSearchLiveItem.md#logo)
- [longitude](IBusinessDataBusinessListingsSearchLiveItem.md#longitude)
- [main\_image](IBusinessDataBusinessListingsSearchLiveItem.md#main_image)
- [people\_also\_search](IBusinessDataBusinessListingsSearchLiveItem.md#people_also_search)
- [phone](IBusinessDataBusinessListingsSearchLiveItem.md#phone)
- [place\_id](IBusinessDataBusinessListingsSearchLiveItem.md#place_id)
- [place\_topics](IBusinessDataBusinessListingsSearchLiveItem.md#place_topics)
- [popular\_times](IBusinessDataBusinessListingsSearchLiveItem.md#popular_times)
- [rating](IBusinessDataBusinessListingsSearchLiveItem.md#rating)
- [rating\_distribution](IBusinessDataBusinessListingsSearchLiveItem.md#rating_distribution)
- [snippet](IBusinessDataBusinessListingsSearchLiveItem.md#snippet)
- [title](IBusinessDataBusinessListingsSearchLiveItem.md#title)
- [total\_photos](IBusinessDataBusinessListingsSearchLiveItem.md#total_photos)
- [type](IBusinessDataBusinessListingsSearchLiveItem.md#type)
- [url](IBusinessDataBusinessListingsSearchLiveItem.md#url)
- [work\_time](IBusinessDataBusinessListingsSearchLiveItem.md#work_time)

## Properties

### additional\_categories

• `Optional` **additional\_categories**: `string`[]

additional business categories
additional Google My Business categories that describe the services provided by the business entity in more detail

#### Defined in

[main.ts:189277](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189277)

___

### address

• `Optional` **address**: `string`

address of the business entity

#### Defined in

[main.ts:189286](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189286)

___

### address\_info

• `Optional` **address\_info**: [`AddressInfo`](../classes/AddressInfo.md)

object containing address components of the business entity

#### Defined in

[main.ts:189288](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189288)

___

### attributes

• `Optional` **attributes**: [`BusinessDataAttributesInfo`](../classes/BusinessDataAttributesInfo.md)

service details in a form of user-reviewed checks;
service details of a business entity displayed in a form of checks and based on user feedback and business category

#### Defined in

[main.ts:189319](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189319)

___

### category

• `Optional` **category**: `string`

business category
Google My Business general category that best describes the services provided by the business entity

#### Defined in

[main.ts:189271](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189271)

___

### category\_ids

• `Optional` **category\_ids**: `string`[]

global category IDs
universal category IDs that do not change based on the selected country

#### Defined in

[main.ts:189274](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189274)

___

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:189350](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189350)

___

### cid

• `Optional` **cid**: `string`

google-defined client id
unique id of a local establishment
learn more about the identifier in this help center article

#### Defined in

[main.ts:189281](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189281)

___

### contact\_info

• `Optional` **contact\_info**: [`BusinessDataContactInfo`](../classes/BusinessDataContactInfo.md)[]

available contacts of the business
list of contacts to interact with the business

#### Defined in

[main.ts:189347](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189347)

___

### description

• `Optional` **description**: `string`

description of the element in SERP
the description of the business entity for which the results are collected

#### Defined in

[main.ts:189268](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189268)

___

### domain

• `Optional` **domain**: `string`

domain of the business entity

#### Defined in

[main.ts:189298](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189298)

___

### feature\_id

• `Optional` **feature\_id**: `string`

the unique identifier of the element in SERP
learn more about the identifier in this help center article

#### Defined in

[main.ts:189284](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189284)

___

### is\_claimed

• `Optional` **is\_claimed**: `boolean`

shows whether the entity is verified by its owner on Google Maps

#### Defined in

[main.ts:189316](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189316)

___

### last\_updated\_time

• `Optional` **last\_updated\_time**: `string`

date and time when the data was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-26 09:03:15 +00:00

#### Defined in

[main.ts:189355](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189355)

___

### latitude

• `Optional` **latitude**: `number`

latitude coordinate of the local establishments in google maps
example:
"latitude": 51.584091

#### Defined in

[main.ts:189310](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189310)

___

### local\_business\_links

• `Optional` **local\_business\_links**: [`BaseLocalBusinessLink`](../classes/BaseLocalBusinessLink.md)[]

available interactions with the business
list of options to interact with the business directly from search results

#### Defined in

[main.ts:189344](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189344)

___

### logo

• `Optional` **logo**: `string`

URL of the logo featured in Google My Business profile

#### Defined in

[main.ts:189300](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189300)

___

### longitude

• `Optional` **longitude**: `number`

longitude coordinate of the local establishment in google maps
example:
"longitude": -0.31365919999999997

#### Defined in

[main.ts:189314](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189314)

___

### main\_image

• `Optional` **main\_image**: `string`

URL of the main image featured in Google My Business profile

#### Defined in

[main.ts:189302](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189302)

___

### people\_also\_search

• `Optional` **people\_also\_search**: [`PeopleAlsoSearch`](../classes/PeopleAlsoSearch.md)[]

related business entities

#### Defined in

[main.ts:189335](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189335)

___

### phone

• `Optional` **phone**: `string`

phone number of the business entity

#### Defined in

[main.ts:189294](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189294)

___

### place\_id

• `Optional` **place\_id**: `string`

unique place identifier
place id of the local establishment featured in the element
learn more about the identifier in this help center article

#### Defined in

[main.ts:189292](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189292)

___

### place\_topics

• `Optional` **place\_topics**: `Object`

keywords mentioned in customer reviews
contains most popular keywords related to products/services mentioned in customer reviews of a business entity and the number of reviews mentioning each keyword
example: 
"place_topics": {
"egg roll": 48,
"birthday": 33
}

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:189327](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189327)

___

### popular\_times

• `Optional` **popular\_times**: [`PopularTimes`](../classes/PopularTimes.md)

popular times
information related to busy hours of the business entity

#### Defined in

[main.ts:189341](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189341)

___

### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Defined in

[main.ts:189330](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189330)

___

### rating\_distribution

• `Optional` **rating\_distribution**: `Object`

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:189333](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189333)

___

### snippet

• `Optional` **snippet**: `string`

additional information on the business entity

#### Defined in

[main.ts:189306](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189306)

___

### title

• `Optional` **title**: `string`

title of the element in SERP
the name of the business entity for which the results are collected

#### Defined in

[main.ts:189265](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189265)

___

### total\_photos

• `Optional` **total\_photos**: `number`

total count of images featured in Google My Business profile

#### Defined in

[main.ts:189304](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189304)

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:189262](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189262)

___

### url

• `Optional` **url**: `string`

absolute url of the business entity

#### Defined in

[main.ts:189296](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189296)

___

### work\_time

• `Optional` **work\_time**: [`WorkInfo`](../classes/WorkInfo.md)

work time details
information related to operational hours of the business entity

#### Defined in

[main.ts:189338](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189338)
