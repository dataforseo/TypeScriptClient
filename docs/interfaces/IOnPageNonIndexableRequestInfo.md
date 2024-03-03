[Documentation](../README.md) / [Exports](../modules.md) / IOnPageNonIndexableRequestInfo

# Interface: IOnPageNonIndexableRequestInfo

## Implemented by

- [`OnPageNonIndexableRequestInfo`](../classes/OnPageNonIndexableRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [filters](IOnPageNonIndexableRequestInfo.md#filters)
- [id](IOnPageNonIndexableRequestInfo.md#id)
- [limit](IOnPageNonIndexableRequestInfo.md#limit)
- [offset](IOnPageNonIndexableRequestInfo.md#offset)

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
["reason","=","robots_txt"][["reason","<>","robots_txt"],
"and",
["url","not_like","%/wp-admin/%"]]
[["url","not_like","%/wp-admin/%"],
"and",
[["reason","<>","meta_tag"],"or",["reason","<>","http_header"]]]
The full list of possible filters is available by this link.

#### Defined in

main.ts:149516

___

### id

• `Optional` **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Defined in

main.ts:149490

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned pages
optional field
default value: 100
maximum value: 1000

#### Defined in

main.ts:149495

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned pages
optional field
default value: 0
if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages

#### Defined in

main.ts:149500
