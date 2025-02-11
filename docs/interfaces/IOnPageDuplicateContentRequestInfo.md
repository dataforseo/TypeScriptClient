[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageDuplicateContentRequestInfo

# Interface: IOnPageDuplicateContentRequestInfo

Defined in: main.ts:169101

## Indexable

\[`key`: `string`\]: `any`

## Properties

### id?

> `optional` **id**: `string`

Defined in: main.ts:169107

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:169120

the maximum number of returned pages
optional field
default value: 100
maximum value: 1000

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:169125

offset in the results array of returned pages
optional field
default value: 0
if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages

***

### similarity?

> `optional` **similarity**: `number`

Defined in: main.ts:169115

content similarity score
by default, the content is considered duplicate if the value is greater than or equals 6
you can specify any similarity score in the 0-to-10 range

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:169131

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:169111

page URL
required field
specify the initial page you want to receive duplicate content for
