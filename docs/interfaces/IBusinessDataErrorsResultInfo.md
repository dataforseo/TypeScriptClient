[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IBusinessDataErrorsResultInfo

# Interface: IBusinessDataErrorsResultInfo

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

main.ts:197515

***

### error\_code?

> `optional` **error\_code**: `number`

error code

#### Defined in

main.ts:197519

***

### error\_message?

> `optional` **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Defined in

main.ts:197522

***

### function?

> `optional` **function**: `string`

corresponding API function

#### Defined in

main.ts:197517

***

### http\_code?

> `optional` **http\_code**: `number`

HTTP status code

#### Defined in

main.ts:197529

***

### http\_method?

> `optional` **http\_method**: `string`

HTTP method

#### Defined in

main.ts:197527

***

### http\_response?

> `optional` **http\_response**: `string`

HTTP response
server response

#### Defined in

main.ts:197535

***

### http\_time?

> `optional` **http\_time**: `number`

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Defined in

main.ts:197532

***

### http\_url?

> `optional` **http\_url**: `string`

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Defined in

main.ts:197525

***

### id?

> `optional` **id**: `string`

id of the task

#### Defined in

main.ts:197510
