**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsErrorsResultInfo

# Interface: IDataforseoLabsErrorsResultInfo

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

main.ts:81168

***

### error\_code?

> **`optional`** **error\_code**: `number`

error code

#### Source

main.ts:81172

***

### error\_message?

> **`optional`** **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Source

main.ts:81175

***

### function?

> **`optional`** **function**: `string`

corresponding API function

#### Source

main.ts:81170

***

### http\_code?

> **`optional`** **http\_code**: `number`

HTTP status code

#### Source

main.ts:81182

***

### http\_method?

> **`optional`** **http\_method**: `string`

HTTP method

#### Source

main.ts:81180

***

### http\_response?

> **`optional`** **http\_response**: `string`

HTTP response
server response

#### Source

main.ts:81187

***

### http\_time?

> **`optional`** **http\_time**: `number`

time taken by HTTP request

#### Source

main.ts:81184

***

### http\_url?

> **`optional`** **http\_url**: `string`

URL that caused an error
URL you used for making an API call

#### Source

main.ts:81178

***

### id?

> **`optional`** **id**: `string`

id of the task

#### Source

main.ts:81163
