[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsErrorsResultInfo

# Interface: IDataforseoLabsErrorsResultInfo

Defined in: main.ts:90733

## Indexable

\[`key`: `string`\]: `any`

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:90740

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### error\_code?

> `optional` **error\_code**: `number`

Defined in: main.ts:90744

error code

***

### error\_message?

> `optional` **error\_message**: `string`

Defined in: main.ts:90747

error message or error URL
error message (see full list) or URL that caused an error

***

### function?

> `optional` **function**: `string`

Defined in: main.ts:90742

corresponding API function

***

### http\_code?

> `optional` **http\_code**: `number`

Defined in: main.ts:90754

HTTP status code

***

### http\_method?

> `optional` **http\_method**: `string`

Defined in: main.ts:90752

HTTP method

***

### http\_response?

> `optional` **http\_response**: `string`

Defined in: main.ts:90759

HTTP response
server response

***

### http\_time?

> `optional` **http\_time**: `number`

Defined in: main.ts:90756

time taken by HTTP request

***

### http\_url?

> `optional` **http\_url**: `string`

Defined in: main.ts:90750

URL that caused an error
URL you used for making an API call

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:90735

id of the task
