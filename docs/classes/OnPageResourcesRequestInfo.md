**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageResourcesRequestInfo

# Class: OnPageResourcesRequestInfo

## Implements

- [`IOnPageResourcesRequestInfo`](../interfaces/IOnPageResourcesRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageResourcesRequestInfo(data)

> **new OnPageResourcesRequestInfo**(`data`?): [`OnPageResourcesRequestInfo`](OnPageResourcesRequestInfo.md)

#### Parameters

• **data?**: [`IOnPageResourcesRequestInfo`](../interfaces/IOnPageResourcesRequestInfo.md)

#### Returns

[`OnPageResourcesRequestInfo`](OnPageResourcesRequestInfo.md)

#### Source

main.ts:153168

## Properties

### filters?

> **`optional`** **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, <, `<=, >`, >=, =, `<>`, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["resource_type","=","stylesheet"]
[["resource_type","=","image"],
"and",["checks.is_https","=",false]]
[["fetch_timing.duration_time",">`",1],"and",[["total_transfer_size",">",100],"or",["checks.high_loading_time","=",true]]]
The full list of possible filters is available by this link.

#### Implementation of

[`IOnPageResourcesRequestInfo`](../interfaces/IOnPageResourcesRequestInfo.md).[`filters`](../interfaces/IOnPageResourcesRequestInfo.md#filters)

#### Source

main.ts:153132

***

### id?

> **`optional`** **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Implementation of

[`IOnPageResourcesRequestInfo`](../interfaces/IOnPageResourcesRequestInfo.md).[`id`](../interfaces/IOnPageResourcesRequestInfo.md#id)

#### Source

main.ts:153102

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned resources
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IOnPageResourcesRequestInfo`](../interfaces/IOnPageResourcesRequestInfo.md).[`limit`](../interfaces/IOnPageResourcesRequestInfo.md#limit)

#### Source

main.ts:153113

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned resources
optional field
default value: 0
if you specify the 10 value, the first ten resources in the results array will be omitted and the data will be provided for the successive resources

#### Implementation of

[`IOnPageResourcesRequestInfo`](../interfaces/IOnPageResourcesRequestInfo.md).[`offset`](../interfaces/IOnPageResourcesRequestInfo.md#offset)

#### Source

main.ts:153118

***

### order\_by?

> **`optional`** **order\_by**: `string`[]

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

#### Implementation of

[`IOnPageResourcesRequestInfo`](../interfaces/IOnPageResourcesRequestInfo.md).[`order_by`](../interfaces/IOnPageResourcesRequestInfo.md#order_by)

#### Source

main.ts:153158

***

### relevant\_pages\_filters?

> **`optional`** **relevant\_pages\_filters**: `string`[]

filter the resources by relevant pages
optional field
you can use this field to obtain resources from pages matching to the defined parameters
you can apply the same filters here as available for the pages endpoint
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, <, `<=, >`, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["checks.no_image_title","=",true]

#### Implementation of

[`IOnPageResourcesRequestInfo`](../interfaces/IOnPageResourcesRequestInfo.md).[`relevant_pages_filters`](../interfaces/IOnPageResourcesRequestInfo.md#relevant_pages_filters)

#### Source

main.ts:153144

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IOnPageResourcesRequestInfo`](../interfaces/IOnPageResourcesRequestInfo.md).[`tag`](../interfaces/IOnPageResourcesRequestInfo.md#tag)

#### Source

main.ts:153164

***

### url?

> **`optional`** **url**: `string`

page URL
optional field
specify this field if you want to get the resources for a specific page
note that to obtain resource’s meta from a particular URL, you should specify the URL in this field;
if you do not indicate a url when setting a task, resource’s meta in the results will be returned based on the data from the page where our crawler first saw the resource

#### Implementation of

[`IOnPageResourcesRequestInfo`](../interfaces/IOnPageResourcesRequestInfo.md).[`url`](../interfaces/IOnPageResourcesRequestInfo.md#url)

#### Source

main.ts:153108

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:153177

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:153213

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageResourcesRequestInfo`](OnPageResourcesRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageResourcesRequestInfo`](OnPageResourcesRequestInfo.md)

#### Source

main.ts:153206
