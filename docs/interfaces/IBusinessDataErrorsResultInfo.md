[dataforseo-client](../README.md) / [Exports](../modules.md) / IBusinessDataErrorsResultInfo

# Interface: IBusinessDataErrorsResultInfo

## Implemented by

- [`BusinessDataErrorsResultInfo`](../classes/BusinessDataErrorsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](IBusinessDataErrorsResultInfo.md#datetime)
- [error\_code](IBusinessDataErrorsResultInfo.md#error_code)
- [error\_message](IBusinessDataErrorsResultInfo.md#error_message)
- [function](IBusinessDataErrorsResultInfo.md#function)
- [http\_code](IBusinessDataErrorsResultInfo.md#http_code)
- [http\_method](IBusinessDataErrorsResultInfo.md#http_method)
- [http\_response](IBusinessDataErrorsResultInfo.md#http_response)
- [http\_time](IBusinessDataErrorsResultInfo.md#http_time)
- [http\_url](IBusinessDataErrorsResultInfo.md#http_url)
- [id](IBusinessDataErrorsResultInfo.md#id)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:187697](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187697)

___

### error\_code

• `Optional` **error\_code**: `number`

error code

#### Defined in

[main.ts:187701](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187701)

___

### error\_message

• `Optional` **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Defined in

[main.ts:187704](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187704)

___

### function

• `Optional` **function**: `string`

corresponding API function

#### Defined in

[main.ts:187699](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187699)

___

### http\_code

• `Optional` **http\_code**: `number`

HTTP status code

#### Defined in

[main.ts:187711](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187711)

___

### http\_method

• `Optional` **http\_method**: `string`

HTTP method

#### Defined in

[main.ts:187709](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187709)

___

### http\_response

• `Optional` **http\_response**: `string`

HTTP response
server response

#### Defined in

[main.ts:187717](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187717)

___

### http\_time

• `Optional` **http\_time**: `number`

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Defined in

[main.ts:187714](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187714)

___

### http\_url

• `Optional` **http\_url**: `string`

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Defined in

[main.ts:187707](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187707)

___

### id

• `Optional` **id**: `string`

id of the task

#### Defined in

[main.ts:187692](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187692)
