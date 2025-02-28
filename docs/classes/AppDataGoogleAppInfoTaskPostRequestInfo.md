[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleAppInfoTaskPostRequestInfo

# Class: AppDataGoogleAppInfoTaskPostRequestInfo

Defined in: main.ts:201982

## Implements

- [`IAppDataGoogleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppInfoTaskPostRequestInfo()

> **new AppDataGoogleAppInfoTaskPostRequestInfo**(`data`?): [`AppDataGoogleAppInfoTaskPostRequestInfo`](AppDataGoogleAppInfoTaskPostRequestInfo.md)

Defined in: main.ts:202062

#### Parameters

##### data?

[`IAppDataGoogleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md)

#### Returns

[`AppDataGoogleAppInfoTaskPostRequestInfo`](AppDataGoogleAppInfoTaskPostRequestInfo.md)

## Properties

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:201990

id of the app
required field
ID of the mobile application on Google Play;
you can find the ID in the URL of every app listed on Google Play;
example:
in the URL https://play.google.com/store/apps/details?id=org.telegram.messenger
the id is org.telegram.messenger

#### Implementation of

[`IAppDataGoogleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md).[`app_id`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md#app_id)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:202018

search engine language code
required field if language_name is not specified
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/app_data/google/languages
example:
en

#### Implementation of

[`IAppDataGoogleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md).[`language_code`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:202011

full name of search engine language
required field if language_code is not specified
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/app_data/google/languages
example:
English

#### Implementation of

[`IAppDataGoogleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md).[`language_name`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:202004

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engine with their location_code by making a separate request to https://api.dataforseo.com/v3/app_data/google/locations
example:
9061121

#### Implementation of

[`IAppDataGoogleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md).[`location_code`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:201997

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/app_data/google/locations
example:
West Los Angeles,California,United States

#### Implementation of

[`IAppDataGoogleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md).[`location_name`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md#location_name)

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:202058

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23

#### Implementation of

[`IAppDataGoogleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md#pingback_url)

***

### postback\_data?

> `optional` **postback\_data**: `string`

Defined in: main.ts:202048

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

#### Implementation of

[`IAppDataGoogleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md).[`postback_data`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md#postback_data)

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:202042

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23

#### Implementation of

[`IAppDataGoogleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md).[`postback_url`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md#postback_url)

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:202026

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`IAppDataGoogleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md).[`priority`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md#priority)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:202032

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IAppDataGoogleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md).[`tag`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:202071

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:202097

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppInfoTaskPostRequestInfo`](AppDataGoogleAppInfoTaskPostRequestInfo.md)

Defined in: main.ts:202090

#### Parameters

##### data

`any`

#### Returns

[`AppDataGoogleAppInfoTaskPostRequestInfo`](AppDataGoogleAppInfoTaskPostRequestInfo.md)
