[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleJobsTaskPostRequestInfo

# Class: SerpGoogleJobsTaskPostRequestInfo

Defined in: main.ts:53678

## Implements

- [`ISerpGoogleJobsTaskPostRequestInfo`](../interfaces/ISerpGoogleJobsTaskPostRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleJobsTaskPostRequestInfo()

> **new SerpGoogleJobsTaskPostRequestInfo**(`data`?): [`SerpGoogleJobsTaskPostRequestInfo`](SerpGoogleJobsTaskPostRequestInfo.md)

Defined in: main.ts:53793

#### Parameters

##### data?

[`ISerpGoogleJobsTaskPostRequestInfo`](../interfaces/ISerpGoogleJobsTaskPostRequestInfo.md)

#### Returns

[`SerpGoogleJobsTaskPostRequestInfo`](SerpGoogleJobsTaskPostRequestInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:53755

job posting date
optional field
you can use this field to filter job vacancies by posting date;
possible values:
today — return job vacancies posted today;
3days — return job vacancies posted no longer than 3 days ago;
week — return job vacancies posted no longer than a week ago;
month — return job vacancies posted no longer than a month ago

#### Implementation of

[`ISerpGoogleJobsTaskPostRequestInfo`](../interfaces/ISerpGoogleJobsTaskPostRequestInfo.md).[`date_posted`](../interfaces/ISerpGoogleJobsTaskPostRequestInfo.md#date_posted)

***

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:53740

parsing depth
optional field
number of results in SERP;
default value: 10
max value: 200
Note: your account will be billed per each SERP containing up to 10 results;
thus, setting the depth above 10 may result in additional charges if the search engine returns more than 10 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Implementation of

[`ISerpGoogleJobsTaskPostRequestInfo`](../interfaces/ISerpGoogleJobsTaskPostRequestInfo.md).[`depth`](../interfaces/ISerpGoogleJobsTaskPostRequestInfo.md#depth)

***

### employment\_type?

> `optional` **employment\_type**: `string`[]

Defined in: main.ts:53746

employment contract type
optional field
type of employment contract for which the search results will be returned;
possible values:
fulltime, partime, contractor, intern

#### Implementation of

[`ISerpGoogleJobsTaskPostRequestInfo`](../interfaces/ISerpGoogleJobsTaskPostRequestInfo.md).[`employment_type`](../interfaces/ISerpGoogleJobsTaskPostRequestInfo.md#employment_type)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:53688

keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”;
Note: the keyword you specify must indicate the job title;
example: .net developer
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`ISerpGoogleJobsTaskPostRequestInfo`](../interfaces/ISerpGoogleJobsTaskPostRequestInfo.md).[`keyword`](../interfaces/ISerpGoogleJobsTaskPostRequestInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:53731

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name;
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en

#### Implementation of

[`ISerpGoogleJobsTaskPostRequestInfo`](../interfaces/ISerpGoogleJobsTaskPostRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleJobsTaskPostRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:53724

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code;
you can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/serp/google/languages
example:
English

#### Implementation of

[`ISerpGoogleJobsTaskPostRequestInfo`](../interfaces/ISerpGoogleJobsTaskPostRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleJobsTaskPostRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:53709

search engine location code
required field if you don’t specify location_name;
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/serp/google/jobs/locations
example:
2840

#### Implementation of

[`ISerpGoogleJobsTaskPostRequestInfo`](../interfaces/ISerpGoogleJobsTaskPostRequestInfo.md).[`location_code`](../interfaces/ISerpGoogleJobsTaskPostRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:53703

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code;
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/serp/google/jobs/locations
example:
London,England,United Kingdom

#### Implementation of

[`ISerpGoogleJobsTaskPostRequestInfo`](../interfaces/ISerpGoogleJobsTaskPostRequestInfo.md).[`location_name`](../interfaces/ISerpGoogleJobsTaskPostRequestInfo.md#location_name)

***

### location\_radius?

> `optional` **location\_radius**: `number`

Defined in: main.ts:53717

location search radius
optional field
location search radius in kilometers;
Note: for countries that use the imperial system of units, you will need to convert miles to kilometers by multiplying the value in miles by 1.609;
if value is not specified, search is executed anywhere within the specified location;
maximal value: 300
minimal value: > 0

#### Implementation of

[`ISerpGoogleJobsTaskPostRequestInfo`](../interfaces/ISerpGoogleJobsTaskPostRequestInfo.md).[`location_radius`](../interfaces/ISerpGoogleJobsTaskPostRequestInfo.md#location_radius)

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:53789

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

[`ISerpGoogleJobsTaskPostRequestInfo`](../interfaces/ISerpGoogleJobsTaskPostRequestInfo.md).[`pingback_url`](../interfaces/ISerpGoogleJobsTaskPostRequestInfo.md#pingback_url)

***

### postback\_data?

> `optional` **postback\_data**: `string`

Defined in: main.ts:53778

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
regular, advanced, html

#### Implementation of

[`ISerpGoogleJobsTaskPostRequestInfo`](../interfaces/ISerpGoogleJobsTaskPostRequestInfo.md).[`postback_data`](../interfaces/ISerpGoogleJobsTaskPostRequestInfo.md#postback_data)

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:53772

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`ISerpGoogleJobsTaskPostRequestInfo`](../interfaces/ISerpGoogleJobsTaskPostRequestInfo.md).[`postback_url`](../interfaces/ISerpGoogleJobsTaskPostRequestInfo.md#postback_url)

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:53696

task priority
optional field
can take the following values:
1 – normal execution priority (set by default);
2 – high execution priority
You will be additionally charged for the tasks with high execution priority;
The cost can be calculated on the Pricing page

#### Implementation of

[`ISerpGoogleJobsTaskPostRequestInfo`](../interfaces/ISerpGoogleJobsTaskPostRequestInfo.md).[`priority`](../interfaces/ISerpGoogleJobsTaskPostRequestInfo.md#priority)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:53761

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleJobsTaskPostRequestInfo`](../interfaces/ISerpGoogleJobsTaskPostRequestInfo.md).[`tag`](../interfaces/ISerpGoogleJobsTaskPostRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:53802

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:53836

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleJobsTaskPostRequestInfo`](SerpGoogleJobsTaskPostRequestInfo.md)

Defined in: main.ts:53829

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleJobsTaskPostRequestInfo`](SerpGoogleJobsTaskPostRequestInfo.md)
