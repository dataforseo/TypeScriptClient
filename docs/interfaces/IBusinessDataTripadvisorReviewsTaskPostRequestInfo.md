[dataforseo-client](../README.md) / [Exports](../modules.md) / IBusinessDataTripadvisorReviewsTaskPostRequestInfo

# Interface: IBusinessDataTripadvisorReviewsTaskPostRequestInfo

## Implemented by

- [`BusinessDataTripadvisorReviewsTaskPostRequestInfo`](../classes/BusinessDataTripadvisorReviewsTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [depth](IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#depth)
- [keyword](IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#keyword)
- [language\_code](IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#language_code)
- [language\_name](IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#language_name)
- [location\_code](IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#location_code)
- [location\_name](IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#location_name)
- [months](IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#months)
- [pingback\_url](IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#pingback_url)
- [postback\_url](IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#postback_url)
- [priority](IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#priority)
- [ratings](IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#ratings)
- [search\_reviews\_keyword](IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#search_reviews_keyword)
- [sort\_by](IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#sort_by)
- [tag](IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#tag)
- [url\_path](IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#url_path)
- [visit\_type](IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#visit_type)

## Properties

### depth

• `Optional` **depth**: `number`

parsing depth
optional field
number of reviews in SERP
we strongly recommend setting the parsing depth in the multiples of ten, because our systems processes ten reviews in a row
default value: 10

#### Defined in

[main.ts:201984](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201984)

___

### keyword

• `Optional` **keyword**: `string`

keyword
required field if you do not specify url_path
the keyword you specify should indicate a name of an existing business or prominent place on Tripadvisor;
you can specify up to 700 symbols in the keyword filed;
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character);
if you need to use the “%” symbol for your keyword, please specify it as “%25”

#### Defined in

[main.ts:201940](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201940)

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

#### Defined in

[main.ts:201978](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201978)

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

#### Defined in

[main.ts:201969](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201969)

___

### location\_code

• `Optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or url_path
you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/business_data/tripadvisor/locations
example:
1003854

#### Defined in

[main.ts:201952](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201952)

___

### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or url_path
you can receive the list of available locations with location_name by making a separate request to the https://api.dataforseo.com/v3/business_data/tripadvisor/locations
example:
London,England,United Kingdom

#### Defined in

[main.ts:201946](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201946)

___

### months

• `Optional` **months**: `string`[]

filter by months when a traveler made a visit
optional field
possible values: january, february, march, april, may, april, june, july, august, september, october, november, december
you can specify several values at once

#### Defined in

[main.ts:202000](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202000)

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

#### Defined in

[main.ts:202037](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202037)

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

#### Defined in

[main.ts:202027](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202027)

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

#### Defined in

[main.ts:201960](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201960)

___

### ratings

• `Optional` **ratings**: `string`[]

Tripadvisor traveler rating for a place of interest
optional field
rating based on the written reviews by a traveler after they visited a place.
possible values: excellent, very_good, average, poor, terrible
you can specify several values at once

#### Defined in

[main.ts:201990](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201990)

___

### search\_reviews\_keyword

• `Optional` **search\_reviews\_keyword**: `string`

search reviews containing a specified keyword
example:
dessert

#### Defined in

[main.ts:202004](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202004)

___

### sort\_by

• `Optional` **sort\_by**: `string`

results sorting parameters
optional field
you can use this field to sort the results;
possible types of sorting:
most_recent
detailed_reviews

#### Defined in

[main.ts:202011](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202011)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:202017](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202017)

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

#### Defined in

[main.ts:201933](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201933)

___

### visit\_type

• `Optional` **visit\_type**: `string`[]

filter by type of travelers who left a review
optional field
possible values: families, couples, solo, business, friends
you can specify several values at once

#### Defined in

[main.ts:201995](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201995)
