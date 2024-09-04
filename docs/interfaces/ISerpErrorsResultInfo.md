[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ISerpErrorsResultInfo

# Interface: ISerpErrorsResultInfo

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

main.ts:24900

***

### error\_code?

> `optional` **error\_code**: `number`

error code

#### Defined in

main.ts:24904

***

### error\_message?

> `optional` **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Defined in

main.ts:24907

***

### function?

> `optional` **function**: `string`

corresponding API function

#### Defined in

main.ts:24902

***

### http\_code?

> `optional` **http\_code**: `number`

HTTP status code

#### Defined in

main.ts:24914

***

### http\_method?

> `optional` **http\_method**: `string`

HTTP method

#### Defined in

main.ts:24912

***

### http\_response?

> `optional` **http\_response**: `string`

HTTP response
server response

#### Defined in

main.ts:24920

***

### http\_time?

> `optional` **http\_time**: `number`

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Defined in

main.ts:24917

***

### http\_url?

> `optional` **http\_url**: `string`

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Defined in

main.ts:24910

***

### id?

> `optional` **id**: `string`

id of the task

#### Defined in

main.ts:24895
