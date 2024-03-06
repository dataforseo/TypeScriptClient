[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsBingRankedKeywordsLiveRequestInfo

# Class: DataforseoLabsBingRankedKeywordsLiveRequestInfo

## Implements

- [`IDataforseoLabsBingRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingRankedKeywordsLiveRequestInfo.md#constructor)

### Properties

- [filters](DataforseoLabsBingRankedKeywordsLiveRequestInfo.md#filters)
- [historical\_serp\_mode](DataforseoLabsBingRankedKeywordsLiveRequestInfo.md#historical_serp_mode)
- [ignore\_synonyms](DataforseoLabsBingRankedKeywordsLiveRequestInfo.md#ignore_synonyms)
- [item\_types](DataforseoLabsBingRankedKeywordsLiveRequestInfo.md#item_types)
- [language\_code](DataforseoLabsBingRankedKeywordsLiveRequestInfo.md#language_code)
- [language\_name](DataforseoLabsBingRankedKeywordsLiveRequestInfo.md#language_name)
- [limit](DataforseoLabsBingRankedKeywordsLiveRequestInfo.md#limit)
- [load\_rank\_absolute](DataforseoLabsBingRankedKeywordsLiveRequestInfo.md#load_rank_absolute)
- [location\_code](DataforseoLabsBingRankedKeywordsLiveRequestInfo.md#location_code)
- [location\_name](DataforseoLabsBingRankedKeywordsLiveRequestInfo.md#location_name)
- [offset](DataforseoLabsBingRankedKeywordsLiveRequestInfo.md#offset)
- [order\_by](DataforseoLabsBingRankedKeywordsLiveRequestInfo.md#order_by)
- [tag](DataforseoLabsBingRankedKeywordsLiveRequestInfo.md#tag)
- [target](DataforseoLabsBingRankedKeywordsLiveRequestInfo.md#target)

### Methods

- [init](DataforseoLabsBingRankedKeywordsLiveRequestInfo.md#init)
- [toJSON](DataforseoLabsBingRankedKeywordsLiveRequestInfo.md#tojson)
- [fromJS](DataforseoLabsBingRankedKeywordsLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingRankedKeywordsLiveRequestInfo**(`data?`): [`DataforseoLabsBingRankedKeywordsLiveRequestInfo`](DataforseoLabsBingRankedKeywordsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md) |

#### Returns

[`DataforseoLabsBingRankedKeywordsLiveRequestInfo`](DataforseoLabsBingRankedKeywordsLiveRequestInfo.md)

#### Defined in

[main.ts:105090](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105090)

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
["ranked_serp_element.serp_item.rank_group","<=",10]
[["ranked_serp_element.serp_item.rank_group","<=",10],
"and",
["ranked_serp_element.serp_item.type","<>","paid"]]
[["keyword_data.keyword_info.search_volume","<>",0],
"and",
[["ranked_serp_element.serp_item.type","<>","paid"],"or",["ranked_serp_element.serp_item.is_malicious","=",false]]]
if you want to get the keywords a particular webpage ranks for, specify the filter by the ranked_serp_element.serp_item.relative_url parameter
example:
["ranked_serp_element.serp_item.relative_url", "=", "/apis/rank-tracker-api"]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md).[filters](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md#filters)

#### Defined in

[main.ts:105064](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105064)

___


### historical\_serp\_mode

• `Optional` **historical\_serp\_mode**: `string`

data collection mode
optional field
you can use this field to filter the results;
possible types of filtering:
live — return keywords for which the specified target currently has ranking results in SERP;
lost — return keywords for which the specified target had previously had ranking results in SERP, but didn’t have them during the last check;
all — return both types of keywords.
default value: live

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md).[historical_serp_mode](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md#historical_serp_mode)

#### Defined in

[main.ts:105044](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105044)

___


### ignore\_synonyms

• `Optional` **ignore\_synonyms**: `boolean`

ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md).[ignore_synonyms](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md#ignore_synonyms)

#### Defined in

[main.ts:105020](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105020)

___


### item\_types

• `Optional` **item\_types**: `string`[]

display results by item type
optional field
indicates the type of search results included in the response
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array; you will not be able to sort and filter results by the types of search results not included in the response;
possible values:
["organic", "paid", "featured_snippet", "local_pack"]
default value:
["organic", "paid", "featured_snippet", "local_pack"]

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md).[item_types](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md#item_types)

#### Defined in

[main.ts:105015](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105015)

___


### language\_code

• `Optional` **language\_code**: `string`

language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
en

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md).[language_code](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md#language_code)

#### Defined in

[main.ts:105006](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105006)

___


### language\_name

• `Optional` **language\_name**: `string`

full name of the language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
English

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md).[language_name](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md#language_name)

#### Defined in

[main.ts:104997](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104997)

___


### limit

• `Optional` **limit**: `number`

the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md).[limit](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md#limit)

#### Defined in

[main.ts:105025](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105025)

___


### load\_rank\_absolute

• `Optional` **load\_rank\_absolute**: `boolean`

return rankings distribution by rank_absolute
optional field
default value: false
if set to true, we will return the field metrics_absolute containing rankings distribution by the rank_absolute parameter that indicates the result’s position among all SERP elements

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md).[load_rank_absolute](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md#load_rank_absolute)

#### Defined in

[main.ts:105035](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105035)

___


### location\_code

• `Optional` **location\_code**: `number`

location code
optional field
if you use this field, you don’t need to specify location_name
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations;
Note: this endpoint currently supports the US location only;
example:
2840

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md).[location_code](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md#location_code)

#### Defined in

[main.ts:104988](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104988)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of the location
optional field
if you use this field, you don’t need to specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
ignore this field to get the results for all available locations;
Note: this endpoint currently supports the US location only;
example:
United States

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md).[location_name](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md#location_name)

#### Defined in

[main.ts:104978](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104978)

___


### offset

• `Optional` **offset**: `number`

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md).[offset](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md#offset)

#### Defined in

[main.ts:105030](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105030)

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
["keyword_data.keyword_info.competition,desc"]
default rule:
["ranked_serp_element.serp_item.rank_group,asc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["keyword_data.keyword_info.search_volume,desc","keyword_data.keyword_info.cpc,desc"]

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md).[order_by](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md#order_by)

#### Defined in

[main.ts:105080](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105080)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md).[tag](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md#tag)

#### Defined in

[main.ts:105086](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105086)

___


### target

• `Optional` **target**: `string`

domain
required field
the domain name of the target website
the domain should be specified without https:// or www.
if you want to get the keywords a particular webpage ranks for, specify the filter by the
ranked_serp_element.serp_item.relative_url parameter
example:
"filters":[
"ranked_serp_element.serp_item.relative_url", "=", "/apis/rank-tracker-api"]

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveRequestInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md).[target](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md#target)

#### Defined in

[main.ts:104968](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104968)

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

[main.ts:105099](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105099)

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

[main.ts:105141](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105141)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingRankedKeywordsLiveRequestInfo`](DataforseoLabsBingRankedKeywordsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingRankedKeywordsLiveRequestInfo`](DataforseoLabsBingRankedKeywordsLiveRequestInfo.md)

#### Defined in

[main.ts:105134](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105134)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")