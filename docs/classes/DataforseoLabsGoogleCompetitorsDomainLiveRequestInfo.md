[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo

# Class: DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo

## Implements

- [`IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#constructor)

### Properties

- [exclude\_top\_domains](DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#exclude_top_domains)
- [filters](DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#filters)
- [intersecting\_domains](DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#intersecting_domains)
- [item\_types](DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#item_types)
- [language\_code](DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#language_code)
- [language\_name](DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#language_name)
- [limit](DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#limit)
- [location\_code](DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#location_code)
- [location\_name](DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#location_name)
- [max\_rank\_group](DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#max_rank_group)
- [offset](DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#offset)
- [order\_by](DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#order_by)
- [tag](DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#tag)
- [target](DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#target)

### Methods

- [init](DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#init)
- [toJSON](DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo**(`data?`): [`DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo`](DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md) |

#### Returns

[`DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo`](DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md)

#### Defined in

main.ts:90513

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

[IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md).[exclude_top_domains](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#exclude_top_domains)

#### Defined in

main.ts:90497

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
[["metrics.organic.pos_1","<>",0],"and",["metrics.organic.impressions_etv",">=","10"]]
[[["metrics.organic.count",">=",50],"and",["metrics.organic.pos_1","in",[1,5]]],
"or",
["metrics.organic.etv",">=","100"]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md).[filters](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#filters)

#### Defined in

main.ts:90443

___

### intersecting\_domains

• `Optional` **intersecting\_domains**: `string`[]

additional domains for improving results accuracy
optional field
to improve the accuracy of the result, you can specify domains that are known to intersect with the target in SERPs;
if you use this array, metrics in the result will be based on SERPs where both target website and intersecting_domains appear;
Note: you can specify up to 20 domains in this array

#### Implementation of

[IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md).[intersecting_domains](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#intersecting_domains)

#### Defined in

main.ts:90503

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

[IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md).[item_types](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#item_types)

#### Defined in

main.ts:90429

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

[IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#language_code)

#### Defined in

main.ts:90420

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

[IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md).[language_name](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#language_name)

#### Defined in

main.ts:90412

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned domains
optional field
default value: 100
maximum value: 1000

#### Implementation of

[IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md).[limit](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#limit)

#### Defined in

main.ts:90465

___

### location\_code

• `Optional` **location\_code**: `number`

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
2840

#### Implementation of

[IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#location_code)

#### Defined in

main.ts:90404

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
United Kingdom

#### Implementation of

[IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md).[location_name](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#location_name)

#### Defined in

main.ts:90396

___

### max\_rank\_group

• `Optional` **max\_rank\_group**: `number`

maximum rank up to which competitors will be considered
optional field
default value: 100
if you specify 10 here, we will extract competitors from the top 10 Google search results only

#### Implementation of

[IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md).[max_rank_group](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#max_rank_group)

#### Defined in

main.ts:90475

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned domains
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Implementation of

[IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md).[offset](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#offset)

#### Defined in

main.ts:90470

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

[IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md).[order_by](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#order_by)

#### Defined in

main.ts:90460

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md).[tag](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#tag)

#### Defined in

main.ts:90509

___

### target

• `Optional` **target**: `string`

domain
required field
the domain name of the target website
the domain should be specified without https:// and www.

#### Implementation of

[IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md).[target](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#target)

#### Defined in

main.ts:90388

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

main.ts:90522

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

main.ts:90568

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo`](DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo`](DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md)

#### Defined in

main.ts:90561
