[dataforseo-client](../README.md) / [Exports](../modules.md) / IOnPageErrorsResultInfo

# Interface: IOnPageErrorsResultInfo

## Implemented by

- [`OnPageErrorsResultInfo`](../classes/OnPageErrorsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](IOnPageErrorsResultInfo.md#datetime)
- [error\_code](IOnPageErrorsResultInfo.md#error_code)
- [error\_message](IOnPageErrorsResultInfo.md#error_message)
- [function](IOnPageErrorsResultInfo.md#function)
- [http\_code](IOnPageErrorsResultInfo.md#http_code)
- [http\_method](IOnPageErrorsResultInfo.md#http_method)
- [http\_response](IOnPageErrorsResultInfo.md#http_response)
- [http\_time](IOnPageErrorsResultInfo.md#http_time)
- [http\_url](IOnPageErrorsResultInfo.md#http_url)
- [id](IOnPageErrorsResultInfo.md#id)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:141990](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141990)

___

### error\_code

• `Optional` **error\_code**: `number`

error code

#### Defined in

[main.ts:141994](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141994)

___

### error\_message

• `Optional` **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Defined in

[main.ts:141997](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141997)

___

### function

• `Optional` **function**: `string`

corresponding API function

#### Defined in

[main.ts:141992](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141992)

___

### http\_code

• `Optional` **http\_code**: `number`

HTTP status code

#### Defined in

[main.ts:142004](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L142004)

___

### http\_method

• `Optional` **http\_method**: `string`

HTTP method

#### Defined in

[main.ts:142002](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L142002)

___

### http\_response

• `Optional` **http\_response**: `string`

HTTP response
server response

#### Defined in

[main.ts:142010](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L142010)

___

### http\_time

• `Optional` **http\_time**: `number`

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Defined in

[main.ts:142007](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L142007)

___

### http\_url

• `Optional` **http\_url**: `string`

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Defined in

[main.ts:142000](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L142000)

___

### id

• `Optional` **id**: `string`

id of the task

#### Defined in

[main.ts:141985](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141985)
