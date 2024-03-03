[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsErrorsResultInfo

# Interface: IDataforseoLabsErrorsResultInfo

## Implemented by

- [`DataforseoLabsErrorsResultInfo`](../classes/DataforseoLabsErrorsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](IDataforseoLabsErrorsResultInfo.md#datetime)
- [error\_code](IDataforseoLabsErrorsResultInfo.md#error_code)
- [error\_message](IDataforseoLabsErrorsResultInfo.md#error_message)
- [function](IDataforseoLabsErrorsResultInfo.md#function)
- [http\_code](IDataforseoLabsErrorsResultInfo.md#http_code)
- [http\_method](IDataforseoLabsErrorsResultInfo.md#http_method)
- [http\_response](IDataforseoLabsErrorsResultInfo.md#http_response)
- [http\_time](IDataforseoLabsErrorsResultInfo.md#http_time)
- [http\_url](IDataforseoLabsErrorsResultInfo.md#http_url)
- [id](IDataforseoLabsErrorsResultInfo.md#id)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:77348

___

### error\_code

• `Optional` **error\_code**: `number`

error code

#### Defined in

main.ts:77352

___

### error\_message

• `Optional` **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Defined in

main.ts:77355

___

### function

• `Optional` **function**: `string`

corresponding API function

#### Defined in

main.ts:77350

___

### http\_code

• `Optional` **http\_code**: `number`

HTTP status code

#### Defined in

main.ts:77362

___

### http\_method

• `Optional` **http\_method**: `string`

HTTP method

#### Defined in

main.ts:77360

___

### http\_response

• `Optional` **http\_response**: `string`

HTTP response
server response

#### Defined in

main.ts:77367

___

### http\_time

• `Optional` **http\_time**: `number`

time taken by HTTP request

#### Defined in

main.ts:77364

___

### http\_url

• `Optional` **http\_url**: `string`

URL that caused an error
URL you used for making an API call

#### Defined in

main.ts:77358

___

### id

• `Optional` **id**: `string`

id of the task

#### Defined in

main.ts:77343
