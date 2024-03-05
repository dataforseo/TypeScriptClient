[dataforseo-client](../README.md) / [Exports](../modules.md) / AppendixStatusEndpointsInfo

# Class: AppendixStatusEndpointsInfo

## Implements

- [`IAppendixStatusEndpointsInfo`](../interfaces/IAppendixStatusEndpointsInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppendixStatusEndpointsInfo.md#constructor)

### Properties

- [endpoint](AppendixStatusEndpointsInfo.md#endpoint)
- [status](AppendixStatusEndpointsInfo.md#status)

### Methods

- [init](AppendixStatusEndpointsInfo.md#init)
- [toJSON](AppendixStatusEndpointsInfo.md#tojson)
- [fromJS](AppendixStatusEndpointsInfo.md#fromjs)

## Constructors

### constructor

• **new AppendixStatusEndpointsInfo**(`data?`): [`AppendixStatusEndpointsInfo`](AppendixStatusEndpointsInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppendixStatusEndpointsInfo`](../interfaces/IAppendixStatusEndpointsInfo.md) |

#### Returns

[`AppendixStatusEndpointsInfo`](AppendixStatusEndpointsInfo.md)

#### Defined in

[main.ts:212697](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L212697)

## Properties

### endpoint

• `Optional` **endpoint**: `string`

name of the endpoint
the list of possible endpoints:
task_get
task_post
live
postback/pingback

#### Implementation of

[IAppendixStatusEndpointsInfo](../interfaces/IAppendixStatusEndpointsInfo.md).[endpoint](../interfaces/IAppendixStatusEndpointsInfo.md#endpoint)

#### Defined in

[main.ts:212683](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L212683)

___

### status

• `Optional` **status**: `string`

current status
you can find all information about the statuses of our endpoints for the last 60 days here
the list of possible current statuses:
major_outage
partial_outage
long_response_time
long_execution_time
webhook_delay
send_delay

#### Implementation of

[IAppendixStatusEndpointsInfo](../interfaces/IAppendixStatusEndpointsInfo.md).[status](../interfaces/IAppendixStatusEndpointsInfo.md#status)

#### Defined in

[main.ts:212693](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L212693)

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

[main.ts:212706](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L212706)

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

[main.ts:212724](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L212724)

___

### fromJS

▸ **fromJS**(`data`): [`AppendixStatusEndpointsInfo`](AppendixStatusEndpointsInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppendixStatusEndpointsInfo`](AppendixStatusEndpointsInfo.md)

#### Defined in

[main.ts:212717](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L212717)
