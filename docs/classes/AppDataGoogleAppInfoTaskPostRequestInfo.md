**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataGoogleAppInfoTaskPostRequestInfo

# Class: AppDataGoogleAppInfoTaskPostRequestInfo

## Implements

- [`IAppDataGoogleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppInfoTaskPostRequestInfo(data)

> **new AppDataGoogleAppInfoTaskPostRequestInfo**(`data`?): [`AppDataGoogleAppInfoTaskPostRequestInfo`](AppDataGoogleAppInfoTaskPostRequestInfo.md)

#### Parameters

• **data?**: [`IAppDataGoogleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md)

#### Returns

[`AppDataGoogleAppInfoTaskPostRequestInfo`](AppDataGoogleAppInfoTaskPostRequestInfo.md)

#### Source

main.ts:191763

## Properties

### app\_id?

> **`optional`** **app\_id**: `string`

id of the app
required field
ID of the mobile application on Google Play;
you can find the ID in the URL of every app listed on Google Play;
example:
in the URL https://play.google.com/store/apps/details?id=org.telegram.messenger
the id is org.telegram.messenger

#### Implementation of

[`IAppDataGoogleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md).[`app_id`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md#app_id)

#### Source

main.ts:191691

***

### language\_code?

> **`optional`** **language\_code**: `string`

search engine language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/app_data/google/languages
example:
en

#### Implementation of

[`IAppDataGoogleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md).[`language_code`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md#language_code)

#### Source

main.ts:191719

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/app_data/google/languages
example:
English

#### Implementation of

[`IAppDataGoogleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md).[`language_name`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md#language_name)

#### Source

main.ts:191712

***

### location\_code?

> **`optional`** **location\_code**: `number`

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engine with their location_code by making a separate request to https://api.dataforseo.com/v3/app_data/google/locations
example:
9061121

#### Implementation of

[`IAppDataGoogleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md).[`location_code`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md#location_code)

#### Source

main.ts:191705

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/app_data/google/locations
example:
West Los Angeles,California,United States

#### Implementation of

[`IAppDataGoogleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md).[`location_name`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md#location_name)

#### Source

main.ts:191698

***

### pingback\_url?

> **`optional`** **pingback\_url**: `string`

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

[`IAppDataGoogleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md#pingback_url)

#### Source

main.ts:191759

***

### postback\_data?

> **`optional`** **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

#### Implementation of

[`IAppDataGoogleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md).[`postback_data`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md#postback_data)

#### Source

main.ts:191749

***

### postback\_url?

> **`optional`** **postback\_url**: `string`

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

[`IAppDataGoogleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md).[`postback_url`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md#postback_url)

#### Source

main.ts:191743

***

### priority?

> **`optional`** **priority**: `number`

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`IAppDataGoogleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md).[`priority`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md#priority)

#### Source

main.ts:191727

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IAppDataGoogleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md).[`tag`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md#tag)

#### Source

main.ts:191733

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:191772

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:191798

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataGoogleAppInfoTaskPostRequestInfo`](AppDataGoogleAppInfoTaskPostRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataGoogleAppInfoTaskPostRequestInfo`](AppDataGoogleAppInfoTaskPostRequestInfo.md)

#### Source

main.ts:191791
