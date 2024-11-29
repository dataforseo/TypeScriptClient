[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageDuplicateTagsRequestInfo

# Interface: IOnPageDuplicateTagsRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### accumulator?

> `optional` **accumulator**: `string`

tag value
optional field
specify a title or description here if you want to receive a list of duplicate pages that contains this tag

#### Defined in

main.ts:168493

***

### id?

> `optional` **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Defined in

main.ts:168487

***

### limit?

> `optional` **limit**: `number`

the maximum number of returned pages
optional field
default value: 100
maximum value: 1000

#### Defined in

main.ts:168498

***

### offset?

> `optional` **offset**: `number`

offset in the results array of returned pages
optional field
default value: 0
if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages

#### Defined in

main.ts:168503

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:168509

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:168489
