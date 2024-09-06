[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AppDataAppleAppListTaskPostRequestInfo

# Class: AppDataAppleAppListTaskPostRequestInfo

## Implements

- [`IAppDataAppleAppListTaskPostRequestInfo`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppListTaskPostRequestInfo()

> **new AppDataAppleAppListTaskPostRequestInfo**(`data`?): [`AppDataAppleAppListTaskPostRequestInfo`](AppDataAppleAppListTaskPostRequestInfo.md)

#### Parameters

• **data?**: [`IAppDataAppleAppListTaskPostRequestInfo`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md)

#### Returns

[`AppDataAppleAppListTaskPostRequestInfo`](AppDataAppleAppListTaskPostRequestInfo.md)

#### Defined in

main.ts:194719

## Properties

### app\_category?

> `optional` **app\_category**: `string`

application category on the App Store
optional field
you can filter the results by app category;
example:
lifestyle;
you can review the full list of available categories here or by making a separate request to https://api.dataforseo.com/v3/app_data/apple/categories

#### Implementation of

[`IAppDataAppleAppListTaskPostRequestInfo`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md).[`app_category`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md#app_category)

#### Defined in

main.ts:194683

***

### app\_collection?

> `optional` **app\_collection**: `string`

app collection
required field
app collection on App Store from which apps will be collected;
you can specify the following values:
top_free_ios, top_paid_ios, top_grossing_ios, new_ios, new_free_ios, new_paid_ios

#### Implementation of

[`IAppDataAppleAppListTaskPostRequestInfo`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md).[`app_collection`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md#app_collection)

#### Defined in

main.ts:194630

***

### depth?

> `optional` **depth**: `number`

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

#### Defined in

main.ts:194676

***

### language\_code?

> `optional` **language\_code**: `string`

search engine language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/app_data/apple/languages
example:
en

#### Implementation of

[`IAppDataAppleAppListTaskPostRequestInfo`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md).[`language_code`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md#language_code)

#### Defined in

main.ts:194658

***

### language\_name?

> `optional` **language\_name**: `string`

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/app_data/apple/languages
example:
English

#### Implementation of

[`IAppDataAppleAppListTaskPostRequestInfo`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md).[`language_name`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md#language_name)

#### Defined in

main.ts:194651

***

### location\_code?

> `optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engine with their location_code by making a separate request to https://api.dataforseo.com/v3/app_data/apple/locations
example:
9061121

#### Implementation of

[`IAppDataAppleAppListTaskPostRequestInfo`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md).[`location_code`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md#location_code)

#### Defined in

main.ts:194644

***

### location\_name?

> `optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/app_data/apple/locations
example:
West Los Angeles,California,United States

#### Implementation of

[`IAppDataAppleAppListTaskPostRequestInfo`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md).[`location_name`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md#location_name)

#### Defined in

main.ts:194637

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

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

[`IAppDataAppleAppListTaskPostRequestInfo`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md#pingback_url)

#### Defined in

main.ts:194715

***

### postback\_data?

> `optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced

#### Implementation of

[`IAppDataAppleAppListTaskPostRequestInfo`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md).[`postback_data`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md#postback_data)

#### Defined in

main.ts:194705

***

### postback\_url?

> `optional` **postback\_url**: `string`

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

[`IAppDataAppleAppListTaskPostRequestInfo`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md).[`postback_url`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md#postback_url)

#### Defined in

main.ts:194699

***

### priority?

> `optional` **priority**: `number`

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`IAppDataAppleAppListTaskPostRequestInfo`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md).[`priority`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md#priority)

#### Defined in

main.ts:194666

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IAppDataAppleAppListTaskPostRequestInfo`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md).[`tag`](../interfaces/IAppDataAppleAppListTaskPostRequestInfo.md#tag)

#### Defined in

main.ts:194689

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:194728

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:194756

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppleAppListTaskPostRequestInfo`](AppDataAppleAppListTaskPostRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataAppleAppListTaskPostRequestInfo`](AppDataAppleAppListTaskPostRequestInfo.md)

#### Defined in

main.ts:194749
