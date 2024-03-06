[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IDomainAnalyticsErrorsResultInfo

# Interface: IDomainAnalyticsErrorsResultInfo

## Implemented by

- [`DomainAnalyticsErrorsResultInfo`](../classes/DomainAnalyticsErrorsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime](IDomainAnalyticsErrorsResultInfo.md#datetime)
- [error\_code](IDomainAnalyticsErrorsResultInfo.md#error_code)
- [error\_message](IDomainAnalyticsErrorsResultInfo.md#error_message)
- [function](IDomainAnalyticsErrorsResultInfo.md#function)
- [http\_code](IDomainAnalyticsErrorsResultInfo.md#http_code)
- [http\_method](IDomainAnalyticsErrorsResultInfo.md#http_method)
- [http\_response](IDomainAnalyticsErrorsResultInfo.md#http_response)
- [http\_time](IDomainAnalyticsErrorsResultInfo.md#http_time)
- [http\_url](IDomainAnalyticsErrorsResultInfo.md#http_url)
- [id](IDomainAnalyticsErrorsResultInfo.md#id)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:71417](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71417)

___


### error\_code

• `Optional` **error\_code**: `number`

error code

#### Defined in

[main.ts:71421](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71421)

___


### error\_message

• `Optional` **error\_message**: `string`

error message or error URL
error message (see full list) or URL that caused an error

#### Defined in

[main.ts:71424](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71424)

___


### function

• `Optional` **function**: `string`

corresponding API function

#### Defined in

[main.ts:71419](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71419)

___


### http\_code

• `Optional` **http\_code**: `number`

HTTP status code

#### Defined in

[main.ts:71431](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71431)

___


### http\_method

• `Optional` **http\_method**: `string`

HTTP method

#### Defined in

[main.ts:71429](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71429)

___


### http\_response

• `Optional` **http\_response**: `string`

HTTP response
server response

#### Defined in

[main.ts:71437](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71437)

___


### http\_time

• `Optional` **http\_time**: `number`

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Defined in

[main.ts:71434](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71434)

___


### http\_url

• `Optional` **http\_url**: `string`

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Defined in

[main.ts:71427](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71427)

___


### id

• `Optional` **id**: `string`

id of the task

#### Defined in

[main.ts:71412](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71412)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")