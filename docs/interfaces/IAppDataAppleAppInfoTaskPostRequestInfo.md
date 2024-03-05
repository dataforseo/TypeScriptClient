[dataforseo-client](../README.md) / [Exports](../modules.md) / IAppDataAppleAppInfoTaskPostRequestInfo

# Interface: IAppDataAppleAppInfoTaskPostRequestInfo

## Implemented by

- [`AppDataAppleAppInfoTaskPostRequestInfo`](../classes/AppDataAppleAppInfoTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [app\_id](IAppDataAppleAppInfoTaskPostRequestInfo.md#app_id)
- [language\_code](IAppDataAppleAppInfoTaskPostRequestInfo.md#language_code)
- [language\_name](IAppDataAppleAppInfoTaskPostRequestInfo.md#language_name)
- [location\_code](IAppDataAppleAppInfoTaskPostRequestInfo.md#location_code)
- [location\_name](IAppDataAppleAppInfoTaskPostRequestInfo.md#location_name)
- [pingback\_url](IAppDataAppleAppInfoTaskPostRequestInfo.md#pingback_url)
- [postback\_data](IAppDataAppleAppInfoTaskPostRequestInfo.md#postback_data)
- [postback\_url](IAppDataAppleAppInfoTaskPostRequestInfo.md#postback_url)
- [priority](IAppDataAppleAppInfoTaskPostRequestInfo.md#priority)
- [tag](IAppDataAppleAppInfoTaskPostRequestInfo.md#tag)

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

#### Defined in

[main.ts:183997](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183997)

___

### language\_code

• `Optional` **language\_code**: `string`

search engine language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/app_data/apple/languages
example:
en

#### Defined in

[main.ts:184025](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184025)

___

### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/app_data/apple/languages
example:
English

#### Defined in

[main.ts:184018](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184018)

___

### location\_code

• `Optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engine with their location_code by making a separate request to https://api.dataforseo.com/v3/app_data/apple/locations
example:
9061121

#### Defined in

[main.ts:184011](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184011)

___

### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/app_data/apple/locations
example:
West Los Angeles,California,United States

#### Defined in

[main.ts:184004](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184004)

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

[main.ts:184065](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184065)

___

### postback\_data

• `Optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced

#### Defined in

[main.ts:184055](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184055)

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

#### Defined in

[main.ts:184049](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184049)

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

#### Defined in

[main.ts:184033](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184033)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:184039](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184039)
