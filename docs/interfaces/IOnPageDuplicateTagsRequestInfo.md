[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageDuplicateTagsRequestInfo

# Interface: IOnPageDuplicateTagsRequestInfo

Defined in: main.ts:168713

## Indexable

\[`key`: `string`\]: `any`

## Properties

### accumulator?

> `optional` **accumulator**: `string`

Defined in: main.ts:168725

tag value
optional field
specify a title or description here if you want to receive a list of duplicate pages that contains this tag

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:168719

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:168730

the maximum number of returned pages
optional field
default value: 100
maximum value: 1000

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:168735

offset in the results array of returned pages
optional field
default value: 0
if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:168741

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:168721

type of element
