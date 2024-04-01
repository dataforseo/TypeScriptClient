[Documentation](../README.md) / [Exports](../modules.md) / AppendixStatusEndpointsInfo

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

main.ts:218350

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

main.ts:218336

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

main.ts:218346

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

main.ts:218359

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

main.ts:218377

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

main.ts:218370
