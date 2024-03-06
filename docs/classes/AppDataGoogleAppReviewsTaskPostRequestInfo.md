[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleAppReviewsTaskPostRequestInfo

# Class: AppDataGoogleAppReviewsTaskPostRequestInfo

## Implements

- [`IAppDataGoogleAppReviewsTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppReviewsTaskPostRequestInfo.md#constructor)

### Properties

- [app\_id](AppDataGoogleAppReviewsTaskPostRequestInfo.md#app_id)
- [depth](AppDataGoogleAppReviewsTaskPostRequestInfo.md#depth)
- [language\_code](AppDataGoogleAppReviewsTaskPostRequestInfo.md#language_code)
- [language\_name](AppDataGoogleAppReviewsTaskPostRequestInfo.md#language_name)
- [location\_code](AppDataGoogleAppReviewsTaskPostRequestInfo.md#location_code)
- [location\_name](AppDataGoogleAppReviewsTaskPostRequestInfo.md#location_name)
- [pingback\_url](AppDataGoogleAppReviewsTaskPostRequestInfo.md#pingback_url)
- [postback\_data](AppDataGoogleAppReviewsTaskPostRequestInfo.md#postback_data)
- [postback\_url](AppDataGoogleAppReviewsTaskPostRequestInfo.md#postback_url)
- [priority](AppDataGoogleAppReviewsTaskPostRequestInfo.md#priority)
- [rating](AppDataGoogleAppReviewsTaskPostRequestInfo.md#rating)
- [sort\_by](AppDataGoogleAppReviewsTaskPostRequestInfo.md#sort_by)
- [tag](AppDataGoogleAppReviewsTaskPostRequestInfo.md#tag)

### Methods

- [init](AppDataGoogleAppReviewsTaskPostRequestInfo.md#init)
- [toJSON](AppDataGoogleAppReviewsTaskPostRequestInfo.md#tojson)
- [fromJS](AppDataGoogleAppReviewsTaskPostRequestInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppReviewsTaskPostRequestInfo**(`data?`): [`AppDataGoogleAppReviewsTaskPostRequestInfo`](AppDataGoogleAppReviewsTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppReviewsTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md) |

#### Returns

[`AppDataGoogleAppReviewsTaskPostRequestInfo`](AppDataGoogleAppReviewsTaskPostRequestInfo.md)

#### Defined in

[main.ts:180689](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180689)

## Properties

### app\_id

• `Optional` **app\_id**: `string`

id of the app
required field
ID of the mobile application on Google Play;
you can find the ID in the URL of every app listed on Google Play;
example:
https://play.google.com/store/apps/details?id=org.telegram.messenger

#### Implementation of

[IAppDataGoogleAppReviewsTaskPostRequestInfo](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md).[app_id](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md#app_id)

#### Defined in

[main.ts:180591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180591)

___


### depth

• `Optional` **depth**: `number`

parsing depth
optional field
number of reviews to be returned in the API response;
we strongly recommend setting the parsing depth in the multiples of 150, because our system processes 150 reviews in a row;
default value: 150;
maximum value: 100000

#### Implementation of

[IAppDataGoogleAppReviewsTaskPostRequestInfo](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md).[depth](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md#depth)

#### Defined in

[main.ts:180634](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180634)

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

[IAppDataGoogleAppReviewsTaskPostRequestInfo](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md).[language_code](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md#language_code)

#### Defined in

[main.ts:180619](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180619)

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

[IAppDataGoogleAppReviewsTaskPostRequestInfo](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md).[language_name](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md#language_name)

#### Defined in

[main.ts:180612](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180612)

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

[IAppDataGoogleAppReviewsTaskPostRequestInfo](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md).[location_code](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md#location_code)

#### Defined in

[main.ts:180605](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180605)

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

[IAppDataGoogleAppReviewsTaskPostRequestInfo](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md).[location_name](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md#location_name)

#### Defined in

[main.ts:180598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180598)

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

[IAppDataGoogleAppReviewsTaskPostRequestInfo](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md).[pingback_url](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md#pingback_url)

#### Defined in

[main.ts:180685](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180685)

___


### postback\_data

• `Optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

#### Implementation of

[IAppDataGoogleAppReviewsTaskPostRequestInfo](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md).[postback_data](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md#postback_data)

#### Defined in

[main.ts:180675](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180675)

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

[IAppDataGoogleAppReviewsTaskPostRequestInfo](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md).[postback_url](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md#postback_url)

#### Defined in

[main.ts:180669](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180669)

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

[IAppDataGoogleAppReviewsTaskPostRequestInfo](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md).[priority](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md#priority)

#### Defined in

[main.ts:180627](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180627)

___


### rating

• `Optional` **rating**: `number`

filter reviews by rating
optional field
you can use this field to filter the results;
possible types of filtering:
5 — return reviews with five-star rating only;
4 — return reviews with four-star rating only;
3 — return reviews with three-star rating only;
2 — return reviews with two-star rating only;
1 — return reviews with one-star rating only;
by default, the API returns all reviews regardless of the number of stars

#### Implementation of

[IAppDataGoogleAppReviewsTaskPostRequestInfo](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md).[rating](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md#rating)

#### Defined in

[main.ts:180645](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180645)

___


### sort\_by

• `Optional` **sort\_by**: `string`

results sorting parameters
optional field
you can use this field to sort the results;
possible types of sorting:
newest — sort by the most recent reviews;
most_relevant — sort by the most relevant reviews;
default rule: most_relevant

#### Implementation of

[IAppDataGoogleAppReviewsTaskPostRequestInfo](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md).[sort_by](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md#sort_by)

#### Defined in

[main.ts:180653](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180653)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IAppDataGoogleAppReviewsTaskPostRequestInfo](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md).[tag](../interfaces/IAppDataGoogleAppReviewsTaskPostRequestInfo.md#tag)

#### Defined in

[main.ts:180659](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180659)

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

[main.ts:180698](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180698)

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

[main.ts:180727](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180727)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppReviewsTaskPostRequestInfo`](AppDataGoogleAppReviewsTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppReviewsTaskPostRequestInfo`](AppDataGoogleAppReviewsTaskPostRequestInfo.md)

#### Defined in

[main.ts:180720](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180720)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")