[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataTripadvisorReviewsTaskPostRequestInfo

# Class: BusinessDataTripadvisorReviewsTaskPostRequestInfo

## Implements

- [`IBusinessDataTripadvisorReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTripadvisorReviewsTaskPostRequestInfo.md#constructor)

### Properties

- [depth](BusinessDataTripadvisorReviewsTaskPostRequestInfo.md#depth)
- [keyword](BusinessDataTripadvisorReviewsTaskPostRequestInfo.md#keyword)
- [language\_code](BusinessDataTripadvisorReviewsTaskPostRequestInfo.md#language_code)
- [language\_name](BusinessDataTripadvisorReviewsTaskPostRequestInfo.md#language_name)
- [location\_code](BusinessDataTripadvisorReviewsTaskPostRequestInfo.md#location_code)
- [location\_name](BusinessDataTripadvisorReviewsTaskPostRequestInfo.md#location_name)
- [months](BusinessDataTripadvisorReviewsTaskPostRequestInfo.md#months)
- [pingback\_url](BusinessDataTripadvisorReviewsTaskPostRequestInfo.md#pingback_url)
- [postback\_url](BusinessDataTripadvisorReviewsTaskPostRequestInfo.md#postback_url)
- [priority](BusinessDataTripadvisorReviewsTaskPostRequestInfo.md#priority)
- [ratings](BusinessDataTripadvisorReviewsTaskPostRequestInfo.md#ratings)
- [search\_reviews\_keyword](BusinessDataTripadvisorReviewsTaskPostRequestInfo.md#search_reviews_keyword)
- [sort\_by](BusinessDataTripadvisorReviewsTaskPostRequestInfo.md#sort_by)
- [tag](BusinessDataTripadvisorReviewsTaskPostRequestInfo.md#tag)
- [url\_path](BusinessDataTripadvisorReviewsTaskPostRequestInfo.md#url_path)
- [visit\_type](BusinessDataTripadvisorReviewsTaskPostRequestInfo.md#visit_type)

### Methods

- [init](BusinessDataTripadvisorReviewsTaskPostRequestInfo.md#init)
- [toJSON](BusinessDataTripadvisorReviewsTaskPostRequestInfo.md#tojson)
- [fromJS](BusinessDataTripadvisorReviewsTaskPostRequestInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTripadvisorReviewsTaskPostRequestInfo**(`data?`): [`BusinessDataTripadvisorReviewsTaskPostRequestInfo`](BusinessDataTripadvisorReviewsTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTripadvisorReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md) |

#### Returns

[`BusinessDataTripadvisorReviewsTaskPostRequestInfo`](BusinessDataTripadvisorReviewsTaskPostRequestInfo.md)

#### Defined in

[main.ts:201834](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201834)

## Properties

### depth

• `Optional` **depth**: `number`

parsing depth
optional field
number of reviews in SERP
we strongly recommend setting the parsing depth in the multiples of ten, because our systems processes ten reviews in a row
default value: 10

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskPostRequestInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md).[depth](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#depth)

#### Defined in

[main.ts:201777](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201777)

___

### keyword

• `Optional` **keyword**: `string`

keyword
required field if you do not specify url_path
the keyword you specify should indicate a name of an existing business or prominent place on Tripadvisor;
you can specify up to 700 symbols in the keyword filed;
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character);
if you need to use the “%” symbol for your keyword, please specify it as “%25”

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskPostRequestInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md).[keyword](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#keyword)

#### Defined in

[main.ts:201733](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201733)

___

### language\_code

• `Optional` **language\_code**: `string`

search engine language code
optional field
if you use this field, your account will be charged for one extra request
you can receive the list of available languages with language_code by making a separate request to the https://api.dataforseo.com/v3/business_data/tripadvisor/languages
example:
en
You will be additionally charged for setting a language parameter in this endpoint.
The cost can be calculated on the Pricing page.

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskPostRequestInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md).[language_code](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#language_code)

#### Defined in

[main.ts:201771](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201771)

___

### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
optional field
if you use this field, your account will be charged for one extra request
you can receive the list of available languages with language_name by making a separate request to the https://api.dataforseo.com/v3/business_data/tripadvisor/languages
example:
English
You will be additionally charged for setting a language parameter in this endpoint.
The cost can be calculated on the Pricing page.

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskPostRequestInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md).[language_name](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#language_name)

#### Defined in

[main.ts:201762](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201762)

___

### location\_code

• `Optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or url_path
you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/business_data/tripadvisor/locations
example:
1003854

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskPostRequestInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md).[location_code](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#location_code)

#### Defined in

[main.ts:201745](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201745)

___

### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or url_path
you can receive the list of available locations with location_name by making a separate request to the https://api.dataforseo.com/v3/business_data/tripadvisor/locations
example:
London,England,United Kingdom

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskPostRequestInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md).[location_name](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#location_name)

#### Defined in

[main.ts:201739](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201739)

___

### months

• `Optional` **months**: `string`[]

filter by months when a traveler made a visit
optional field
possible values: january, february, march, april, may, april, june, july, august, september, october, november, december
you can specify several values at once

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskPostRequestInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md).[months](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#months)

#### Defined in

[main.ts:201793](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201793)

___

### pingback\_url

• `Optional` **pingback\_url**: `string`

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special symbols in pingback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskPostRequestInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md).[pingback_url](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#pingback_url)

#### Defined in

[main.ts:201830](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201830)

___

### postback\_url

• `Optional` **postback\_url**: `string`

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special symbols in postback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskPostRequestInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md).[postback_url](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#postback_url)

#### Defined in

[main.ts:201820](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201820)

___

### priority

• `Optional` **priority**: `number`

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskPostRequestInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md).[priority](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#priority)

#### Defined in

[main.ts:201753](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201753)

___

### ratings

• `Optional` **ratings**: `string`[]

Tripadvisor traveler rating for a place of interest
optional field
rating based on the written reviews by a traveler after they visited a place.
possible values: excellent, very_good, average, poor, terrible
you can specify several values at once

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskPostRequestInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md).[ratings](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#ratings)

#### Defined in

[main.ts:201783](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201783)

___

### search\_reviews\_keyword

• `Optional` **search\_reviews\_keyword**: `string`

search reviews containing a specified keyword
example:
dessert

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskPostRequestInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md).[search_reviews_keyword](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#search_reviews_keyword)

#### Defined in

[main.ts:201797](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201797)

___

### sort\_by

• `Optional` **sort\_by**: `string`

results sorting parameters
optional field
you can use this field to sort the results;
possible types of sorting:
most_recent
detailed_reviews

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskPostRequestInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md).[sort_by](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#sort_by)

#### Defined in

[main.ts:201804](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201804)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskPostRequestInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md).[tag](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#tag)

#### Defined in

[main.ts:201810](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201810)

___

### url\_path

• `Optional` **url\_path**: `string`

URL path of the business entity
required field if you do not specify keyword
URL path to the Tripadvisor page of the business entity;
can be found in the URL of the business entity on Tripadvisor
example:
Hotel_Review-g60763-d23462501-Reviews-Margaritaville_Times_Square-New_York_City_New_York.html
https://www.tripadvisor.com/Hotel_Review-g60763-d23462501-Reviews-Margaritaville_Times_Square-New_York_City_New_York.html

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskPostRequestInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md).[url_path](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#url_path)

#### Defined in

[main.ts:201726](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201726)

___

### visit\_type

• `Optional` **visit\_type**: `string`[]

filter by type of travelers who left a review
optional field
possible values: families, couples, solo, business, friends
you can specify several values at once

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskPostRequestInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md).[visit_type](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#visit_type)

#### Defined in

[main.ts:201788](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201788)

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

[main.ts:201843](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201843)

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

[main.ts:201887](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201887)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataTripadvisorReviewsTaskPostRequestInfo`](BusinessDataTripadvisorReviewsTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTripadvisorReviewsTaskPostRequestInfo`](BusinessDataTripadvisorReviewsTaskPostRequestInfo.md)

#### Defined in

[main.ts:201880](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201880)
