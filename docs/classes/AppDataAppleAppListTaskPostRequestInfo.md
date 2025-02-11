[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataAppleAppListTaskPostRequestInfo

# Class: AppDataAppleAppListTaskPostRequestInfo

Defined in: main.ts:207536

## Implements

- [`IAppDataAppleAppListTaskPostRequestInfo`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppListTaskPostRequestInfo()

> **new AppDataAppleAppListTaskPostRequestInfo**(`data`?): [`AppDataAppleAppListTaskPostRequestInfo`](AppDataAppleAppListTaskPostRequestInfo.md)

Defined in: main.ts:207633

#### Parameters

##### data?

[`IAppDataAppleAppListTaskPostRequestInfo`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md)

#### Returns

[`AppDataAppleAppListTaskPostRequestInfo`](AppDataAppleAppListTaskPostRequestInfo.md)

## Properties

### app\_category?

> `optional` **app\_category**: `string`

Defined in: main.ts:207595

application category on the App Store
optional field
you can filter the results by app category;
example:
lifestyle;
you can review the full list of available categories here or by making a separate request to https://api.dataforseo.com/v3/app_data/apple/categories

#### Implementation of

[`IAppDataAppleAppListTaskPostRequestInfo`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md).[`app_category`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md#app_category)

***

### app\_collection?

> `optional` **app\_collection**: `string`

Defined in: main.ts:207542

app collection
required field
app collection on App Store from which apps will be collected;
you can specify the following values:
top_free_ios, top_paid_ios, top_grossing_ios, new_ios, new_free_ios, new_paid_ios

#### Implementation of

[`IAppDataAppleAppListTaskPostRequestInfo`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md).[`app_collection`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md#app_collection)

***

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:207588

parsing depth
optional field
number of apps to be returned from the App Store SERP;
we strongly recommend setting the parsing depth in the multiples of 100, because our system processes 100 results in a row;
Note: your account will be billed per each SERP containing up to 100 results;
thus, setting a depth above 100 may result in additional charges if the search engine returns more than 100 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded to your account balance automatically
default value: 100
maximum value: 1000

#### Implementation of

[`IAppDataAppleAppListTaskPostRequestInfo`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md).[`depth`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md#depth)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:207570

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/app_data/apple/languages
example:
en

#### Implementation of

[`IAppDataAppleAppListTaskPostRequestInfo`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md).[`language_code`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:207563

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/app_data/apple/languages
example:
English

#### Implementation of

[`IAppDataAppleAppListTaskPostRequestInfo`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md).[`language_name`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:207556

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engine with their location_code by making a separate request to https://api.dataforseo.com/v3/app_data/apple/locations
example:
9061121

#### Implementation of

[`IAppDataAppleAppListTaskPostRequestInfo`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md).[`location_code`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:207549

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/app_data/apple/locations
example:
West Los Angeles,California,United States

#### Implementation of

[`IAppDataAppleAppListTaskPostRequestInfo`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md).[`location_name`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md#location_name)

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:207629

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

[`IAppDataAppleAppListTaskPostRequestInfo`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md#pingback_url)

***

### postback\_data?

> `optional` **postback\_data**: `string`

Defined in: main.ts:207618

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced

#### Implementation of

[`IAppDataAppleAppListTaskPostRequestInfo`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md).[`postback_data`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md#postback_data)

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:207612

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

[`IAppDataAppleAppListTaskPostRequestInfo`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md).[`postback_url`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md#postback_url)

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:207578

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`IAppDataAppleAppListTaskPostRequestInfo`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md).[`priority`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md#priority)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:207601

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IAppDataAppleAppListTaskPostRequestInfo`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md).[`tag`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:207642

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:207670

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppleAppListTaskPostRequestInfo`](AppDataAppleAppListTaskPostRequestInfo.md)

Defined in: main.ts:207663

#### Parameters

##### data

`any`

#### Returns

[`AppDataAppleAppListTaskPostRequestInfo`](AppDataAppleAppListTaskPostRequestInfo.md)
