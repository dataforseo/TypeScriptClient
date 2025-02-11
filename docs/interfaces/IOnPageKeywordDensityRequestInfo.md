[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageKeywordDensityRequestInfo

# Interface: IOnPageKeywordDensityRequestInfo

Defined in: main.ts:171390

## Indexable

\[`key`: `string`\]: `any`

## Properties

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:171429

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["keyword","=","%seo%"]
[["keyword","=","%seo%"],
"and",
["frequency","<","6"]]
[["keyword","not_like","%seo%"],
"and",
[["frequency",">","6"],"or",["density",">","0.02"]]]
The full list of possible filters is available by this link.

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:171396

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

***

### keyword\_length?

> `optional` **keyword\_length**: `number`

Defined in: main.ts:171401

number of words for a keyword
required field
possible values:
1, 2, 3, 4, 5

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:171412

the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:171443

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting type
example:
["frequency,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["keyword,asc","frequency,desc"]

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:171449

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:171407

page URL
optional field
if you do not specify a page here, the results will be provided for the whole website
if you use this field, the API response will contain only keywords from the specified page
a page should be specified with absolute URL (including http:// or https://)
