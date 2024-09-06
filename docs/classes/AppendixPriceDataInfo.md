[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AppendixPriceDataInfo

# Class: AppendixPriceDataInfo

## Implements

- [`IAppendixPriceDataInfo`](../interfaces/IAppendixPriceDataInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppendixPriceDataInfo()

> **new AppendixPriceDataInfo**(`data`?): [`AppendixPriceDataInfo`](AppendixPriceDataInfo.md)

#### Parameters

• **data?**: [`IAppendixPriceDataInfo`](../interfaces/IAppendixPriceDataInfo.md)

#### Returns

[`AppendixPriceDataInfo`](AppendixPriceDataInfo.md)

#### Defined in

main.ts:221618

## Properties

### task\_get?

> `optional` **task\_get**: [`AppendixTaskGetPriceDataInfo`](AppendixTaskGetPriceDataInfo.md)

#### Implementation of

[`IAppendixPriceDataInfo`](../interfaces/IAppendixPriceDataInfo.md).[`task_get`](../interfaces/IAppendixPriceDataInfo.md#task_get)

#### Defined in

main.ts:221612

***

### task\_post?

> `optional` **task\_post**: [`AppendixTaskKeywordsDataPriceDataInfo`](AppendixTaskKeywordsDataPriceDataInfo.md)

#### Implementation of

[`IAppendixPriceDataInfo`](../interfaces/IAppendixPriceDataInfo.md).[`task_post`](../interfaces/IAppendixPriceDataInfo.md#task_post)

#### Defined in

main.ts:221614

***

### tasks\_ready?

> `optional` **tasks\_ready**: [`AppendixTaskKeywordsDataPriceDataInfo`](AppendixTaskKeywordsDataPriceDataInfo.md)

#### Implementation of

[`IAppendixPriceDataInfo`](../interfaces/IAppendixPriceDataInfo.md).[`tasks_ready`](../interfaces/IAppendixPriceDataInfo.md#tasks_ready)

#### Defined in

main.ts:221613

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:221627

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:221646

***

### fromJS()

> `static` **fromJS**(`data`): [`AppendixPriceDataInfo`](AppendixPriceDataInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppendixPriceDataInfo`](AppendixPriceDataInfo.md)

#### Defined in

main.ts:221639
