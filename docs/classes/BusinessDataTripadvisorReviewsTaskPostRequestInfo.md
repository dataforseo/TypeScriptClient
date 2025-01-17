[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataTripadvisorReviewsTaskPostRequestInfo

# Class: BusinessDataTripadvisorReviewsTaskPostRequestInfo

Defined in: main.ts:228522

## Implements

- [`IBusinessDataTripadvisorReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTripadvisorReviewsTaskPostRequestInfo()

> **new BusinessDataTripadvisorReviewsTaskPostRequestInfo**(`data`?): [`BusinessDataTripadvisorReviewsTaskPostRequestInfo`](BusinessDataTripadvisorReviewsTaskPostRequestInfo.md)

Defined in: main.ts:228647

#### Parameters

##### data?

[`IBusinessDataTripadvisorReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md)

#### Returns

[`BusinessDataTripadvisorReviewsTaskPostRequestInfo`](BusinessDataTripadvisorReviewsTaskPostRequestInfo.md)

## Properties

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:228581

parsing depth
optional field
number of reviews in SERP;
we strongly recommend setting the parsing depth in the multiples of ten, because our systems processes ten reviews in a row;
default value: 10;
max value: 4490

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md).[`depth`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#depth)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:228536

keyword
required field if you do not specify url_path
the keyword you specify should indicate a name of an existing business or prominent place on Tripadvisor;
you can specify up to 700 characters in the keyword filed;
all %## will be decoded (plus character ‘+’ will be decoded to a space character);
if you need to use the “%” character for your keyword, please specify it as “%25”

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md).[`keyword`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:228574

search engine language code
optional field
if you use this field, your account will be charged for one extra request
you can receive the list of available languages with language_code by making a separate request to the https://api.dataforseo.com/v3/business_data/tripadvisor/languages
example:
en
You will be additionally charged for setting a language parameter in this endpoint.
The cost can be calculated on the Pricing page.

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md).[`language_code`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:228565

full name of search engine language
optional field
if you use this field, your account will be charged for one extra request
you can receive the list of available languages with language_name by making a separate request to the https://api.dataforseo.com/v3/business_data/tripadvisor/languages
example:
English
You will be additionally charged for setting a language parameter in this endpoint.
The cost can be calculated on the Pricing page.

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md).[`language_name`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:228548

search engine location code
required field if you don’t specify location_name or url_path
you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/business_data/tripadvisor/locations
example:
1003854

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md).[`location_code`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:228542

full name of search engine location
required field if you don’t specify location_code or url_path
you can receive the list of available locations with location_name by making a separate request to the https://api.dataforseo.com/v3/business_data/tripadvisor/locations
example:
London,England,United Kingdom

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md).[`location_name`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#location_name)

***

### months?

> `optional` **months**: `string`[]

Defined in: main.ts:228597

filter by months when a traveler made a visit
optional field
possible values: january, february, march, april, may, april, june, july, august, september, october, november, december
you can specify several values at once

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md).[`months`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#months)

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:228643

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#pingback_url)

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:228632

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md).[`postback_url`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#postback_url)

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:228556

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md).[`priority`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#priority)

***

### ratings?

> `optional` **ratings**: `string`[]

Defined in: main.ts:228587

Tripadvisor traveler rating for a place of interest
optional field
rating based on the written reviews by a traveler after they visited a place.
possible values: excellent, very_good, average, poor, terrible
you can specify several values at once

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md).[`ratings`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#ratings)

***

### search\_reviews\_keyword?

> `optional` **search\_reviews\_keyword**: `string`

Defined in: main.ts:228601

search reviews containing a specified keyword
example:
dessert

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md).[`search_reviews_keyword`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#search_reviews_keyword)

***

### sort\_by?

> `optional` **sort\_by**: `string`

Defined in: main.ts:228608

results sorting parameters
optional field
you can use this field to sort the results;
possible types of sorting:
most_recent
detailed_reviews

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md).[`sort_by`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#sort_by)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:228621

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md).[`tag`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#tag)

***

### translate\_reviews?

> `optional` **translate\_reviews**: `boolean`

Defined in: main.ts:228615

translate reviews according to the URL path
optional field
if set to true, returned reviews will be translated to the language matching the specified url_path;
for example, if url_path contains tripadvisor.it and translate_reviews is true, reviews will be translated to the Italian language;
default value: true
you can learn more about how reviews are translated in this Help Center article

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md).[`translate_reviews`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#translate_reviews)

***

### url\_path?

> `optional` **url\_path**: `string`

Defined in: main.ts:228529

URL path of the business entity
required field if you do not specify keyword
URL path to the Tripadvisor page of the business entity;
examples:
Hotel_Review-g60763-d23462501-Reviews-Margaritaville_Times_Square-New_York_City_New_York.html
https://www.tripadvisor.com/Hotel_Review-g60763-d23462501-Reviews-Margaritaville_Times_Square-New_York_City_New_York.html

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md).[`url_path`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#url_path)

***

### visit\_type?

> `optional` **visit\_type**: `string`[]

Defined in: main.ts:228592

filter by type of travelers who left a review
optional field
possible values: families, couples, solo, business, friends
you can specify several values at once

#### Implementation of

[`IBusinessDataTripadvisorReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md).[`visit_type`](../interfaces/IBusinessDataTripadvisorReviewsTaskPostRequestInfo.md#visit_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:228656

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:228701

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTripadvisorReviewsTaskPostRequestInfo`](BusinessDataTripadvisorReviewsTaskPostRequestInfo.md)

Defined in: main.ts:228694

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataTripadvisorReviewsTaskPostRequestInfo`](BusinessDataTripadvisorReviewsTaskPostRequestInfo.md)
