[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageRawHtmlRequestInfo

# Class: OnPageRawHtmlRequestInfo

## Implements

- [`IOnPageRawHtmlRequestInfo`](../interfaces/IOnPageRawHtmlRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageRawHtmlRequestInfo.md#constructor)

### Properties

- [id](OnPageRawHtmlRequestInfo.md#id)
- [url](OnPageRawHtmlRequestInfo.md#url)

### Methods

- [init](OnPageRawHtmlRequestInfo.md#init)
- [toJSON](OnPageRawHtmlRequestInfo.md#tojson)
- [fromJS](OnPageRawHtmlRequestInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageRawHtmlRequestInfo**(`data?`): [`OnPageRawHtmlRequestInfo`](OnPageRawHtmlRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageRawHtmlRequestInfo`](../interfaces/IOnPageRawHtmlRequestInfo.md) |

#### Returns

[`OnPageRawHtmlRequestInfo`](OnPageRawHtmlRequestInfo.md)

#### Defined in

[main.ts:151148](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151148)

## Properties

### id

• `Optional` **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Implementation of

[IOnPageRawHtmlRequestInfo](../interfaces/IOnPageRawHtmlRequestInfo.md).[id](../interfaces/IOnPageRawHtmlRequestInfo.md#id)

#### Defined in

[main.ts:151139](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151139)

___


### url

• `Optional` **url**: `string`

page url
required field
the absolute URL of a page to request HTML
Note: this field is optional if the task was set using the Instant Pages endpoint

#### Implementation of

[IOnPageRawHtmlRequestInfo](../interfaces/IOnPageRawHtmlRequestInfo.md).[url](../interfaces/IOnPageRawHtmlRequestInfo.md#url)

#### Defined in

[main.ts:151144](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151144)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:151157](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151157)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:151175](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151175)

___


### fromJS

▸ **fromJS**(`data`): [`OnPageRawHtmlRequestInfo`](OnPageRawHtmlRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageRawHtmlRequestInfo`](OnPageRawHtmlRequestInfo.md)

#### Defined in

[main.ts:151168](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151168)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")