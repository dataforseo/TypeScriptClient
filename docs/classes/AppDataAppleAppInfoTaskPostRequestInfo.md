[Documentation](../README.md) / [Exports](../modules.md) / AppDataAppleAppInfoTaskPostRequestInfo

# Class: AppDataAppleAppInfoTaskPostRequestInfo

## Implements

- [`IAppDataAppleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppleAppInfoTaskPostRequestInfo.md#constructor)

### Properties

- [app\_id](AppDataAppleAppInfoTaskPostRequestInfo.md#app_id)
- [language\_code](AppDataAppleAppInfoTaskPostRequestInfo.md#language_code)
- [language\_name](AppDataAppleAppInfoTaskPostRequestInfo.md#language_name)
- [location\_code](AppDataAppleAppInfoTaskPostRequestInfo.md#location_code)
- [location\_name](AppDataAppleAppInfoTaskPostRequestInfo.md#location_name)
- [pingback\_url](AppDataAppleAppInfoTaskPostRequestInfo.md#pingback_url)
- [postback\_data](AppDataAppleAppInfoTaskPostRequestInfo.md#postback_data)
- [postback\_url](AppDataAppleAppInfoTaskPostRequestInfo.md#postback_url)
- [priority](AppDataAppleAppInfoTaskPostRequestInfo.md#priority)
- [tag](AppDataAppleAppInfoTaskPostRequestInfo.md#tag)

### Methods

- [init](AppDataAppleAppInfoTaskPostRequestInfo.md#init)
- [toJSON](AppDataAppleAppInfoTaskPostRequestInfo.md#tojson)
- [fromJS](AppDataAppleAppInfoTaskPostRequestInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataAppleAppInfoTaskPostRequestInfo**(`data?`): [`AppDataAppleAppInfoTaskPostRequestInfo`](AppDataAppleAppInfoTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppleAppInfoTaskPostRequestInfo`](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md) |

#### Returns

[`AppDataAppleAppInfoTaskPostRequestInfo`](AppDataAppleAppInfoTaskPostRequestInfo.md)

#### Defined in

main.ts:189387

## Properties

### app\_id

• `Optional` **app\_id**: `string`

id of the app
required field
ID of the mobile application on App Store;
you can find the ID in the URL of every app listed on App Store;
example:
in the URL https://apps.apple.com/us/app/id835599320
the id is 835599320

#### Implementation of

[IAppDataAppleAppInfoTaskPostRequestInfo](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md).[app_id](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md#app_id)

#### Defined in

main.ts:189315

___

### language\_code

• `Optional` **language\_code**: `string`

search engine language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/app_data/apple/languages
example:
en

#### Implementation of

[IAppDataAppleAppInfoTaskPostRequestInfo](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md).[language_code](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md#language_code)

#### Defined in

main.ts:189343

___

### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/app_data/apple/languages
example:
English

#### Implementation of

[IAppDataAppleAppInfoTaskPostRequestInfo](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md).[language_name](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md#language_name)

#### Defined in

main.ts:189336

___

### location\_code

• `Optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engine with their location_code by making a separate request to https://api.dataforseo.com/v3/app_data/apple/locations
example:
9061121

#### Implementation of

[IAppDataAppleAppInfoTaskPostRequestInfo](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md).[location_code](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md#location_code)

#### Defined in

main.ts:189329

___

### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/app_data/apple/locations
example:
West Los Angeles,California,United States

#### Implementation of

[IAppDataAppleAppInfoTaskPostRequestInfo](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md).[location_name](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md#location_name)

#### Defined in

main.ts:189322

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

[IAppDataAppleAppInfoTaskPostRequestInfo](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md).[pingback_url](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md#pingback_url)

#### Defined in

main.ts:189383

___

### postback\_data

• `Optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced

#### Implementation of

[IAppDataAppleAppInfoTaskPostRequestInfo](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md).[postback_data](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md#postback_data)

#### Defined in

main.ts:189373

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

[IAppDataAppleAppInfoTaskPostRequestInfo](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md).[postback_url](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md#postback_url)

#### Defined in

main.ts:189367

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

[IAppDataAppleAppInfoTaskPostRequestInfo](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md).[priority](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md#priority)

#### Defined in

main.ts:189351

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IAppDataAppleAppInfoTaskPostRequestInfo](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md).[tag](../interfaces/IAppDataAppleAppInfoTaskPostRequestInfo.md#tag)

#### Defined in

main.ts:189357

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

main.ts:189396

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

main.ts:189422

___

### fromJS

▸ **fromJS**(`data`): [`AppDataAppleAppInfoTaskPostRequestInfo`](AppDataAppleAppInfoTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppleAppInfoTaskPostRequestInfo`](AppDataAppleAppInfoTaskPostRequestInfo.md)

#### Defined in

main.ts:189415
