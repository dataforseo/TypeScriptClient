[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsBingSerpCompetitorsLiveRequestInfo

# Class: DataforseoLabsBingSerpCompetitorsLiveRequestInfo

## Implements

- [`IDataforseoLabsBingSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingSerpCompetitorsLiveRequestInfo.md#constructor)

### Properties

- [filters](DataforseoLabsBingSerpCompetitorsLiveRequestInfo.md#filters)
- [include\_subdomains](DataforseoLabsBingSerpCompetitorsLiveRequestInfo.md#include_subdomains)
- [item\_types](DataforseoLabsBingSerpCompetitorsLiveRequestInfo.md#item_types)
- [keywords](DataforseoLabsBingSerpCompetitorsLiveRequestInfo.md#keywords)
- [language\_code](DataforseoLabsBingSerpCompetitorsLiveRequestInfo.md#language_code)
- [language\_name](DataforseoLabsBingSerpCompetitorsLiveRequestInfo.md#language_name)
- [limit](DataforseoLabsBingSerpCompetitorsLiveRequestInfo.md#limit)
- [location\_code](DataforseoLabsBingSerpCompetitorsLiveRequestInfo.md#location_code)
- [location\_name](DataforseoLabsBingSerpCompetitorsLiveRequestInfo.md#location_name)
- [offset](DataforseoLabsBingSerpCompetitorsLiveRequestInfo.md#offset)
- [order\_by](DataforseoLabsBingSerpCompetitorsLiveRequestInfo.md#order_by)
- [tag](DataforseoLabsBingSerpCompetitorsLiveRequestInfo.md#tag)

### Methods

- [init](DataforseoLabsBingSerpCompetitorsLiveRequestInfo.md#init)
- [toJSON](DataforseoLabsBingSerpCompetitorsLiveRequestInfo.md#tojson)
- [fromJS](DataforseoLabsBingSerpCompetitorsLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingSerpCompetitorsLiveRequestInfo**(`data?`): [`DataforseoLabsBingSerpCompetitorsLiveRequestInfo`](DataforseoLabsBingSerpCompetitorsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveRequestInfo.md) |

#### Returns

[`DataforseoLabsBingSerpCompetitorsLiveRequestInfo`](DataforseoLabsBingSerpCompetitorsLiveRequestInfo.md)

#### Defined in

[main.ts:106856](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106856)

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

[IDataforseoLabsBingSerpCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveRequestInfo.md).[filters](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveRequestInfo.md#filters)

#### Defined in

[main.ts:106830](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106830)

___

### include\_subdomains

• `Optional` **include\_subdomains**: `boolean`

indicates if the subdomains will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

#### Implementation of

[IDataforseoLabsBingSerpCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveRequestInfo.md).[include_subdomains](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveRequestInfo.md#include_subdomains)

#### Defined in

[main.ts:106797](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106797)

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

[IDataforseoLabsBingSerpCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveRequestInfo.md).[item_types](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveRequestInfo.md#item_types)

#### Defined in

[main.ts:106805](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106805)

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

[IDataforseoLabsBingSerpCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveRequestInfo.md).[keywords](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveRequestInfo.md#keywords)

#### Defined in

[main.ts:106758](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106758)

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

[IDataforseoLabsBingSerpCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveRequestInfo.md).[language_code](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveRequestInfo.md#language_code)

#### Defined in

[main.ts:106792](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106792)

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

[IDataforseoLabsBingSerpCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveRequestInfo.md).[language_name](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveRequestInfo.md#language_name)

#### Defined in

[main.ts:106784](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106784)

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned domains
optional field
default value: 100
maximum value: 1000

#### Implementation of

[IDataforseoLabsBingSerpCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveRequestInfo.md).[limit](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveRequestInfo.md#limit)

#### Defined in

[main.ts:106810](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106810)

___

### location\_code

• `Optional` **location\_code**: `number`

unique location identifier
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code parameters by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
2840

#### Implementation of

[IDataforseoLabsBingSerpCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveRequestInfo.md).[location_code](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveRequestInfo.md#location_code)

#### Defined in

[main.ts:106776](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106776)

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with location_name parameters by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
United States

#### Implementation of

[IDataforseoLabsBingSerpCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveRequestInfo.md).[location_name](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveRequestInfo.md#location_name)

#### Defined in

[main.ts:106767](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106767)

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned domains
optional field
default value: 0
if you specify the 10 value, the first ten domains in the results array will be omitted and the data will be provided for the successive domains

#### Implementation of

[IDataforseoLabsBingSerpCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveRequestInfo.md).[offset](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveRequestInfo.md#offset)

#### Defined in

[main.ts:106815](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106815)

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

[IDataforseoLabsBingSerpCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveRequestInfo.md).[order_by](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveRequestInfo.md#order_by)

#### Defined in

[main.ts:106846](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106846)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDataforseoLabsBingSerpCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveRequestInfo.md).[tag](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveRequestInfo.md#tag)

#### Defined in

[main.ts:106852](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106852)

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

[main.ts:106865](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106865)

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

[main.ts:106909](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106909)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingSerpCompetitorsLiveRequestInfo`](DataforseoLabsBingSerpCompetitorsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingSerpCompetitorsLiveRequestInfo`](DataforseoLabsBingSerpCompetitorsLiveRequestInfo.md)

#### Defined in

[main.ts:106902](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106902)
