[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpErrorsResultInfo

# Interface: ISerpErrorsResultInfo

## Implemented by

- [`SerpErrorsResultInfo`](../classes/SerpErrorsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](ISerpErrorsResultInfo.md#datetime)
- [error\_code](ISerpErrorsResultInfo.md#error_code)
- [error\_message](ISerpErrorsResultInfo.md#error_message)
- [function](ISerpErrorsResultInfo.md#function)
- [http\_code](ISerpErrorsResultInfo.md#http_code)
- [http\_method](ISerpErrorsResultInfo.md#http_method)
- [http\_response](ISerpErrorsResultInfo.md#http_response)
- [http\_time](ISerpErrorsResultInfo.md#http_time)
- [http\_url](ISerpErrorsResultInfo.md#http_url)
- [id](ISerpErrorsResultInfo.md#id)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:23263](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23263)

___


### error\_code

• `Optional` **error\_code**: `number`

error code

#### Defined in

[main.ts:23267](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23267)

___


### error\_message

• `Optional` **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Defined in

[main.ts:23270](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23270)

___


### function

• `Optional` **function**: `string`

corresponding API function

#### Defined in

[main.ts:23265](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23265)

___


### http\_code

• `Optional` **http\_code**: `number`

HTTP status code

#### Defined in

[main.ts:23277](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23277)

___


### http\_method

• `Optional` **http\_method**: `string`

HTTP method

#### Defined in

[main.ts:23275](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23275)

___


### http\_response

• `Optional` **http\_response**: `string`

HTTP response
server response

#### Defined in

[main.ts:23283](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23283)

___


### http\_time

• `Optional` **http\_time**: `number`

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Defined in

[main.ts:23280](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23280)

___


### http\_url

• `Optional` **http\_url**: `string`

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Defined in

[main.ts:23273](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23273)

___


### id

• `Optional` **id**: `string`

id of the task

#### Defined in

[main.ts:23258](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23258)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")