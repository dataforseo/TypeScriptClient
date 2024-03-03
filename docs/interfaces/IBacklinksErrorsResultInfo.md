[Documentation](../README.md) / [Exports](../modules.md) / IBacklinksErrorsResultInfo

# Interface: IBacklinksErrorsResultInfo

## Implemented by

- [`BacklinksErrorsResultInfo`](../classes/BacklinksErrorsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](IBacklinksErrorsResultInfo.md#datetime)
- [error\_code](IBacklinksErrorsResultInfo.md#error_code)
- [error\_message](IBacklinksErrorsResultInfo.md#error_message)
- [function](IBacklinksErrorsResultInfo.md#function)
- [http\_code](IBacklinksErrorsResultInfo.md#http_code)
- [http\_method](IBacklinksErrorsResultInfo.md#http_method)
- [http\_response](IBacklinksErrorsResultInfo.md#http_response)
- [http\_time](IBacklinksErrorsResultInfo.md#http_time)
- [http\_url](IBacklinksErrorsResultInfo.md#http_url)
- [id](IBacklinksErrorsResultInfo.md#id)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:128637

___

### error\_code

• `Optional` **error\_code**: `number`

error code

#### Defined in

main.ts:128641

___

### error\_message

• `Optional` **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Defined in

main.ts:128644

___

### function

• `Optional` **function**: `string`

corresponding API function

#### Defined in

main.ts:128639

___

### http\_code

• `Optional` **http\_code**: `number`

HTTP status code

#### Defined in

main.ts:128651

___

### http\_method

• `Optional` **http\_method**: `string`

HTTP method

#### Defined in

main.ts:128649

___

### http\_response

• `Optional` **http\_response**: `string`

HTTP response
server response

#### Defined in

main.ts:128656

___

### http\_time

• `Optional` **http\_time**: `number`

time taken by HTTP request

#### Defined in

main.ts:128653

___

### http\_url

• `Optional` **http\_url**: `string`

URL that caused an error
URL you used for making an API call

#### Defined in

main.ts:128647

___

### id

• `Optional` **id**: `string`

id of the task

#### Defined in

main.ts:128632
