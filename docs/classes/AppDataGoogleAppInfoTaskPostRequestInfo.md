[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleAppInfoTaskPostRequestInfo

# Class: AppDataGoogleAppInfoTaskPostRequestInfo

## Implements

- [`IAppDataGoogleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppInfoTaskPostRequestInfo.md#constructor)

### Properties

- [app\_id](AppDataGoogleAppInfoTaskPostRequestInfo.md#app_id)
- [language\_code](AppDataGoogleAppInfoTaskPostRequestInfo.md#language_code)
- [language\_name](AppDataGoogleAppInfoTaskPostRequestInfo.md#language_name)
- [location\_code](AppDataGoogleAppInfoTaskPostRequestInfo.md#location_code)
- [location\_name](AppDataGoogleAppInfoTaskPostRequestInfo.md#location_name)
- [pingback\_url](AppDataGoogleAppInfoTaskPostRequestInfo.md#pingback_url)
- [postback\_data](AppDataGoogleAppInfoTaskPostRequestInfo.md#postback_data)
- [postback\_url](AppDataGoogleAppInfoTaskPostRequestInfo.md#postback_url)
- [priority](AppDataGoogleAppInfoTaskPostRequestInfo.md#priority)
- [tag](AppDataGoogleAppInfoTaskPostRequestInfo.md#tag)

### Methods

- [init](AppDataGoogleAppInfoTaskPostRequestInfo.md#init)
- [toJSON](AppDataGoogleAppInfoTaskPostRequestInfo.md#tojson)
- [fromJS](AppDataGoogleAppInfoTaskPostRequestInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppInfoTaskPostRequestInfo**(`data?`): [`AppDataGoogleAppInfoTaskPostRequestInfo`](AppDataGoogleAppInfoTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md) |

#### Returns

[`AppDataGoogleAppInfoTaskPostRequestInfo`](AppDataGoogleAppInfoTaskPostRequestInfo.md)

#### Defined in

[main.ts:179324](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179324)

## Properties

### app\_id

• `Optional` **app\_id**: `string`

id of the app
required field
ID of the mobile application on Google Play;
you can find the ID in the URL of every app listed on Google Play;
example:
in the URL https://play.google.com/store/apps/details?id=org.telegram.messenger
the id is org.telegram.messenger

#### Implementation of

[IAppDataGoogleAppInfoTaskPostRequestInfo](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md).[app_id](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md#app_id)

#### Defined in

[main.ts:179252](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179252)

___


### language\_code

• `Optional` **language\_code**: `string`

search engine language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/app_data/google/languages
example:
en

#### Implementation of

[IAppDataGoogleAppInfoTaskPostRequestInfo](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md).[language_code](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md#language_code)

#### Defined in

[main.ts:179280](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179280)

___


### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/app_data/google/languages
example:
English

#### Implementation of

[IAppDataGoogleAppInfoTaskPostRequestInfo](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md).[language_name](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md#language_name)

#### Defined in

[main.ts:179273](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179273)

___


### location\_code

• `Optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engine with their location_code by making a separate request to https://api.dataforseo.com/v3/app_data/google/locations
example:
9061121

#### Implementation of

[IAppDataGoogleAppInfoTaskPostRequestInfo](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md).[location_code](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md#location_code)

#### Defined in

[main.ts:179266](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179266)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/app_data/google/locations
example:
West Los Angeles,California,United States

#### Implementation of

[IAppDataGoogleAppInfoTaskPostRequestInfo](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md).[location_name](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md#location_name)

#### Defined in

[main.ts:179259](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179259)

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

#### Implementation of

[IAppDataGoogleAppInfoTaskPostRequestInfo](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md).[pingback_url](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md#pingback_url)

#### Defined in

[main.ts:179320](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179320)

___


### postback\_data

• `Optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

#### Implementation of

[IAppDataGoogleAppInfoTaskPostRequestInfo](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md).[postback_data](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md#postback_data)

#### Defined in

[main.ts:179310](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179310)

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

#### Implementation of

[IAppDataGoogleAppInfoTaskPostRequestInfo](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md).[postback_url](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md#postback_url)

#### Defined in

[main.ts:179304](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179304)

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

#### Implementation of

[IAppDataGoogleAppInfoTaskPostRequestInfo](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md).[priority](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md#priority)

#### Defined in

[main.ts:179288](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179288)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IAppDataGoogleAppInfoTaskPostRequestInfo](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md).[tag](../interfaces/IAppDataGoogleAppInfoTaskPostRequestInfo.md#tag)

#### Defined in

[main.ts:179294](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179294)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:179333](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179333)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:179359](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179359)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppInfoTaskPostRequestInfo`](AppDataGoogleAppInfoTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppInfoTaskPostRequestInfo`](AppDataGoogleAppInfoTaskPostRequestInfo.md)

#### Defined in

[main.ts:179352](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179352)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")