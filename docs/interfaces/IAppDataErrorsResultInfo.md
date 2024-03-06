[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IAppDataErrorsResultInfo

# Interface: IAppDataErrorsResultInfo

## Implemented by

- [`AppDataErrorsResultInfo`](../classes/AppDataErrorsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](IAppDataErrorsResultInfo.md#datetime)
- [error\_code](IAppDataErrorsResultInfo.md#error_code)
- [error\_message](IAppDataErrorsResultInfo.md#error_message)
- [function](IAppDataErrorsResultInfo.md#function)
- [http\_code](IAppDataErrorsResultInfo.md#http_code)
- [http\_method](IAppDataErrorsResultInfo.md#http_method)
- [http\_response](IAppDataErrorsResultInfo.md#http_response)
- [http\_time](IAppDataErrorsResultInfo.md#http_time)
- [http\_url](IAppDataErrorsResultInfo.md#http_url)
- [id](IAppDataErrorsResultInfo.md#id)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:176831](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176831)

___


### error\_code

• `Optional` **error\_code**: `number`

error code

#### Defined in

[main.ts:176835](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176835)

___


### error\_message

• `Optional` **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Defined in

[main.ts:176838](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176838)

___


### function

• `Optional` **function**: `string`

corresponding API function

#### Defined in

[main.ts:176833](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176833)

___


### http\_code

• `Optional` **http\_code**: `number`

HTTP status code

#### Defined in

[main.ts:176845](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176845)

___


### http\_method

• `Optional` **http\_method**: `string`

HTTP method

#### Defined in

[main.ts:176843](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176843)

___


### http\_response

• `Optional` **http\_response**: `string`

HTTP response
server response

#### Defined in

[main.ts:176851](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176851)

___


### http\_time

• `Optional` **http\_time**: `number`

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Defined in

[main.ts:176848](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176848)

___


### http\_url

• `Optional` **http\_url**: `string`

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Defined in

[main.ts:176841](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176841)

___


### id

• `Optional` **id**: `string`

id of the task

#### Defined in

[main.ts:176826](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176826)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")