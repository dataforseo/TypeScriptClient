[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataTrustpilotReviewsTaskPostRequestInfo

# Class: BusinessDataTrustpilotReviewsTaskPostRequestInfo

## Implements

- [`IBusinessDataTrustpilotReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTrustpilotReviewsTaskPostRequestInfo.md#constructor)

### Properties

- [depth](BusinessDataTrustpilotReviewsTaskPostRequestInfo.md#depth)
- [domain](BusinessDataTrustpilotReviewsTaskPostRequestInfo.md#domain)
- [pingback\_url](BusinessDataTrustpilotReviewsTaskPostRequestInfo.md#pingback_url)
- [postback\_url](BusinessDataTrustpilotReviewsTaskPostRequestInfo.md#postback_url)
- [priority](BusinessDataTrustpilotReviewsTaskPostRequestInfo.md#priority)
- [sort\_by](BusinessDataTrustpilotReviewsTaskPostRequestInfo.md#sort_by)
- [tag](BusinessDataTrustpilotReviewsTaskPostRequestInfo.md#tag)

### Methods

- [init](BusinessDataTrustpilotReviewsTaskPostRequestInfo.md#init)
- [toJSON](BusinessDataTrustpilotReviewsTaskPostRequestInfo.md#tojson)
- [fromJS](BusinessDataTrustpilotReviewsTaskPostRequestInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTrustpilotReviewsTaskPostRequestInfo**(`data?`): [`BusinessDataTrustpilotReviewsTaskPostRequestInfo`](BusinessDataTrustpilotReviewsTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTrustpilotReviewsTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md) |

#### Returns

[`BusinessDataTrustpilotReviewsTaskPostRequestInfo`](BusinessDataTrustpilotReviewsTaskPostRequestInfo.md)

#### Defined in

[main.ts:199469](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199469)

## Properties

### depth

• `Optional` **depth**: `number`

parsing depth
optional field
number of reviews to be returned from the API response
we strongly recommend setting the parsing depth in the multiples of twenty, because our system processes twenty reviews in a row
default value: 20
maximum value: 25000

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskPostRequestInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md).[depth](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md#depth)

#### Defined in

[main.ts:199439](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199439)

___

### domain

• `Optional` **domain**: `string`

domain of the local establishment
required field
domain of the local establishment on Trustpilot;
you can find the domain in the URL of every business listed on Trustpilot
example:
www.thepearlsource.com
https://www.trustpilot.com/review/www.thepearlsource.com

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskPostRequestInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md).[domain](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md#domain)

#### Defined in

[main.ts:199416](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199416)

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

[IBusinessDataTrustpilotReviewsTaskPostRequestInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md).[pingback_url](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md#pingback_url)

#### Defined in

[main.ts:199465](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199465)

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

[IBusinessDataTrustpilotReviewsTaskPostRequestInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md).[postback_url](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md#postback_url)

#### Defined in

[main.ts:199455](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199455)

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

[IBusinessDataTrustpilotReviewsTaskPostRequestInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md).[priority](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md#priority)

#### Defined in

[main.ts:199432](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199432)

___

### sort\_by

• `Optional` **sort\_by**: `string`

results sorting parameter
optional field
you can use this field to sort the results;
possible sorting parameters:
recency — most recent reviews first;
relevance — most relevant reviews first;
default value: relevance

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskPostRequestInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md).[sort_by](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md#sort_by)

#### Defined in

[main.ts:199424](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199424)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskPostRequestInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md).[tag](../interfaces/IBusinessDataTrustpilotReviewsTaskPostRequestInfo.md#tag)

#### Defined in

[main.ts:199445](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199445)

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

[main.ts:199478](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199478)

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

[main.ts:199501](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199501)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataTrustpilotReviewsTaskPostRequestInfo`](BusinessDataTrustpilotReviewsTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTrustpilotReviewsTaskPostRequestInfo`](BusinessDataTrustpilotReviewsTaskPostRequestInfo.md)

#### Defined in

[main.ts:199494](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199494)
