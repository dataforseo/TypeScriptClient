[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataBusinessListingsSearchLiveItem

# Class: BusinessDataBusinessListingsSearchLiveItem

## Implements

- [`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataBusinessListingsSearchLiveItem.md#constructor)

### Properties

- [additional\_categories](BusinessDataBusinessListingsSearchLiveItem.md#additional_categories)
- [address](BusinessDataBusinessListingsSearchLiveItem.md#address)
- [address\_info](BusinessDataBusinessListingsSearchLiveItem.md#address_info)
- [attributes](BusinessDataBusinessListingsSearchLiveItem.md#attributes)
- [category](BusinessDataBusinessListingsSearchLiveItem.md#category)
- [category\_ids](BusinessDataBusinessListingsSearchLiveItem.md#category_ids)
- [check\_url](BusinessDataBusinessListingsSearchLiveItem.md#check_url)
- [cid](BusinessDataBusinessListingsSearchLiveItem.md#cid)
- [contact\_info](BusinessDataBusinessListingsSearchLiveItem.md#contact_info)
- [description](BusinessDataBusinessListingsSearchLiveItem.md#description)
- [domain](BusinessDataBusinessListingsSearchLiveItem.md#domain)
- [feature\_id](BusinessDataBusinessListingsSearchLiveItem.md#feature_id)
- [is\_claimed](BusinessDataBusinessListingsSearchLiveItem.md#is_claimed)
- [last\_updated\_time](BusinessDataBusinessListingsSearchLiveItem.md#last_updated_time)
- [latitude](BusinessDataBusinessListingsSearchLiveItem.md#latitude)
- [local\_business\_links](BusinessDataBusinessListingsSearchLiveItem.md#local_business_links)
- [logo](BusinessDataBusinessListingsSearchLiveItem.md#logo)
- [longitude](BusinessDataBusinessListingsSearchLiveItem.md#longitude)
- [main\_image](BusinessDataBusinessListingsSearchLiveItem.md#main_image)
- [people\_also\_search](BusinessDataBusinessListingsSearchLiveItem.md#people_also_search)
- [phone](BusinessDataBusinessListingsSearchLiveItem.md#phone)
- [place\_id](BusinessDataBusinessListingsSearchLiveItem.md#place_id)
- [place\_topics](BusinessDataBusinessListingsSearchLiveItem.md#place_topics)
- [popular\_times](BusinessDataBusinessListingsSearchLiveItem.md#popular_times)
- [rating](BusinessDataBusinessListingsSearchLiveItem.md#rating)
- [rating\_distribution](BusinessDataBusinessListingsSearchLiveItem.md#rating_distribution)
- [snippet](BusinessDataBusinessListingsSearchLiveItem.md#snippet)
- [title](BusinessDataBusinessListingsSearchLiveItem.md#title)
- [total\_photos](BusinessDataBusinessListingsSearchLiveItem.md#total_photos)
- [type](BusinessDataBusinessListingsSearchLiveItem.md#type)
- [url](BusinessDataBusinessListingsSearchLiveItem.md#url)
- [work\_time](BusinessDataBusinessListingsSearchLiveItem.md#work_time)

### Methods

- [init](BusinessDataBusinessListingsSearchLiveItem.md#init)
- [toJSON](BusinessDataBusinessListingsSearchLiveItem.md#tojson)
- [fromJS](BusinessDataBusinessListingsSearchLiveItem.md#fromjs)

## Constructors

### constructor

• **new BusinessDataBusinessListingsSearchLiveItem**(`data?`): [`BusinessDataBusinessListingsSearchLiveItem`](BusinessDataBusinessListingsSearchLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataBusinessListingsSearchLiveItem`](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md) |

#### Returns

[`BusinessDataBusinessListingsSearchLiveItem`](BusinessDataBusinessListingsSearchLiveItem.md)

#### Defined in

[main.ts:189097](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189097)

## Properties

### additional\_categories

• `Optional` **additional\_categories**: `string`[]

additional business categories
additional Google My Business categories that describe the services provided by the business entity in more detail

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveItem](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[additional_categories](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#additional_categories)

#### Defined in

[main.ts:189015](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189015)

___

### address

• `Optional` **address**: `string`

address of the business entity

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveItem](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[address](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#address)

#### Defined in

[main.ts:189024](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189024)

___

### address\_info

• `Optional` **address\_info**: [`AddressInfo`](AddressInfo.md)

object containing address components of the business entity

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveItem](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[address_info](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#address_info)

#### Defined in

[main.ts:189026](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189026)

___

### attributes

• `Optional` **attributes**: [`BusinessDataAttributesInfo`](BusinessDataAttributesInfo.md)

service details in a form of user-reviewed checks;
service details of a business entity displayed in a form of checks and based on user feedback and business category

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveItem](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[attributes](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#attributes)

#### Defined in

[main.ts:189057](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189057)

___

### category

• `Optional` **category**: `string`

business category
Google My Business general category that best describes the services provided by the business entity

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveItem](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[category](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#category)

#### Defined in

[main.ts:189009](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189009)

___

### category\_ids

• `Optional` **category\_ids**: `string`[]

global category IDs
universal category IDs that do not change based on the selected country

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveItem](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[category_ids](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#category_ids)

#### Defined in

[main.ts:189012](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189012)

___

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveItem](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[check_url](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#check_url)

#### Defined in

[main.ts:189088](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189088)

___

### cid

• `Optional` **cid**: `string`

google-defined client id
unique id of a local establishment
learn more about the identifier in this help center article

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveItem](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[cid](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#cid)

#### Defined in

[main.ts:189019](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189019)

___

### contact\_info

• `Optional` **contact\_info**: [`BusinessDataContactInfo`](BusinessDataContactInfo.md)[]

available contacts of the business
list of contacts to interact with the business

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveItem](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[contact_info](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#contact_info)

#### Defined in

[main.ts:189085](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189085)

___

### description

• `Optional` **description**: `string`

description of the element in SERP
the description of the business entity for which the results are collected

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveItem](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[description](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#description)

#### Defined in

[main.ts:189006](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189006)

___

### domain

• `Optional` **domain**: `string`

domain of the business entity

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveItem](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[domain](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#domain)

#### Defined in

[main.ts:189036](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189036)

___

### feature\_id

• `Optional` **feature\_id**: `string`

the unique identifier of the element in SERP
learn more about the identifier in this help center article

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveItem](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[feature_id](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#feature_id)

#### Defined in

[main.ts:189022](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189022)

___

### is\_claimed

• `Optional` **is\_claimed**: `boolean`

shows whether the entity is verified by its owner on Google Maps

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveItem](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[is_claimed](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#is_claimed)

#### Defined in

[main.ts:189054](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189054)

___

### last\_updated\_time

• `Optional` **last\_updated\_time**: `string`

date and time when the data was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-26 09:03:15 +00:00

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveItem](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[last_updated_time](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#last_updated_time)

#### Defined in

[main.ts:189093](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189093)

___

### latitude

• `Optional` **latitude**: `number`

latitude coordinate of the local establishments in google maps
example:
"latitude": 51.584091

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveItem](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[latitude](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#latitude)

#### Defined in

[main.ts:189048](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189048)

___

### local\_business\_links

• `Optional` **local\_business\_links**: [`BaseLocalBusinessLink`](BaseLocalBusinessLink.md)[]

available interactions with the business
list of options to interact with the business directly from search results

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveItem](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[local_business_links](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#local_business_links)

#### Defined in

[main.ts:189082](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189082)

___

### logo

• `Optional` **logo**: `string`

URL of the logo featured in Google My Business profile

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveItem](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[logo](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#logo)

#### Defined in

[main.ts:189038](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189038)

___

### longitude

• `Optional` **longitude**: `number`

longitude coordinate of the local establishment in google maps
example:
"longitude": -0.31365919999999997

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveItem](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[longitude](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#longitude)

#### Defined in

[main.ts:189052](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189052)

___

### main\_image

• `Optional` **main\_image**: `string`

URL of the main image featured in Google My Business profile

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveItem](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[main_image](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#main_image)

#### Defined in

[main.ts:189040](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189040)

___

### people\_also\_search

• `Optional` **people\_also\_search**: [`PeopleAlsoSearch`](PeopleAlsoSearch.md)[]

related business entities

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveItem](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[people_also_search](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#people_also_search)

#### Defined in

[main.ts:189073](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189073)

___

### phone

• `Optional` **phone**: `string`

phone number of the business entity

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveItem](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[phone](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#phone)

#### Defined in

[main.ts:189032](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189032)

___

### place\_id

• `Optional` **place\_id**: `string`

unique place identifier
place id of the local establishment featured in the element
learn more about the identifier in this help center article

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveItem](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[place_id](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#place_id)

#### Defined in

[main.ts:189030](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189030)

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

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveItem](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[place_topics](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#place_topics)

#### Defined in

[main.ts:189065](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189065)

___

### popular\_times

• `Optional` **popular\_times**: [`PopularTimes`](PopularTimes.md)

popular times
information related to busy hours of the business entity

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveItem](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[popular_times](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#popular_times)

#### Defined in

[main.ts:189079](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189079)

___

### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveItem](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[rating](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#rating)

#### Defined in

[main.ts:189068](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189068)

___

### rating\_distribution

• `Optional` **rating\_distribution**: `Object`

the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveItem](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[rating_distribution](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#rating_distribution)

#### Defined in

[main.ts:189071](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189071)

___

### snippet

• `Optional` **snippet**: `string`

additional information on the business entity

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveItem](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[snippet](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#snippet)

#### Defined in

[main.ts:189044](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189044)

___

### title

• `Optional` **title**: `string`

title of the element in SERP
the name of the business entity for which the results are collected

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveItem](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[title](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#title)

#### Defined in

[main.ts:189003](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189003)

___

### total\_photos

• `Optional` **total\_photos**: `number`

total count of images featured in Google My Business profile

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveItem](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[total_photos](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#total_photos)

#### Defined in

[main.ts:189042](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189042)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveItem](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[type](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#type)

#### Defined in

[main.ts:189000](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189000)

___

### url

• `Optional` **url**: `string`

absolute url of the business entity

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveItem](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[url](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#url)

#### Defined in

[main.ts:189034](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189034)

___

### work\_time

• `Optional` **work\_time**: [`WorkInfo`](WorkInfo.md)

work time details
information related to operational hours of the business entity

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveItem](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md).[work_time](../interfaces/IBusinessDataBusinessListingsSearchLiveItem.md#work_time)

#### Defined in

[main.ts:189076](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189076)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:189106](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189106)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:189186](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189186)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataBusinessListingsSearchLiveItem`](BusinessDataBusinessListingsSearchLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataBusinessListingsSearchLiveItem`](BusinessDataBusinessListingsSearchLiveItem.md)

#### Defined in

[main.ts:189179](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189179)
