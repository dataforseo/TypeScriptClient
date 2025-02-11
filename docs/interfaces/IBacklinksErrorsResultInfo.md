[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBacklinksErrorsResultInfo

# Interface: IBacklinksErrorsResultInfo

Defined in: main.ts:149467

## Indexable

\[`key`: `string`\]: `any`

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:149474

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### error\_code?

> `optional` **error\_code**: `number`

Defined in: main.ts:149478

error code

***

### error\_message?

> `optional` **error\_message**: `string`

Defined in: main.ts:149481

error message or error URL
error message (see full list) or URL that caused an error

***

### function?

> `optional` **function**: `string`

Defined in: main.ts:149476

corresponding API function

***

### http\_code?

> `optional` **http\_code**: `number`

Defined in: main.ts:149488

HTTP status code

***

### http\_method?

> `optional` **http\_method**: `string`

Defined in: main.ts:149486

HTTP method

***

### http\_response?

> `optional` **http\_response**: `string`

Defined in: main.ts:149493

HTTP response
server response

***

### http\_time?

> `optional` **http\_time**: `number`

Defined in: main.ts:149490

time taken by HTTP request

***

### http\_url?

> `optional` **http\_url**: `string`

Defined in: main.ts:149484

URL that caused an error
URL you used for making an API call

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:149469

id of the task
