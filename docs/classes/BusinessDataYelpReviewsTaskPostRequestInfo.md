[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataYelpReviewsTaskPostRequestInfo

# Class: BusinessDataYelpReviewsTaskPostRequestInfo

## Implements

- [`IBusinessDataYelpReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataYelpReviewsTaskPostRequestInfo.md#constructor)

### Properties

- [alias](BusinessDataYelpReviewsTaskPostRequestInfo.md#alias)
- [depth](BusinessDataYelpReviewsTaskPostRequestInfo.md#depth)
- [keyword](BusinessDataYelpReviewsTaskPostRequestInfo.md#keyword)
- [language\_code](BusinessDataYelpReviewsTaskPostRequestInfo.md#language_code)
- [language\_name](BusinessDataYelpReviewsTaskPostRequestInfo.md#language_name)
- [location\_code](BusinessDataYelpReviewsTaskPostRequestInfo.md#location_code)
- [location\_name](BusinessDataYelpReviewsTaskPostRequestInfo.md#location_name)
- [pingback\_url](BusinessDataYelpReviewsTaskPostRequestInfo.md#pingback_url)
- [postback\_url](BusinessDataYelpReviewsTaskPostRequestInfo.md#postback_url)
- [priority](BusinessDataYelpReviewsTaskPostRequestInfo.md#priority)
- [sort\_by](BusinessDataYelpReviewsTaskPostRequestInfo.md#sort_by)
- [tag](BusinessDataYelpReviewsTaskPostRequestInfo.md#tag)

### Methods

- [init](BusinessDataYelpReviewsTaskPostRequestInfo.md#init)
- [toJSON](BusinessDataYelpReviewsTaskPostRequestInfo.md#tojson)
- [fromJS](BusinessDataYelpReviewsTaskPostRequestInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataYelpReviewsTaskPostRequestInfo**(`data?`): [`BusinessDataYelpReviewsTaskPostRequestInfo`](BusinessDataYelpReviewsTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataYelpReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md) |

#### Returns

[`BusinessDataYelpReviewsTaskPostRequestInfo`](BusinessDataYelpReviewsTaskPostRequestInfo.md)

#### Defined in

[main.ts:204772](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204772)

## Properties

### alias

• `Optional` **alias**: `string`

unique business identifier
required field if you don’t specify keyword
if you use this field, you don’t need to specify keyword
unique business identifier on Yelp;
you can find this identifier in the URL of every business listed on Yelp
example:
vatos-urban-tacos-singapore
https://www.yelp.com/biz/vatos-urban-tacos-singapore?rl=en

#### Implementation of

[IBusinessDataYelpReviewsTaskPostRequestInfo](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md).[alias](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md#alias)

#### Defined in

[main.ts:204681](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204681)

___

### depth

• `Optional` **depth**: `number`

parsing depth
optional field
number of reviews in SERP
we strongly recommend setting the parsing depth in the multiples of ten, because our systems processes ten reviews in a row
default value: 10
maximum value: 4490

#### Implementation of

[IBusinessDataYelpReviewsTaskPostRequestInfo](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md).[depth](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md#depth)

#### Defined in

[main.ts:204731](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204731)

___

### keyword

• `Optional` **keyword**: `string`

keyword
required field if you don’t specify alias
if you use this field, you don’t need to specify alias
you can specify up to 700 symbols in the keyword filed;
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”

#### Implementation of

[IBusinessDataYelpReviewsTaskPostRequestInfo](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md).[keyword](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md#keyword)

#### Defined in

[main.ts:204688](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204688)

___

### language\_code

• `Optional` **language\_code**: `string`

search engine language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/business_data/yelp/languages
example:
en

#### Implementation of

[IBusinessDataYelpReviewsTaskPostRequestInfo](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md).[language_code](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md#language_code)

#### Defined in

[main.ts:204724](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204724)

___

### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/business_data/yelp/languages
example:
English

#### Implementation of

[IBusinessDataYelpReviewsTaskPostRequestInfo](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md).[language_name](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md#language_name)

#### Defined in

[main.ts:204717](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204717)

___

### location\_code

• `Optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or alias
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/business_data/yelp/locations
example:
9061121

#### Implementation of

[IBusinessDataYelpReviewsTaskPostRequestInfo](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md).[location_code](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md#location_code)

#### Defined in

[main.ts:204710](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204710)

___

### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or alias
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/business_data/yelp/locations
example:
West Los Angeles,California,United States

#### Implementation of

[IBusinessDataYelpReviewsTaskPostRequestInfo](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md).[location_name](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md#location_name)

#### Defined in

[main.ts:204703](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204703)

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

[IBusinessDataYelpReviewsTaskPostRequestInfo](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md).[pingback_url](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md#pingback_url)

#### Defined in

[main.ts:204768](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204768)

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

[IBusinessDataYelpReviewsTaskPostRequestInfo](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md).[postback_url](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md#postback_url)

#### Defined in

[main.ts:204758](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204758)

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

[IBusinessDataYelpReviewsTaskPostRequestInfo](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md).[priority](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md#priority)

#### Defined in

[main.ts:204696](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204696)

___

### sort\_by

• `Optional` **sort\_by**: `string`

results sorting parameters
optional field
you can use this field to sort the results
possible types of sorting:
newest – sort by newest first
highest_rating – sort by highest rating
lowest_rating – sort by lowest rating
relevant – sort by relevance
elites – sort by elite Yelp users first
default value: relevant

#### Implementation of

[IBusinessDataYelpReviewsTaskPostRequestInfo](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md).[sort_by](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md#sort_by)

#### Defined in

[main.ts:204742](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204742)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IBusinessDataYelpReviewsTaskPostRequestInfo](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md).[tag](../interfaces/IBusinessDataYelpReviewsTaskPostRequestInfo.md#tag)

#### Defined in

[main.ts:204748](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204748)

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

[main.ts:204781](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204781)

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

[main.ts:204809](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204809)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataYelpReviewsTaskPostRequestInfo`](BusinessDataYelpReviewsTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataYelpReviewsTaskPostRequestInfo`](BusinessDataYelpReviewsTaskPostRequestInfo.md)

#### Defined in

[main.ts:204802](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204802)
