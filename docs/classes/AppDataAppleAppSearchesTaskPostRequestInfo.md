[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataAppleAppSearchesTaskPostRequestInfo

# Class: AppDataAppleAppSearchesTaskPostRequestInfo

Defined in: main.ts:205268

## Implements

- [`IAppDataAppleAppSearchesTaskPostRequestInfo`](../interfaces/IAppDataAppleAppSearchesTaskPostRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppSearchesTaskPostRequestInfo()

> **new AppDataAppleAppSearchesTaskPostRequestInfo**(`data`?): [`AppDataAppleAppSearchesTaskPostRequestInfo`](AppDataAppleAppSearchesTaskPostRequestInfo.md)

Defined in: main.ts:205360

#### Parameters

##### data?

[`IAppDataAppleAppSearchesTaskPostRequestInfo`](../interfaces/IAppDataAppleAppSearchesTaskPostRequestInfo.md)

#### Returns

[`AppDataAppleAppSearchesTaskPostRequestInfo`](AppDataAppleAppSearchesTaskPostRequestInfo.md)

## Properties

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:205322

parsing depth
optional field
number of results to be returned from the App Store SERP;
we strongly recommend setting the parsing depth in the multiples of 100, because our system processes 100 results in a row;
Note: your account will be billed per each SERP containing up to 100 results;
thus, setting a depth above 100 may result in additional charges if the search engine returns more than 100 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded to your account balance automatically
default value: 100
maximum value: 700

#### Implementation of

[`IAppDataAppleAppSearchesTaskPostRequestInfo`](../interfaces/IAppDataAppleAppSearchesTaskPostRequestInfo.md).[`depth`](../interfaces/IAppDataAppleAppSearchesTaskPostRequestInfo.md#depth)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:205276

keyword
required field
you can specify up to 700 characters in the keyword field;
all %## will be decoded (plus character ‘+’ will be decoded to a space character);
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IAppDataAppleAppSearchesTaskPostRequestInfo`](../interfaces/IAppDataAppleAppSearchesTaskPostRequestInfo.md).[`keyword`](../interfaces/IAppDataAppleAppSearchesTaskPostRequestInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:205304

search engine language code
required field if language_name is not specified
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/app_data/apple/languages
example:
en

#### Implementation of

[`IAppDataAppleAppSearchesTaskPostRequestInfo`](../interfaces/IAppDataAppleAppSearchesTaskPostRequestInfo.md).[`language_code`](../interfaces/IAppDataAppleAppSearchesTaskPostRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:205297

full name of search engine language
required field if language_code is not specified
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/app_data/apple/languages
example:
English

#### Implementation of

[`IAppDataAppleAppSearchesTaskPostRequestInfo`](../interfaces/IAppDataAppleAppSearchesTaskPostRequestInfo.md).[`language_name`](../interfaces/IAppDataAppleAppSearchesTaskPostRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:205290

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engine with their location_code by making a separate request to https://api.dataforseo.com/v3/app_data/apple/locations
example:
9061121

#### Implementation of

[`IAppDataAppleAppSearchesTaskPostRequestInfo`](../interfaces/IAppDataAppleAppSearchesTaskPostRequestInfo.md).[`location_code`](../interfaces/IAppDataAppleAppSearchesTaskPostRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:205283

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/app_data/apple/locations
example:
West Los Angeles,California,United States

#### Implementation of

[`IAppDataAppleAppSearchesTaskPostRequestInfo`](../interfaces/IAppDataAppleAppSearchesTaskPostRequestInfo.md).[`location_name`](../interfaces/IAppDataAppleAppSearchesTaskPostRequestInfo.md#location_name)

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:205356

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

[`IAppDataAppleAppSearchesTaskPostRequestInfo`](../interfaces/IAppDataAppleAppSearchesTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IAppDataAppleAppSearchesTaskPostRequestInfo.md#pingback_url)

***

### postback\_data?

> `optional` **postback\_data**: `string`

Defined in: main.ts:205345

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced

#### Implementation of

[`IAppDataAppleAppSearchesTaskPostRequestInfo`](../interfaces/IAppDataAppleAppSearchesTaskPostRequestInfo.md).[`postback_data`](../interfaces/IAppDataAppleAppSearchesTaskPostRequestInfo.md#postback_data)

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:205339

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

[`IAppDataAppleAppSearchesTaskPostRequestInfo`](../interfaces/IAppDataAppleAppSearchesTaskPostRequestInfo.md).[`postback_url`](../interfaces/IAppDataAppleAppSearchesTaskPostRequestInfo.md#postback_url)

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:205312

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`IAppDataAppleAppSearchesTaskPostRequestInfo`](../interfaces/IAppDataAppleAppSearchesTaskPostRequestInfo.md).[`priority`](../interfaces/IAppDataAppleAppSearchesTaskPostRequestInfo.md#priority)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:205328

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IAppDataAppleAppSearchesTaskPostRequestInfo`](../interfaces/IAppDataAppleAppSearchesTaskPostRequestInfo.md).[`tag`](../interfaces/IAppDataAppleAppSearchesTaskPostRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:205369

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:205396

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppleAppSearchesTaskPostRequestInfo`](AppDataAppleAppSearchesTaskPostRequestInfo.md)

Defined in: main.ts:205389

#### Parameters

##### data

`any`

#### Returns

[`AppDataAppleAppSearchesTaskPostRequestInfo`](AppDataAppleAppSearchesTaskPostRequestInfo.md)
