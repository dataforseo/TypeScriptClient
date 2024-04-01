[Documentation](../README.md) / [Exports](../modules.md) / OnPageContentParsingRequestInfo

# Class: OnPageContentParsingRequestInfo

## Implements

- [`IOnPageContentParsingRequestInfo`](../interfaces/IOnPageContentParsingRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageContentParsingRequestInfo.md#constructor)

### Properties

- [id](OnPageContentParsingRequestInfo.md#id)
- [url](OnPageContentParsingRequestInfo.md#url)

### Methods

- [init](OnPageContentParsingRequestInfo.md#init)
- [toJSON](OnPageContentParsingRequestInfo.md#tojson)
- [fromJS](OnPageContentParsingRequestInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageContentParsingRequestInfo**(`data?`): [`OnPageContentParsingRequestInfo`](OnPageContentParsingRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageContentParsingRequestInfo`](../interfaces/IOnPageContentParsingRequestInfo.md) |

#### Returns

[`OnPageContentParsingRequestInfo`](OnPageContentParsingRequestInfo.md)

#### Defined in

main.ts:157323

## Properties

### id

• `Optional` **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
note: the enable_content_parsing parameter in the POST request must be set to true
example:
"07131248-1535-0216-1000-17384017ad04"

#### Implementation of

[IOnPageContentParsingRequestInfo](../interfaces/IOnPageContentParsingRequestInfo.md).[id](../interfaces/IOnPageContentParsingRequestInfo.md#id)

#### Defined in

main.ts:157319

___

### url

• `Optional` **url**: `string`

URL of the content to parse
required field
URL of the page to parse
example:
https://www.fujielectric.com/

#### Implementation of

[IOnPageContentParsingRequestInfo](../interfaces/IOnPageContentParsingRequestInfo.md).[url](../interfaces/IOnPageContentParsingRequestInfo.md#url)

#### Defined in

main.ts:157312

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

main.ts:157332

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

main.ts:157350

___

### fromJS

▸ **fromJS**(`data`): [`OnPageContentParsingRequestInfo`](OnPageContentParsingRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageContentParsingRequestInfo`](OnPageContentParsingRequestInfo.md)

#### Defined in

main.ts:157343
