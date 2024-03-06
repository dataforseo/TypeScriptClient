[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataTaskRequestInfo

# Class: AppDataTaskRequestInfo

## Implements

- [`IAppDataTaskRequestInfo`](../interfaces/IAppDataTaskRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataTaskRequestInfo.md#constructor)

### Properties

- [depth](AppDataTaskRequestInfo.md#depth)
- [keyword](AppDataTaskRequestInfo.md#keyword)
- [language\_code](AppDataTaskRequestInfo.md#language_code)
- [language\_name](AppDataTaskRequestInfo.md#language_name)
- [location\_code](AppDataTaskRequestInfo.md#location_code)
- [location\_name](AppDataTaskRequestInfo.md#location_name)
- [pingback\_url](AppDataTaskRequestInfo.md#pingback_url)
- [postback\_data](AppDataTaskRequestInfo.md#postback_data)
- [postback\_url](AppDataTaskRequestInfo.md#postback_url)
- [priority](AppDataTaskRequestInfo.md#priority)
- [tag](AppDataTaskRequestInfo.md#tag)

### Methods

- [init](AppDataTaskRequestInfo.md#init)
- [toJSON](AppDataTaskRequestInfo.md#tojson)
- [fromJS](AppDataTaskRequestInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataTaskRequestInfo**(`data?`): [`AppDataTaskRequestInfo`](AppDataTaskRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataTaskRequestInfo`](../interfaces/IAppDataTaskRequestInfo.md) |

#### Returns

[`AppDataTaskRequestInfo`](AppDataTaskRequestInfo.md)

#### Defined in

[main.ts:163976](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163976)

## Properties

### depth

• `Optional` **depth**: `number`

parsing depth
optional field
number of results to be returned to be returned from the Google Play SERP;
we strongly recommend setting the parsing depth in the multiples of 100, because our system processes 100 results in a row;
Note: your account will be billed per each SERP containing up to 100 results;
thus, setting a depth above 100 may result in additional charges if the search engine returns more than 100 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded to your account balance automatically
default value: 100;
maximum value: 200

#### Implementation of

[IAppDataTaskRequestInfo](../interfaces/IAppDataTaskRequestInfo.md).[depth](../interfaces/IAppDataTaskRequestInfo.md#depth)

#### Defined in

[main.ts:163940](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163940)

___


### keyword

• `Optional` **keyword**: `string`

keyword
required field
you can specify up to 700 symbols in the keyword field;
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character);
if you need to use the “%” symbol for your keyword, please specify it as “%25”;
if you need to use the “+” symbol for your keyword, please specify it as “%2B”

#### Implementation of

[IAppDataTaskRequestInfo](../interfaces/IAppDataTaskRequestInfo.md).[keyword](../interfaces/IAppDataTaskRequestInfo.md#keyword)

#### Defined in

[main.ts:163894](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163894)

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

[IAppDataTaskRequestInfo](../interfaces/IAppDataTaskRequestInfo.md).[language_code](../interfaces/IAppDataTaskRequestInfo.md#language_code)

#### Defined in

[main.ts:163922](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163922)

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

[IAppDataTaskRequestInfo](../interfaces/IAppDataTaskRequestInfo.md).[language_name](../interfaces/IAppDataTaskRequestInfo.md#language_name)

#### Defined in

[main.ts:163915](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163915)

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

[IAppDataTaskRequestInfo](../interfaces/IAppDataTaskRequestInfo.md).[location_code](../interfaces/IAppDataTaskRequestInfo.md#location_code)

#### Defined in

[main.ts:163908](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163908)

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

[IAppDataTaskRequestInfo](../interfaces/IAppDataTaskRequestInfo.md).[location_name](../interfaces/IAppDataTaskRequestInfo.md#location_name)

#### Defined in

[main.ts:163901](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163901)

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

[IAppDataTaskRequestInfo](../interfaces/IAppDataTaskRequestInfo.md).[pingback_url](../interfaces/IAppDataTaskRequestInfo.md#pingback_url)

#### Defined in

[main.ts:163972](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163972)

___


### postback\_data

• `Optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

#### Implementation of

[IAppDataTaskRequestInfo](../interfaces/IAppDataTaskRequestInfo.md).[postback_data](../interfaces/IAppDataTaskRequestInfo.md#postback_data)

#### Defined in

[main.ts:163962](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163962)

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

[IAppDataTaskRequestInfo](../interfaces/IAppDataTaskRequestInfo.md).[postback_url](../interfaces/IAppDataTaskRequestInfo.md#postback_url)

#### Defined in

[main.ts:163956](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163956)

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

[IAppDataTaskRequestInfo](../interfaces/IAppDataTaskRequestInfo.md).[priority](../interfaces/IAppDataTaskRequestInfo.md#priority)

#### Defined in

[main.ts:163930](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163930)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IAppDataTaskRequestInfo](../interfaces/IAppDataTaskRequestInfo.md).[tag](../interfaces/IAppDataTaskRequestInfo.md#tag)

#### Defined in

[main.ts:163946](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163946)

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

[main.ts:163985](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163985)

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

[main.ts:164012](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164012)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataTaskRequestInfo`](AppDataTaskRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataTaskRequestInfo`](AppDataTaskRequestInfo.md)

#### Defined in

[main.ts:164005](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164005)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")