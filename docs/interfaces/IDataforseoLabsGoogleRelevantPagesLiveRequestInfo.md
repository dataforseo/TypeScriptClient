[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleRelevantPagesLiveRequestInfo

# Interface: IDataforseoLabsGoogleRelevantPagesLiveRequestInfo

## Implemented by

- [`DataforseoLabsGoogleRelevantPagesLiveRequestInfo`](../classes/DataforseoLabsGoogleRelevantPagesLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [filters](IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md#filters)
- [historical\_serp\_mode](IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md#historical_serp_mode)
- [item\_types](IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md#item_types)
- [language\_code](IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md#language_code)
- [language\_name](IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md#language_name)
- [limit](IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md#limit)
- [location\_code](IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md#location_code)
- [location\_name](IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md#location_name)
- [offset](IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md#offset)
- [order\_by](IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md#order_by)
- [tag](IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md#tag)
- [target](IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md#target)

## Properties

### filters

• `Optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, <, <=, >, >=, =, <>, in, not_in
example:
["metrics.paid.count",">",0]
[["metrics.organic.count",">",50],"and",["metrics.organic.pos_1","<>",0]]
[[""metrics.organic.count",">",50"],
"and",
[["metrics.organic.pos_1","<>",0],"or",["metrics.organic.pos_2_3","<>",0]]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Defined in

[main.ts:90172](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90172)

___

### historical\_serp\_mode

• `Optional` **historical\_serp\_mode**: `string`

data collection mode
optional field
you can use this field to filter the results;
possible types of filtering:
live — return metrics for SERPs in which the specified target currently has ranking results;
lost — return metrics for SERPs in which the specified target had previously had ranking results, but didn’t have them during the last check;
all — return metrics for both types of SERPs.
default value: live

#### Defined in

[main.ts:90158](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90158)

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

#### Defined in

[main.ts:90139](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90139)

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

#### Defined in

[main.ts:90130](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90130)

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

#### Defined in

[main.ts:90121](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90121)

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned pages
optional field
default value: 100
maximum value: 1000

#### Defined in

[main.ts:90144](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90144)

___

### location\_code

• `Optional` **location\_code**: `number`

location code
optional field
if you use this field, you don’t need to specify location_name
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
2840

#### Defined in

[main.ts:90112](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90112)

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location
optional field
if you use this field, you don’t need to specify location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
United Kingdom

#### Defined in

[main.ts:90103](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90103)

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned pages
optional field
default value: 0
if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages

#### Defined in

[main.ts:90149](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90149)

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

#### Defined in

[main.ts:90189](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90189)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:90195](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90195)

___

### target

• `Optional` **target**: `string`

domain
required field
the domain name of the target website
the domain should be specified without https:// and www.

#### Defined in

[main.ts:90094](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90094)
