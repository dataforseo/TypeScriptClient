[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleJobsTaskPostRequestInfo

# Interface: ISerpGoogleJobsTaskPostRequestInfo

## Implemented by

- [`SerpGoogleJobsTaskPostRequestInfo`](../classes/SerpGoogleJobsTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](ISerpGoogleJobsTaskPostRequestInfo.md#date_posted)
- [depth](ISerpGoogleJobsTaskPostRequestInfo.md#depth)
- [employment\_type](ISerpGoogleJobsTaskPostRequestInfo.md#employment_type)
- [keyword](ISerpGoogleJobsTaskPostRequestInfo.md#keyword)
- [language\_code](ISerpGoogleJobsTaskPostRequestInfo.md#language_code)
- [language\_name](ISerpGoogleJobsTaskPostRequestInfo.md#language_name)
- [location\_code](ISerpGoogleJobsTaskPostRequestInfo.md#location_code)
- [location\_name](ISerpGoogleJobsTaskPostRequestInfo.md#location_name)
- [location\_radius](ISerpGoogleJobsTaskPostRequestInfo.md#location_radius)
- [pingback\_url](ISerpGoogleJobsTaskPostRequestInfo.md#pingback_url)
- [postback\_data](ISerpGoogleJobsTaskPostRequestInfo.md#postback_data)
- [postback\_url](ISerpGoogleJobsTaskPostRequestInfo.md#postback_url)
- [priority](ISerpGoogleJobsTaskPostRequestInfo.md#priority)
- [tag](ISerpGoogleJobsTaskPostRequestInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

job posting date
optional field
you can use this field to filter job vacancies by posting date;
possible values:
today — return job vacancies posted today;
3days — return job vacancies posted no longer than 3 days ago;
week — return job vacancies posted no longer than a week ago;
month — return job vacancies posted no longer than a month ago

#### Defined in

[main.ts:48541](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48541)

___


### depth

• `Optional` **depth**: `number`

parsing depth
optional field
number of results in SERP;
default value: 10
max value: 200
Note: your account will be billed per each SERP containing up to 10 results;
thus, setting the depth above 10 may result in additional charges if the search engine returns more than 10 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Defined in

[main.ts:48526](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48526)

___


### employment\_type

• `Optional` **employment\_type**: `string`[]

employment contract type
optional field
type of employment contract for which the search results will be returned;
possible values:
fulltime, partime, contractor, intern

#### Defined in

[main.ts:48532](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48532)

___


### keyword

• `Optional` **keyword**: `string`

keyword
required field
you can specify up to 700 symbols in the keyword field
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”;
if you need to use the “+” symbol for your keyword, please specify it as “%2B”;
Note: the keyword you specify must indicate the job title;
example: .net developer

#### Defined in

[main.ts:48474](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48474)

___


### language\_code

• `Optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name;
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en

#### Defined in

[main.ts:48517](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48517)

___


### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code;
you can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/serp/google/languages
example:
English

#### Defined in

[main.ts:48510](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48510)

___


### location\_code

• `Optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name;
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/serp/google/jobs/locations
example:
2840

#### Defined in

[main.ts:48495](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48495)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code;
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/serp/google/jobs/locations
example:
London,England,United Kingdom

#### Defined in

[main.ts:48489](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48489)

___


### location\_radius

• `Optional` **location\_radius**: `number`

location search radius
optional field
location search radius in kilometers;
Note: for countries that use the imperial system of units, you will need to convert miles to kilometers by multiplying the value in miles by 1.609;
if value is not specified, search is executed anywhere within the specified location;
maximal value: 300
minimal value: > 0

#### Defined in

[main.ts:48503](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48503)

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

[main.ts:48573](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48573)

___


### postback\_data

• `Optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
regular, advanced, html

#### Defined in

[main.ts:48563](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48563)

___


### postback\_url

• `Optional` **postback\_url**: `string`

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special symbols in postback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Defined in

[main.ts:48557](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48557)

___


### priority

• `Optional` **priority**: `number`

task priority
optional field
can take the following values:
1 – normal execution priority (set by default);
2 – high execution priority
You will be additionally charged for the tasks with high execution priority;
The cost can be calculated on the Pricing page

#### Defined in

[main.ts:48482](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48482)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:48547](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48547)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")