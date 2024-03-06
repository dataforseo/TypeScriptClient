[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleAppListTaskPostRequestInfo

# Class: AppDataGoogleAppListTaskPostRequestInfo

## Implements

- [`IAppDataGoogleAppListTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppListTaskPostRequestInfo.md#constructor)

### Properties

- [age\_rating](AppDataGoogleAppListTaskPostRequestInfo.md#age_rating)
- [app\_category](AppDataGoogleAppListTaskPostRequestInfo.md#app_category)
- [app\_collection](AppDataGoogleAppListTaskPostRequestInfo.md#app_collection)
- [depth](AppDataGoogleAppListTaskPostRequestInfo.md#depth)
- [language\_code](AppDataGoogleAppListTaskPostRequestInfo.md#language_code)
- [language\_name](AppDataGoogleAppListTaskPostRequestInfo.md#language_name)
- [location\_code](AppDataGoogleAppListTaskPostRequestInfo.md#location_code)
- [location\_name](AppDataGoogleAppListTaskPostRequestInfo.md#location_name)
- [pingback\_url](AppDataGoogleAppListTaskPostRequestInfo.md#pingback_url)
- [postback\_data](AppDataGoogleAppListTaskPostRequestInfo.md#postback_data)
- [postback\_url](AppDataGoogleAppListTaskPostRequestInfo.md#postback_url)
- [priority](AppDataGoogleAppListTaskPostRequestInfo.md#priority)
- [tag](AppDataGoogleAppListTaskPostRequestInfo.md#tag)

### Methods

- [init](AppDataGoogleAppListTaskPostRequestInfo.md#init)
- [toJSON](AppDataGoogleAppListTaskPostRequestInfo.md#tojson)
- [fromJS](AppDataGoogleAppListTaskPostRequestInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppListTaskPostRequestInfo**(`data?`): [`AppDataGoogleAppListTaskPostRequestInfo`](AppDataGoogleAppListTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppListTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md) |

#### Returns

[`AppDataGoogleAppListTaskPostRequestInfo`](AppDataGoogleAppListTaskPostRequestInfo.md)

#### Defined in

[main.ts:178338](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178338)

## Properties

### age\_rating

• `Optional` **age\_rating**: `string`

filter results by age rating
optional field
you can use this field to filter the results by age rating;
possible types of filtering:
ages_up_to_5 — return apps approved for children up to 5 years old;
ages_6_8 — return apps approved for children from 6 to 8 years old;
ages_9_12 — return apps approved for children from 9 to 12 years old;
by default, the API returns apps for all ages;
Note: this filter works only in conjunction with the "category": "family" parameter

#### Implementation of

[IAppDataGoogleAppListTaskPostRequestInfo](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md).[age_rating](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md#age_rating)

#### Defined in

[main.ts:178302](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178302)

___


### app\_category

• `Optional` **app\_category**: `string`

application category on Google Play
optional field
you can filter the results by app category;
example:
family;
you can receive the full list of available categories by making a separate request to https://api.dataforseo.com/v3/app_data/google/categories
Note: app_category cannot be used if app_collection parameter is set to featured

#### Implementation of

[IAppDataGoogleAppListTaskPostRequestInfo](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md).[app_category](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md#app_category)

#### Defined in

[main.ts:178292](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178292)

___


### app\_collection

• `Optional` **app\_collection**: `string`

app collection
required field
app collection on Google Play from which apps will be collected;
you can specify the following values:
featured, topselling_paid, topselling_free, topselling_new_free, topselling_new_paid, topgrossing, movers_shakers
Note: if featured is selected, the app_category parameter cannot be used

#### Implementation of

[IAppDataGoogleAppListTaskPostRequestInfo](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md).[app_collection](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md#app_collection)

#### Defined in

[main.ts:178241](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178241)

___


### depth

• `Optional` **depth**: `number`

parsing depth
optional field
number of apps to be returned in the API response;
we strongly recommend setting the parsing depth in the multiples of 100, because our system processes 100 results in a row;
default value: 100;
maximum value: 200

#### Implementation of

[IAppDataGoogleAppListTaskPostRequestInfo](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md).[depth](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md#depth)

#### Defined in

[main.ts:178284](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178284)

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

[IAppDataGoogleAppListTaskPostRequestInfo](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md).[language_code](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md#language_code)

#### Defined in

[main.ts:178269](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178269)

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

[IAppDataGoogleAppListTaskPostRequestInfo](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md).[language_name](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md#language_name)

#### Defined in

[main.ts:178262](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178262)

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

[IAppDataGoogleAppListTaskPostRequestInfo](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md).[location_code](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md#location_code)

#### Defined in

[main.ts:178255](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178255)

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

[IAppDataGoogleAppListTaskPostRequestInfo](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md).[location_name](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md#location_name)

#### Defined in

[main.ts:178248](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178248)

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

[IAppDataGoogleAppListTaskPostRequestInfo](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md).[pingback_url](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md#pingback_url)

#### Defined in

[main.ts:178334](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178334)

___


### postback\_data

• `Optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

#### Implementation of

[IAppDataGoogleAppListTaskPostRequestInfo](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md).[postback_data](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md#postback_data)

#### Defined in

[main.ts:178324](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178324)

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

[IAppDataGoogleAppListTaskPostRequestInfo](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md).[postback_url](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md#postback_url)

#### Defined in

[main.ts:178318](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178318)

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

[IAppDataGoogleAppListTaskPostRequestInfo](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md).[priority](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md#priority)

#### Defined in

[main.ts:178277](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178277)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IAppDataGoogleAppListTaskPostRequestInfo](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md).[tag](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md#tag)

#### Defined in

[main.ts:178308](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178308)

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

[main.ts:178347](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178347)

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

[main.ts:178376](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178376)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppListTaskPostRequestInfo`](AppDataGoogleAppListTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppListTaskPostRequestInfo`](AppDataGoogleAppListTaskPostRequestInfo.md)

#### Defined in

[main.ts:178369](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178369)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")