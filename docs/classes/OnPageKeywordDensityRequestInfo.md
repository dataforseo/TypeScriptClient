[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageKeywordDensityRequestInfo

# Class: OnPageKeywordDensityRequestInfo

## Implements

- [`IOnPageKeywordDensityRequestInfo`](../interfaces/IOnPageKeywordDensityRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageKeywordDensityRequestInfo.md#constructor)

### Properties

- [filters](OnPageKeywordDensityRequestInfo.md#filters)
- [id](OnPageKeywordDensityRequestInfo.md#id)
- [keyword\_length](OnPageKeywordDensityRequestInfo.md#keyword_length)
- [limit](OnPageKeywordDensityRequestInfo.md#limit)
- [order\_by](OnPageKeywordDensityRequestInfo.md#order_by)
- [tag](OnPageKeywordDensityRequestInfo.md#tag)
- [url](OnPageKeywordDensityRequestInfo.md#url)

### Methods

- [init](OnPageKeywordDensityRequestInfo.md#init)
- [toJSON](OnPageKeywordDensityRequestInfo.md#tojson)
- [fromJS](OnPageKeywordDensityRequestInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageKeywordDensityRequestInfo**(`data?`): [`OnPageKeywordDensityRequestInfo`](OnPageKeywordDensityRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageKeywordDensityRequestInfo`](../interfaces/IOnPageKeywordDensityRequestInfo.md) |

#### Returns

[`OnPageKeywordDensityRequestInfo`](OnPageKeywordDensityRequestInfo.md)

#### Defined in

[main.ts:150102](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150102)

## Properties

### filters

• `Optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["keyword","=","%seo%"]
[["keyword","=","%seo%"],
"and",
["frequency","<","6"]]
[["keyword","not_like","%seo%"],
"and",
[["frequency",">","6"],"or",["density",">","0.02"]]]
The full list of possible filters is available by this link.

#### Implementation of

[IOnPageKeywordDensityRequestInfo](../interfaces/IOnPageKeywordDensityRequestInfo.md).[filters](../interfaces/IOnPageKeywordDensityRequestInfo.md#filters)

#### Defined in

[main.ts:150078](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150078)

___


### id

• `Optional` **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Implementation of

[IOnPageKeywordDensityRequestInfo](../interfaces/IOnPageKeywordDensityRequestInfo.md).[id](../interfaces/IOnPageKeywordDensityRequestInfo.md#id)

#### Defined in

[main.ts:150045](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150045)

___


### keyword\_length

• `Optional` **keyword\_length**: `number`

number of words for a keyword
required field
possible values:
1, 2, 3, 4, 5

#### Implementation of

[IOnPageKeywordDensityRequestInfo](../interfaces/IOnPageKeywordDensityRequestInfo.md).[keyword_length](../interfaces/IOnPageKeywordDensityRequestInfo.md#keyword_length)

#### Defined in

[main.ts:150050](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150050)

___


### limit

• `Optional` **limit**: `number`

the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000

#### Implementation of

[IOnPageKeywordDensityRequestInfo](../interfaces/IOnPageKeywordDensityRequestInfo.md).[limit](../interfaces/IOnPageKeywordDensityRequestInfo.md#limit)

#### Defined in

[main.ts:150061](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150061)

___


### order\_by

• `Optional` **order\_by**: `string`[]

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting type
example:
["frequency,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["keyword,asc","frequency,desc"]

#### Implementation of

[IOnPageKeywordDensityRequestInfo](../interfaces/IOnPageKeywordDensityRequestInfo.md).[order_by](../interfaces/IOnPageKeywordDensityRequestInfo.md#order_by)

#### Defined in

[main.ts:150092](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150092)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IOnPageKeywordDensityRequestInfo](../interfaces/IOnPageKeywordDensityRequestInfo.md).[tag](../interfaces/IOnPageKeywordDensityRequestInfo.md#tag)

#### Defined in

[main.ts:150098](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150098)

___


### url

• `Optional` **url**: `string`

page URL
optional field
if you do not specify a page here, the results will be provided for the whole website
if you use this field, the API response will contain only keywords from the specified page
a page should be specified with absolute URL (including http:// or https://)

#### Implementation of

[IOnPageKeywordDensityRequestInfo](../interfaces/IOnPageKeywordDensityRequestInfo.md).[url](../interfaces/IOnPageKeywordDensityRequestInfo.md#url)

#### Defined in

[main.ts:150056](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150056)

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

[main.ts:150111](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150111)

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

[main.ts:150142](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150142)

___


### fromJS

▸ **fromJS**(`data`): [`OnPageKeywordDensityRequestInfo`](OnPageKeywordDensityRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageKeywordDensityRequestInfo`](OnPageKeywordDensityRequestInfo.md)

#### Defined in

[main.ts:150135](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150135)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")