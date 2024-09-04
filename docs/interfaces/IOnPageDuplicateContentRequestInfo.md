[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IOnPageDuplicateContentRequestInfo

# Interface: IOnPageDuplicateContentRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### id?

> `optional` **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Defined in

main.ts:157207

***

### limit?

> `optional` **limit**: `number`

the maximum number of returned pages
optional field
default value: 100
maximum value: 1000

#### Defined in

main.ts:157220

***

### offset?

> `optional` **offset**: `number`

offset in the results array of returned pages
optional field
default value: 0
if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages

#### Defined in

main.ts:157225

***

### similarity?

> `optional` **similarity**: `number`

content similarity score
by default, the content is considered duplicate if the value is greater than or equals 6
you can specify any similarity score in the 0-to-10 range

#### Defined in

main.ts:157215

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:157231

***

### url?

> `optional` **url**: `string`

page URL
required field
specify the initial page you want to receive duplicate content for

#### Defined in

main.ts:157211
