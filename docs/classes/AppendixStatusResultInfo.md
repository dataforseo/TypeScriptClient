[dataforseo-client](../README.md) / [Exports](../modules.md) / AppendixStatusResultInfo

# Class: AppendixStatusResultInfo

## Implements

- [`IAppendixStatusResultInfo`](../interfaces/IAppendixStatusResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppendixStatusResultInfo.md#constructor)

### Properties

- [api](AppendixStatusResultInfo.md#api)
- [endpoints](AppendixStatusResultInfo.md#endpoints)
- [status](AppendixStatusResultInfo.md#status)

### Methods

- [init](AppendixStatusResultInfo.md#init)
- [toJSON](AppendixStatusResultInfo.md#tojson)
- [fromJS](AppendixStatusResultInfo.md#fromjs)

## Constructors

### constructor

• **new AppendixStatusResultInfo**(`data?`): [`AppendixStatusResultInfo`](AppendixStatusResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppendixStatusResultInfo`](../interfaces/IAppendixStatusResultInfo.md) |

#### Returns

[`AppendixStatusResultInfo`](AppendixStatusResultInfo.md)

#### Defined in

[main.ts:212787](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L212787)

## Properties

### api

• `Optional` **api**: `string`

name of the API
the list of APIs:
serp
keywords_data
appendix
dataforseo_labs
domain_analytics
merchant
on_page
business_data
backlinks
app_data

#### Implementation of

[IAppendixStatusResultInfo](../interfaces/IAppendixStatusResultInfo.md).[api](../interfaces/IAppendixStatusResultInfo.md#api)

#### Defined in

[main.ts:212771](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L212771)

___

### endpoints

• `Optional` **endpoints**: [`AppendixStatusEndpointsInfo`](AppendixStatusEndpointsInfo.md)[]

array of objects that contain status information for API endpoints

#### Implementation of

[IAppendixStatusResultInfo](../interfaces/IAppendixStatusResultInfo.md).[endpoints](../interfaces/IAppendixStatusResultInfo.md#endpoints)

#### Defined in

[main.ts:212783](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L212783)

___

### status

• `Optional` **status**: `string`

current status
you can find all information about your API statuses for the last 60 days here
the list of possible current statuses:
major_outage
partial_outage
long_response_time
long_execution_time
webhook_delay
send_delay

#### Implementation of

[IAppendixStatusResultInfo](../interfaces/IAppendixStatusResultInfo.md).[status](../interfaces/IAppendixStatusResultInfo.md#status)

#### Defined in

[main.ts:212781](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L212781)

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

[main.ts:212796](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L212796)

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

[main.ts:212819](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L212819)

___

### fromJS

▸ **fromJS**(`data`): [`AppendixStatusResultInfo`](AppendixStatusResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppendixStatusResultInfo`](AppendixStatusResultInfo.md)

#### Defined in

[main.ts:212812](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L212812)
