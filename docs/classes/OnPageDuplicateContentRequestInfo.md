[Documentation](../README.md) / [Exports](../modules.md) / OnPageDuplicateContentRequestInfo

# Class: OnPageDuplicateContentRequestInfo

## Implements

- [`IOnPageDuplicateContentRequestInfo`](../interfaces/IOnPageDuplicateContentRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageDuplicateContentRequestInfo.md#constructor)

### Properties

- [id](OnPageDuplicateContentRequestInfo.md#id)
- [limit](OnPageDuplicateContentRequestInfo.md#limit)
- [offset](OnPageDuplicateContentRequestInfo.md#offset)
- [similarity](OnPageDuplicateContentRequestInfo.md#similarity)
- [tag](OnPageDuplicateContentRequestInfo.md#tag)
- [url](OnPageDuplicateContentRequestInfo.md#url)

### Methods

- [init](OnPageDuplicateContentRequestInfo.md#init)
- [toJSON](OnPageDuplicateContentRequestInfo.md#tojson)
- [fromJS](OnPageDuplicateContentRequestInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageDuplicateContentRequestInfo**(`data?`): [`OnPageDuplicateContentRequestInfo`](OnPageDuplicateContentRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageDuplicateContentRequestInfo`](../interfaces/IOnPageDuplicateContentRequestInfo.md) |

#### Returns

[`OnPageDuplicateContentRequestInfo`](OnPageDuplicateContentRequestInfo.md)

#### Defined in

main.ts:152890

## Properties

### id

• `Optional` **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Implementation of

[IOnPageDuplicateContentRequestInfo](../interfaces/IOnPageDuplicateContentRequestInfo.md).[id](../interfaces/IOnPageDuplicateContentRequestInfo.md#id)

#### Defined in

main.ts:152862

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned pages
optional field
default value: 100
maximum value: 1000

#### Implementation of

[IOnPageDuplicateContentRequestInfo](../interfaces/IOnPageDuplicateContentRequestInfo.md).[limit](../interfaces/IOnPageDuplicateContentRequestInfo.md#limit)

#### Defined in

main.ts:152875

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned pages
optional field
default value: 0
if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages

#### Implementation of

[IOnPageDuplicateContentRequestInfo](../interfaces/IOnPageDuplicateContentRequestInfo.md).[offset](../interfaces/IOnPageDuplicateContentRequestInfo.md#offset)

#### Defined in

main.ts:152880

___

### similarity

• `Optional` **similarity**: `number`

content similarity score
by default, the content is considered duplicate if the value is greater than or equals 6
you can specify any similarity score in the 0-to-10 range

#### Implementation of

[IOnPageDuplicateContentRequestInfo](../interfaces/IOnPageDuplicateContentRequestInfo.md).[similarity](../interfaces/IOnPageDuplicateContentRequestInfo.md#similarity)

#### Defined in

main.ts:152870

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IOnPageDuplicateContentRequestInfo](../interfaces/IOnPageDuplicateContentRequestInfo.md).[tag](../interfaces/IOnPageDuplicateContentRequestInfo.md#tag)

#### Defined in

main.ts:152886

___

### url

• `Optional` **url**: `string`

page URL
required field
specify the initial page you want to receive duplicate content for

#### Implementation of

[IOnPageDuplicateContentRequestInfo](../interfaces/IOnPageDuplicateContentRequestInfo.md).[url](../interfaces/IOnPageDuplicateContentRequestInfo.md#url)

#### Defined in

main.ts:152866

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

main.ts:152899

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

main.ts:152921

___

### fromJS

▸ **fromJS**(`data`): [`OnPageDuplicateContentRequestInfo`](OnPageDuplicateContentRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageDuplicateContentRequestInfo`](OnPageDuplicateContentRequestInfo.md)

#### Defined in

main.ts:152914
