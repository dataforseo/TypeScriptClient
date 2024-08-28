[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IOnPageErrorsResultInfo

# Interface: IOnPageErrorsResultInfo

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

main.ts:155377

***

### error\_code?

> `optional` **error\_code**: `number`

error code

#### Defined in

main.ts:155381

***

### error\_message?

> `optional` **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Defined in

main.ts:155384

***

### function?

> `optional` **function**: `string`

corresponding API function

#### Defined in

main.ts:155379

***

### http\_code?

> `optional` **http\_code**: `number`

HTTP status code

#### Defined in

main.ts:155391

***

### http\_method?

> `optional` **http\_method**: `string`

HTTP method

#### Defined in

main.ts:155389

***

### http\_response?

> `optional` **http\_response**: `string`

HTTP response
server response

#### Defined in

main.ts:155397

***

### http\_time?

> `optional` **http\_time**: `number`

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Defined in

main.ts:155394

***

### http\_url?

> `optional` **http\_url**: `string`

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Defined in

main.ts:155387

***

### id?

> `optional` **id**: `string`

id of the task

#### Defined in

main.ts:155372
