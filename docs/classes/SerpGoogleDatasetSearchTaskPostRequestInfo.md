[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleDatasetSearchTaskPostRequestInfo

# Class: SerpGoogleDatasetSearchTaskPostRequestInfo

## Implements

- [`ISerpGoogleDatasetSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleDatasetSearchTaskPostRequestInfo.md#constructor)

### Properties

- [depth](SerpGoogleDatasetSearchTaskPostRequestInfo.md#depth)
- [device](SerpGoogleDatasetSearchTaskPostRequestInfo.md#device)
- [file\_formats](SerpGoogleDatasetSearchTaskPostRequestInfo.md#file_formats)
- [is\_free](SerpGoogleDatasetSearchTaskPostRequestInfo.md#is_free)
- [keyword](SerpGoogleDatasetSearchTaskPostRequestInfo.md#keyword)
- [language\_code](SerpGoogleDatasetSearchTaskPostRequestInfo.md#language_code)
- [language\_name](SerpGoogleDatasetSearchTaskPostRequestInfo.md#language_name)
- [last\_updated](SerpGoogleDatasetSearchTaskPostRequestInfo.md#last_updated)
- [os](SerpGoogleDatasetSearchTaskPostRequestInfo.md#os)
- [pingback\_url](SerpGoogleDatasetSearchTaskPostRequestInfo.md#pingback_url)
- [postback\_data](SerpGoogleDatasetSearchTaskPostRequestInfo.md#postback_data)
- [postback\_url](SerpGoogleDatasetSearchTaskPostRequestInfo.md#postback_url)
- [priority](SerpGoogleDatasetSearchTaskPostRequestInfo.md#priority)
- [tag](SerpGoogleDatasetSearchTaskPostRequestInfo.md#tag)
- [topics](SerpGoogleDatasetSearchTaskPostRequestInfo.md#topics)
- [usage\_rights](SerpGoogleDatasetSearchTaskPostRequestInfo.md#usage_rights)

### Methods

- [init](SerpGoogleDatasetSearchTaskPostRequestInfo.md#init)
- [toJSON](SerpGoogleDatasetSearchTaskPostRequestInfo.md#tojson)
- [fromJS](SerpGoogleDatasetSearchTaskPostRequestInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleDatasetSearchTaskPostRequestInfo**(`data?`): [`SerpGoogleDatasetSearchTaskPostRequestInfo`](SerpGoogleDatasetSearchTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleDatasetSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md) |

#### Returns

[`SerpGoogleDatasetSearchTaskPostRequestInfo`](SerpGoogleDatasetSearchTaskPostRequestInfo.md)

#### Defined in

[main.ts:49849](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49849)

## Properties

### depth

• `Optional` **depth**: `number`

parsing depth
optional field
number of results in SERP
default value: 20
max value: 700
Note: your account will be billed per each SERP containing up to 20 results;
thus, setting a depth above 20 may result in additional charges if the search engine returns more than 20 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Implementation of

[ISerpGoogleDatasetSearchTaskPostRequestInfo](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md).[depth](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md#depth)

#### Defined in

[main.ts:49774](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49774)

___

### device

• `Optional` **device**: `string`

device type
optional field
possible value: desktop

#### Implementation of

[ISerpGoogleDatasetSearchTaskPostRequestInfo](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md).[device](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md#device)

#### Defined in

[main.ts:49789](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49789)

___

### file\_formats

• `Optional` **file\_formats**: `string`[]

file formats of the dataset
optional field
possible values: other, archive, text, image, document, tabular

#### Implementation of

[ISerpGoogleDatasetSearchTaskPostRequestInfo](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md).[file_formats](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md#file_formats)

#### Defined in

[main.ts:49802](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49802)

___

### is\_free

• `Optional` **is\_free**: `boolean`

indicates whether displayed datasets are free
optional field
possible values: true, false

#### Implementation of

[ISerpGoogleDatasetSearchTaskPostRequestInfo](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md).[is_free](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md#is_free)

#### Defined in

[main.ts:49810](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49810)

___

### keyword

• `Optional` **keyword**: `string`

keyword
required field
you can specify up to 700 symbols in the keyword field
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”;
if you need to use the “+” symbol for your keyword, please specify it as “%2B”.

#### Implementation of

[ISerpGoogleDatasetSearchTaskPostRequestInfo](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md).[keyword](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md#keyword)

#### Defined in

[main.ts:49757](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49757)

___

### language\_code

• `Optional` **language\_code**: `string`

search engine language code
optional field
possible value:
en

#### Implementation of

[ISerpGoogleDatasetSearchTaskPostRequestInfo](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md).[language_code](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md#language_code)

#### Defined in

[main.ts:49785](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49785)

___

### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
possible value:
English

#### Implementation of

[ISerpGoogleDatasetSearchTaskPostRequestInfo](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md).[language_name](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md#language_name)

#### Defined in

[main.ts:49780](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49780)

___

### last\_updated

• `Optional` **last\_updated**: `string`

last time the dataset was updated
optional field
possible values: 1m, 1y, 3y

#### Implementation of

[ISerpGoogleDatasetSearchTaskPostRequestInfo](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md).[last_updated](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md#last_updated)

#### Defined in

[main.ts:49798](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49798)

___

### os

• `Optional` **os**: `string`

device operating system
optional field
possible values: windows, macos
default value: windows

#### Implementation of

[ISerpGoogleDatasetSearchTaskPostRequestInfo](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md).[os](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md#os)

#### Defined in

[main.ts:49794](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49794)

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

[ISerpGoogleDatasetSearchTaskPostRequestInfo](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md).[pingback_url](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md#pingback_url)

#### Defined in

[main.ts:49845](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49845)

___

### postback\_data

• `Optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
only value: advanced

#### Implementation of

[ISerpGoogleDatasetSearchTaskPostRequestInfo](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md).[postback_data](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md#postback_data)

#### Defined in

[main.ts:49835](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49835)

___

### postback\_url

• `Optional` **postback\_url**: `string`

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special symbols in postback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Implementation of

[ISerpGoogleDatasetSearchTaskPostRequestInfo](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md).[postback_url](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md#postback_url)

#### Defined in

[main.ts:49830](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49830)

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

[ISerpGoogleDatasetSearchTaskPostRequestInfo](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md).[priority](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md#priority)

#### Defined in

[main.ts:49765](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49765)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[ISerpGoogleDatasetSearchTaskPostRequestInfo](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md).[tag](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md#tag)

#### Defined in

[main.ts:49820](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49820)

___

### topics

• `Optional` **topics**: `string`[]

dataset topics
optional field
possible values: humanities, social_sciences, life_sciences, agriculture, natural_sciences, geo, computer, architecture_and_urban_planning, engineering

#### Implementation of

[ISerpGoogleDatasetSearchTaskPostRequestInfo](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md).[topics](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md#topics)

#### Defined in

[main.ts:49814](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49814)

___

### usage\_rights

• `Optional` **usage\_rights**: `string`

usage rights of the dataset
optional field
possible values: commercial, noncommercial

#### Implementation of

[ISerpGoogleDatasetSearchTaskPostRequestInfo](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md).[usage_rights](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md#usage_rights)

#### Defined in

[main.ts:49806](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49806)

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

[main.ts:49858](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49858)

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

[main.ts:49898](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49898)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleDatasetSearchTaskPostRequestInfo`](SerpGoogleDatasetSearchTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleDatasetSearchTaskPostRequestInfo`](SerpGoogleDatasetSearchTaskPostRequestInfo.md)

#### Defined in

[main.ts:49891](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49891)
