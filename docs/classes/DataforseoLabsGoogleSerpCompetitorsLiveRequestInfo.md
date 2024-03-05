[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo

# Class: DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo

## Implements

- [`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#constructor)

### Properties

- [filters](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#filters)
- [include\_subdomains](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#include_subdomains)
- [item\_types](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#item_types)
- [keywords](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#keywords)
- [language\_code](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#language_code)
- [language\_name](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#language_name)
- [limit](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#limit)
- [location\_code](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#location_code)
- [location\_name](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#location_name)
- [offset](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#offset)
- [order\_by](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#order_by)
- [tag](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#tag)

### Methods

- [init](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#init)
- [toJSON](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo**(`data?`): [`DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md) |

#### Returns

[`DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md)

#### Defined in

[main.ts:87450](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87450)

## Properties

### filters

• `Optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, <, <=, >, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["median_position","in",[1,10]]
[["median_position","in",[1,10]],"and",["domain","not_like","%wikipedia.org%"]]
[["domain","not_like","%wikipedia.org%"],
"and",
[["relevant_serp_items",">",0],"or",["median_position","in",[1,10]]]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[filters](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#filters)

#### Defined in

[main.ts:87424](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87424)

___

### include\_subdomains

• `Optional` **include\_subdomains**: `boolean`

indicates if the subdomains will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

#### Implementation of

[IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[include_subdomains](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#include_subdomains)

#### Defined in

[main.ts:87391](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87391)

___

### item\_types

• `Optional` **item\_types**: `string`[]

search results type
indicates type of search results included in the response
optional field
possible values:
["organic", "paid", "featured_snippet", "local_pack"]
default value:
["organic", "paid", "featured_snippet", "local_pack"]

#### Implementation of

[IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[item_types](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#item_types)

#### Defined in

[main.ts:87399](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87399)

___

### keywords

• `Optional` **keywords**: `string`[]

keywords array
required field
the results will be based on the keywords you specify in this array
UTF-8 encoding;
the keywords will be converted to lowercase format;
a keyword should be at least 3 characters long;
you can specify the maximum of 200 keywords

#### Implementation of

[IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[keywords](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#keywords)

#### Defined in

[main.ts:87354](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87354)

___

### language\_code

• `Optional` **language\_code**: `string`

unique language identifier
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_code parameters by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#language_code)

#### Defined in

[main.ts:87386](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87386)

___

### language\_name

• `Optional` **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_name parameters by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[language_name](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#language_name)

#### Defined in

[main.ts:87378](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87378)

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned domains
optional field
default value: 100
maximum value: 1000

#### Implementation of

[IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[limit](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#limit)

#### Defined in

[main.ts:87404](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87404)

___

### location\_code

• `Optional` **location\_code**: `number`

unique location identifier
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code parameters by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
2840

#### Implementation of

[IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#location_code)

#### Defined in

[main.ts:87370](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87370)

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with location_name parameters by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
United Kingdom

#### Implementation of

[IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[location_name](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#location_name)

#### Defined in

[main.ts:87362](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87362)

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned domains
optional field
default value: 0
if you specify the 10 value, the first ten domains in the results array will be omitted and the data will be provided for the successive domains

#### Implementation of

[IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[offset](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#offset)

#### Defined in

[main.ts:87409](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87409)

___

### order\_by

• `Optional` **order\_by**: `string`[]

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
the comma is used as a separator
example:
["avg_position,asc"]
default rule:
["rating,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["avg_position,asc","etv,desc"]

#### Implementation of

[IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[order_by](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#order_by)

#### Defined in

[main.ts:87440](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87440)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[tag](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#tag)

#### Defined in

[main.ts:87446](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87446)

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

[main.ts:87459](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87459)

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

[main.ts:87503](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87503)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md)

#### Defined in

[main.ts:87496](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87496)
