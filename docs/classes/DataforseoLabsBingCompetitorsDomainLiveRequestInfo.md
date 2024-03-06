[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsBingCompetitorsDomainLiveRequestInfo

# Class: DataforseoLabsBingCompetitorsDomainLiveRequestInfo

## Implements

- [`IDataforseoLabsBingCompetitorsDomainLiveRequestInfo`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingCompetitorsDomainLiveRequestInfo.md#constructor)

### Properties

- [exclude\_top\_domains](DataforseoLabsBingCompetitorsDomainLiveRequestInfo.md#exclude_top_domains)
- [filters](DataforseoLabsBingCompetitorsDomainLiveRequestInfo.md#filters)
- [intersecting\_domains](DataforseoLabsBingCompetitorsDomainLiveRequestInfo.md#intersecting_domains)
- [item\_types](DataforseoLabsBingCompetitorsDomainLiveRequestInfo.md#item_types)
- [language\_code](DataforseoLabsBingCompetitorsDomainLiveRequestInfo.md#language_code)
- [language\_name](DataforseoLabsBingCompetitorsDomainLiveRequestInfo.md#language_name)
- [limit](DataforseoLabsBingCompetitorsDomainLiveRequestInfo.md#limit)
- [location\_code](DataforseoLabsBingCompetitorsDomainLiveRequestInfo.md#location_code)
- [location\_name](DataforseoLabsBingCompetitorsDomainLiveRequestInfo.md#location_name)
- [max\_rank\_group](DataforseoLabsBingCompetitorsDomainLiveRequestInfo.md#max_rank_group)
- [offset](DataforseoLabsBingCompetitorsDomainLiveRequestInfo.md#offset)
- [order\_by](DataforseoLabsBingCompetitorsDomainLiveRequestInfo.md#order_by)
- [tag](DataforseoLabsBingCompetitorsDomainLiveRequestInfo.md#tag)
- [target](DataforseoLabsBingCompetitorsDomainLiveRequestInfo.md#target)

### Methods

- [init](DataforseoLabsBingCompetitorsDomainLiveRequestInfo.md#init)
- [toJSON](DataforseoLabsBingCompetitorsDomainLiveRequestInfo.md#tojson)
- [fromJS](DataforseoLabsBingCompetitorsDomainLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingCompetitorsDomainLiveRequestInfo**(`data?`): [`DataforseoLabsBingCompetitorsDomainLiveRequestInfo`](DataforseoLabsBingCompetitorsDomainLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingCompetitorsDomainLiveRequestInfo`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveRequestInfo.md) |

#### Returns

[`DataforseoLabsBingCompetitorsDomainLiveRequestInfo`](DataforseoLabsBingCompetitorsDomainLiveRequestInfo.md)

#### Defined in

[main.ts:102952](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102952)

## Properties

### exclude\_top\_domains

• `Optional` **exclude\_top\_domains**: `boolean`

indicates whether to exclude world’s largest websites
optional field
default value: false
set to true if you want to get highly-relevant competitors excluding the websites listed below:
wikipedia.org
pinterest.com
amazon.com
google.com
facebook.com
wordpress.com
medium.com
quora.com
reddit.com
youtube.com
ebay.com
uol.com.br
instagram.com
olx.com
twitter.com
linkedin.com
slideshare.net

#### Implementation of

[IDataforseoLabsBingCompetitorsDomainLiveRequestInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveRequestInfo.md).[exclude_top_domains](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveRequestInfo.md#exclude_top_domains)

#### Defined in

[main.ts:102936](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102936)

___


### filters

• `Optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, <, <=, >, >=, =, <>, in, not_in
example:
["metrics.organic.count",">",50]
[["metrics.organic.pos_1","<>",0],"and",["metrics.organic.etv",">=","10"]]
[[["metrics.organic.count",">=",50],"and",["metrics.organic.pos_1","in",[1,5]]],
"or",
["metrics.organic.etv",">=","100"]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[IDataforseoLabsBingCompetitorsDomainLiveRequestInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveRequestInfo.md).[filters](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveRequestInfo.md#filters)

#### Defined in

[main.ts:102882](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102882)

___


### intersecting\_domains

• `Optional` **intersecting\_domains**: `string`[]

additional domains for improving results accuracy
optional field
to improve the accuracy of the result, you can specify domains that are known to intersect with the target in SERPs;
if you use this array, metrics in the result will be based on SERPs where both target website and intersecting_domains appear;
Note: you can specify up to 20 domains in this array

#### Implementation of

[IDataforseoLabsBingCompetitorsDomainLiveRequestInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveRequestInfo.md).[intersecting_domains](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveRequestInfo.md#intersecting_domains)

#### Defined in

[main.ts:102942](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102942)

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

[IDataforseoLabsBingCompetitorsDomainLiveRequestInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveRequestInfo.md).[item_types](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveRequestInfo.md#item_types)

#### Defined in

[main.ts:102868](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102868)

___


### language\_code

• `Optional` **language\_code**: `string`

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[IDataforseoLabsBingCompetitorsDomainLiveRequestInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveRequestInfo.md).[language_code](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveRequestInfo.md#language_code)

#### Defined in

[main.ts:102859](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102859)

___


### language\_name

• `Optional` **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[IDataforseoLabsBingCompetitorsDomainLiveRequestInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveRequestInfo.md).[language_name](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveRequestInfo.md#language_name)

#### Defined in

[main.ts:102851](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102851)

___


### limit

• `Optional` **limit**: `number`

the maximum number of returned domains
optional field
default value: 100
maximum value: 1000

#### Implementation of

[IDataforseoLabsBingCompetitorsDomainLiveRequestInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveRequestInfo.md).[limit](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveRequestInfo.md#limit)

#### Defined in

[main.ts:102904](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102904)

___


### location\_code

• `Optional` **location\_code**: `number`

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
2840

#### Implementation of

[IDataforseoLabsBingCompetitorsDomainLiveRequestInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveRequestInfo.md).[location_code](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveRequestInfo.md#location_code)

#### Defined in

[main.ts:102843](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102843)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
United States

#### Implementation of

[IDataforseoLabsBingCompetitorsDomainLiveRequestInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveRequestInfo.md).[location_name](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveRequestInfo.md#location_name)

#### Defined in

[main.ts:102834](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102834)

___


### max\_rank\_group

• `Optional` **max\_rank\_group**: `number`

maximum rank up to which competitors will be considered
optional field
default value: 100
if you specify 10 here, we will extract competitors from the top 10 Bing search results only

#### Implementation of

[IDataforseoLabsBingCompetitorsDomainLiveRequestInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveRequestInfo.md).[max_rank_group](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveRequestInfo.md#max_rank_group)

#### Defined in

[main.ts:102914](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102914)

___


### offset

• `Optional` **offset**: `number`

offset in the results array of returned domains
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Implementation of

[IDataforseoLabsBingCompetitorsDomainLiveRequestInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveRequestInfo.md).[offset](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveRequestInfo.md#offset)

#### Defined in

[main.ts:102909](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102909)

___


### order\_by

• `Optional` **order\_by**: `string`[]

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to specify a sorting type
example:
["metrics.paid.etv,asc"]
Note: you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["metrics.organic.etv,desc","metrics.paid.count,asc"]
default rule:
["metrics.organic.count,desc"]
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array

#### Implementation of

[IDataforseoLabsBingCompetitorsDomainLiveRequestInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveRequestInfo.md).[order_by](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveRequestInfo.md#order_by)

#### Defined in

[main.ts:102899](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102899)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDataforseoLabsBingCompetitorsDomainLiveRequestInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveRequestInfo.md).[tag](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveRequestInfo.md#tag)

#### Defined in

[main.ts:102948](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102948)

___


### target

• `Optional` **target**: `string`

domain
required field
the domain name of the target website
the domain should be specified without https:// and www.

#### Implementation of

[IDataforseoLabsBingCompetitorsDomainLiveRequestInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveRequestInfo.md).[target](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveRequestInfo.md#target)

#### Defined in

[main.ts:102825](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102825)

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

[main.ts:102961](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102961)

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

[main.ts:103007](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L103007)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingCompetitorsDomainLiveRequestInfo`](DataforseoLabsBingCompetitorsDomainLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingCompetitorsDomainLiveRequestInfo`](DataforseoLabsBingCompetitorsDomainLiveRequestInfo.md)

#### Defined in

[main.ts:103000](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L103000)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")