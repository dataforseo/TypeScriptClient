[Documentation](../README.md) / [Exports](../modules.md) / IMerchantErrorsResultInfo

# Interface: IMerchantErrorsResultInfo

## Implemented by

- [`MerchantErrorsResultInfo`](../classes/MerchantErrorsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](IMerchantErrorsResultInfo.md#datetime)
- [error\_code](IMerchantErrorsResultInfo.md#error_code)
- [error\_message](IMerchantErrorsResultInfo.md#error_message)
- [function](IMerchantErrorsResultInfo.md#function)
- [http\_code](IMerchantErrorsResultInfo.md#http_code)
- [http\_method](IMerchantErrorsResultInfo.md#http_method)
- [http\_response](IMerchantErrorsResultInfo.md#http_response)
- [http\_time](IMerchantErrorsResultInfo.md#http_time)
- [http\_url](IMerchantErrorsResultInfo.md#http_url)
- [id](IMerchantErrorsResultInfo.md#id)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:163326

___

### error\_code

• `Optional` **error\_code**: `number`

error code

#### Defined in

main.ts:163330

___

### error\_message

• `Optional` **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Defined in

main.ts:163333

___

### function

• `Optional` **function**: `string`

corresponding API function

#### Defined in

main.ts:163328

___

### http\_code

• `Optional` **http\_code**: `number`

HTTP status code

#### Defined in

main.ts:163340

___

### http\_method

• `Optional` **http\_method**: `string`

HTTP method

#### Defined in

main.ts:163338

___

### http\_response

• `Optional` **http\_response**: `string`

HTTP response
server response

#### Defined in

main.ts:163346

___

### http\_time

• `Optional` **http\_time**: `number`

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Defined in

main.ts:163343

___

### http\_url

• `Optional` **http\_url**: `string`

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Defined in

main.ts:163336

___

### id

• `Optional` **id**: `string`

id of the task

#### Defined in

main.ts:163321
