**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAppDataErrorsResultInfo

# Interface: IAppDataErrorsResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### datetime?

> **`optional`** **datetime**: `string`

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:182434

***

### error\_code?

> **`optional`** **error\_code**: `number`

error code

#### Source

main.ts:182438

***

### error\_message?

> **`optional`** **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Source

main.ts:182441

***

### function?

> **`optional`** **function**: `string`

corresponding API function

#### Source

main.ts:182436

***

### http\_code?

> **`optional`** **http\_code**: `number`

HTTP status code

#### Source

main.ts:182448

***

### http\_method?

> **`optional`** **http\_method**: `string`

HTTP method

#### Source

main.ts:182446

***

### http\_response?

> **`optional`** **http\_response**: `string`

HTTP response
server response

#### Source

main.ts:182454

***

### http\_time?

> **`optional`** **http\_time**: `number`

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Source

main.ts:182451

***

### http\_url?

> **`optional`** **http\_url**: `string`

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Source

main.ts:182444

***

### id?

> **`optional`** **id**: `string`

id of the task

#### Source

main.ts:182429
