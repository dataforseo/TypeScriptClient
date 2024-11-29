[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsErrorsResultInfo

# Interface: IDataforseoLabsErrorsResultInfo

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

main.ts:90704

***

### error\_code?

> `optional` **error\_code**: `number`

error code

#### Defined in

main.ts:90708

***

### error\_message?

> `optional` **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Defined in

main.ts:90711

***

### function?

> `optional` **function**: `string`

corresponding API function

#### Defined in

main.ts:90706

***

### http\_code?

> `optional` **http\_code**: `number`

HTTP status code

#### Defined in

main.ts:90718

***

### http\_method?

> `optional` **http\_method**: `string`

HTTP method

#### Defined in

main.ts:90716

***

### http\_response?

> `optional` **http\_response**: `string`

HTTP response
server response

#### Defined in

main.ts:90723

***

### http\_time?

> `optional` **http\_time**: `number`

time taken by HTTP request

#### Defined in

main.ts:90720

***

### http\_url?

> `optional` **http\_url**: `string`

URL that caused an error
URL you used for making an API call

#### Defined in

main.ts:90714

***

### id?

> `optional` **id**: `string`

id of the task

#### Defined in

main.ts:90699
