[dataforseo-client](../README.md) / [Exports](../modules.md) / AppendixWebhookResendRequestInfo

# Class: AppendixWebhookResendRequestInfo

## Implements

- [`IAppendixWebhookResendRequestInfo`](../interfaces/IAppendixWebhookResendRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppendixWebhookResendRequestInfo.md#constructor)

### Properties

- [id](AppendixWebhookResendRequestInfo.md#id)

### Methods

- [init](AppendixWebhookResendRequestInfo.md#init)
- [toJSON](AppendixWebhookResendRequestInfo.md#tojson)
- [fromJS](AppendixWebhookResendRequestInfo.md#fromjs)

## Constructors

### constructor

• **new AppendixWebhookResendRequestInfo**(`data?`): [`AppendixWebhookResendRequestInfo`](AppendixWebhookResendRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppendixWebhookResendRequestInfo`](../interfaces/IAppendixWebhookResendRequestInfo.md) |

#### Returns

[`AppendixWebhookResendRequestInfo`](AppendixWebhookResendRequestInfo.md)

#### Defined in

[main.ts:212523](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L212523)

## Properties

### id

• `Optional` **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you can specify up to 100 identifiers;
each identifier in the task array must be specified as a separate object

#### Implementation of

[IAppendixWebhookResendRequestInfo](../interfaces/IAppendixWebhookResendRequestInfo.md).[id](../interfaces/IAppendixWebhookResendRequestInfo.md#id)

#### Defined in

[main.ts:212519](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L212519)

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

[main.ts:212532](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L212532)

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

[main.ts:212549](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L212549)

___

### fromJS

▸ **fromJS**(`data`): [`AppendixWebhookResendRequestInfo`](AppendixWebhookResendRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppendixWebhookResendRequestInfo`](AppendixWebhookResendRequestInfo.md)

#### Defined in

[main.ts:212542](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L212542)
