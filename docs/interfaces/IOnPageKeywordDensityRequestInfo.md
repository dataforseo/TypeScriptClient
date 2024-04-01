[Documentation](../README.md) / [Exports](../modules.md) / IOnPageKeywordDensityRequestInfo

# Interface: IOnPageKeywordDensityRequestInfo

## Implemented by

- [`OnPageKeywordDensityRequestInfo`](../classes/OnPageKeywordDensityRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [filters](IOnPageKeywordDensityRequestInfo.md#filters)
- [id](IOnPageKeywordDensityRequestInfo.md#id)
- [keyword\_length](IOnPageKeywordDensityRequestInfo.md#keyword_length)
- [limit](IOnPageKeywordDensityRequestInfo.md#limit)
- [order\_by](IOnPageKeywordDensityRequestInfo.md#order_by)
- [tag](IOnPageKeywordDensityRequestInfo.md#tag)
- [url](IOnPageKeywordDensityRequestInfo.md#url)

## Properties

### filters

• `Optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, =, <>, in, not_in, like, not_like
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

#### Defined in

main.ts:155633

___

### id

• `Optional` **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Defined in

main.ts:155600

___

### keyword\_length

• `Optional` **keyword\_length**: `number`

number of words for a keyword
required field
possible values:
1, 2, 3, 4, 5

#### Defined in

main.ts:155605

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000

#### Defined in

main.ts:155616

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
["frequency,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["keyword,asc","frequency,desc"]

#### Defined in

main.ts:155647

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:155653

___

### url

• `Optional` **url**: `string`

page URL
optional field
if you do not specify a page here, the results will be provided for the whole website
if you use this field, the API response will contain only keywords from the specified page
a page should be specified with absolute URL (including http:// or https://)

#### Defined in

main.ts:155611
