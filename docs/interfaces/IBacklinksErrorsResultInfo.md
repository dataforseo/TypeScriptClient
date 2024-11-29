[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBacklinksErrorsResultInfo

# Interface: IBacklinksErrorsResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:149242

***

### error\_code?

> `optional` **error\_code**: `number`

error code

#### Defined in

main.ts:149246

***

### error\_message?

> `optional` **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Defined in

main.ts:149249

***

### function?

> `optional` **function**: `string`

corresponding API function

#### Defined in

main.ts:149244

***

### http\_code?

> `optional` **http\_code**: `number`

HTTP status code

#### Defined in

main.ts:149256

***

### http\_method?

> `optional` **http\_method**: `string`

HTTP method

#### Defined in

main.ts:149254

***

### http\_response?

> `optional` **http\_response**: `string`

HTTP response
server response

#### Defined in

main.ts:149261

***

### http\_time?

> `optional` **http\_time**: `number`

time taken by HTTP request

#### Defined in

main.ts:149258

***

### http\_url?

> `optional` **http\_url**: `string`

URL that caused an error
URL you used for making an API call

#### Defined in

main.ts:149252

***

### id?

> `optional` **id**: `string`

id of the task

#### Defined in

main.ts:149237
