**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataAppleAppInfoTaskPostRequestInfo

# Class: AppDataAppleAppInfoTaskPostRequestInfo

## Implements

- [`IAppDataAppleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppInfoTaskPostRequestInfo(data)

> **new AppDataAppleAppInfoTaskPostRequestInfo**(`data`?): [`AppDataAppleAppInfoTaskPostRequestInfo`](AppDataAppleAppInfoTaskPostRequestInfo.md)

#### Parameters

• **data?**: [`IAppDataAppleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md)

#### Returns

[`AppDataAppleAppInfoTaskPostRequestInfo`](AppDataAppleAppInfoTaskPostRequestInfo.md)

#### Source

main.ts:196393

## Properties

### app\_id?

> **`optional`** **app\_id**: `string`

id of the app
required field
ID of the mobile application on App Store;
you can find the ID in the URL of every app listed on App Store;
example:
in the URL https://apps.apple.com/us/app/id835599320
the id is 835599320

#### Implementation of

[`IAppDataAppleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md).[`app_id`](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md#app_id)

#### Source

main.ts:196321

***

### language\_code?

> **`optional`** **language\_code**: `string`

search engine language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/app_data/apple/languages
example:
en

#### Implementation of

[`IAppDataAppleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md).[`language_code`](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md#language_code)

#### Source

main.ts:196349

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/app_data/apple/languages
example:
English

#### Implementation of

[`IAppDataAppleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md).[`language_name`](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md#language_name)

#### Source

main.ts:196342

***

### location\_code?

> **`optional`** **location\_code**: `number`

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engine with their location_code by making a separate request to https://api.dataforseo.com/v3/app_data/apple/locations
example:
9061121

#### Implementation of

[`IAppDataAppleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md).[`location_code`](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md#location_code)

#### Source

main.ts:196335

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/app_data/apple/locations
example:
West Los Angeles,California,United States

#### Implementation of

[`IAppDataAppleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md).[`location_name`](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md#location_name)

#### Source

main.ts:196328

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

[`IAppDataAppleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md#pingback_url)

#### Source

main.ts:196389

***

### postback\_data?

> **`optional`** **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced

#### Implementation of

[`IAppDataAppleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md).[`postback_data`](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md#postback_data)

#### Source

main.ts:196379

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

[`IAppDataAppleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md).[`postback_url`](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md#postback_url)

#### Source

main.ts:196373

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

[`IAppDataAppleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md).[`priority`](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md#priority)

#### Source

main.ts:196357

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IAppDataAppleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md).[`tag`](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md#tag)

#### Source

main.ts:196363

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:196402

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:196428

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataAppleAppInfoTaskPostRequestInfo`](AppDataAppleAppInfoTaskPostRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataAppleAppInfoTaskPostRequestInfo`](AppDataAppleAppInfoTaskPostRequestInfo.md)

#### Source

main.ts:196421
