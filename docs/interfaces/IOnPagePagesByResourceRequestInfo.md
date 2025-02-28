[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPagePagesByResourceRequestInfo

# Interface: IOnPagePagesByResourceRequestInfo

Defined in: main.ts:167495

## Indexable

\[`key`: `string`\]: `any`

## Properties

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:167531

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["meta.external_links_count","<=",50]["url","like","https://dataforseo.com/apis/dataforseo-labs-api"]
[["checks.high_waiting_time","=",false],
"and",["resource_type","=","html"]]
[["page_timing.duration_time","<",100],"and",[["checks.large_page_size","=",false],"or",["checks.high_waiting_time","=",false]]]
The full list of possible filters is available by this link.

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:167501

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:167512

the maximum number of returned pages
optional field
default value: 100
maximum value: 1000

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:167517

offset in the results array of returned pages
optional field
default value: 0
if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:167545

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting type
example:
["meta.external_links_count,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["page_timing.dom_complete,asc","size,desc"]

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:167551

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:167507

resource URL
required field
you can get this URL in the response of the Resources endpoint
example:
https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
