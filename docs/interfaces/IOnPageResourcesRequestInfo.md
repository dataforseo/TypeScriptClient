[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IOnPageResourcesRequestInfo

# Interface: IOnPageResourcesRequestInfo

## Implemented by

- [`OnPageResourcesRequestInfo`](../classes/OnPageResourcesRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [filters](IOnPageResourcesRequestInfo.md#filters)
- [id](IOnPageResourcesRequestInfo.md#id)
- [limit](IOnPageResourcesRequestInfo.md#limit)
- [offset](IOnPageResourcesRequestInfo.md#offset)
- [order\_by](IOnPageResourcesRequestInfo.md#order_by)
- [relevant\_pages\_filters](IOnPageResourcesRequestInfo.md#relevant_pages_filters)
- [tag](IOnPageResourcesRequestInfo.md#tag)
- [url](IOnPageResourcesRequestInfo.md#url)

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
["resource_type","=","stylesheet"]
[["resource_type","=","image"],
"and",["checks.is_https","=",false]]
[["fetch_timing.duration_time",">",1],"and",[["total_transfer_size",">",100],"or",["checks.high_loading_time","=",true]]]
The full list of possible filters is available by this link.

#### Defined in

[main.ts:145892](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L145892)

___


### id

• `Optional` **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Defined in

[main.ts:145862](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L145862)

___


### limit

• `Optional` **limit**: `number`

the maximum number of returned resources
optional field
default value: 100
maximum value: 1000

#### Defined in

[main.ts:145873](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L145873)

___


### offset

• `Optional` **offset**: `number`

offset in the results array of returned resources
optional field
default value: 0
if you specify the 10 value, the first ten resources in the results array will be omitted and the data will be provided for the successive resources

#### Defined in

[main.ts:145878](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L145878)

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
["size,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["size,desc","fetch_timing.fetch_end,desc"]

#### Defined in

[main.ts:145918](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L145918)

___


### relevant\_pages\_filters

• `Optional` **relevant\_pages\_filters**: `string`[]

filter the resources by relevant pages
optional field
you can use this field to obtain resources from pages matching to the defined parameters
you can apply the same filters here as available for the pages endpoint
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, <, <=, >, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["checks.no_image_title","=",true]

#### Defined in

[main.ts:145904](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L145904)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:145924](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L145924)

___


### url

• `Optional` **url**: `string`

page URL
optional field
specify this field if you want to get the resources for a specific page
note that to obtain resource’s meta from a particular URL, you should specify the URL in this field;
if you do not indicate a url when setting a task, resource’s meta in the results will be returned based on the data from the page where our crawler first saw the resource

#### Defined in

[main.ts:145868](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L145868)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")