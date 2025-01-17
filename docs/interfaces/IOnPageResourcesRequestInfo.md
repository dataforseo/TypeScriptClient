[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageResourcesRequestInfo

# Interface: IOnPageResourcesRequestInfo

Defined in: main.ts:167733

## Indexable

\[`key`: `string`\]: `any`

## Properties

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:167769

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["resource_type","=","stylesheet"]
[["resource_type","=","image"],
"and",["checks.is_https","=",false]]
[["fetch_timing.duration_time",">",1],"and",[["total_transfer_size",">",100],"or",["checks.high_loading_time","=",true]]]
The full list of possible filters is available by this link.

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:167739

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:167750

the maximum number of returned resources
optional field
default value: 100
maximum value: 1000

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:167755

offset in the results array of returned resources
optional field
default value: 0
if you specify the 10 value, the first ten resources in the results array will be omitted and the data will be provided for the successive resources

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:167795

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

***

### relevant\_pages\_filters?

> `optional` **relevant\_pages\_filters**: `string`[]

Defined in: main.ts:167781

filter the resources by relevant pages
optional field
you can use this field to obtain resources from pages matching to the defined parameters
you can apply the same filters here as available for the pages endpoint
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["checks.no_image_title","=",true]

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:167801

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:167745

page URL
optional field
specify this field if you want to get the resources for a specific page
note that to obtain resource’s meta from a particular URL, you should specify the URL in this field;
if you do not indicate a url when setting a task, resource’s meta in the results will be returned based on the data from the page where our crawler first saw the resource
