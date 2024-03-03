[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsRelevantPagesLiveItem

# Class: DataforseoLabsRelevantPagesLiveItem

## Implements

- [`IDataforseoLabsRelevantPagesLiveItem`](../interfaces/IDataforseoLabsRelevantPagesLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsRelevantPagesLiveItem.md#constructor)

### Properties

- [metrics](DataforseoLabsRelevantPagesLiveItem.md#metrics)
- [page\_address](DataforseoLabsRelevantPagesLiveItem.md#page_address)
- [se\_type](DataforseoLabsRelevantPagesLiveItem.md#se_type)

### Methods

- [init](DataforseoLabsRelevantPagesLiveItem.md#init)
- [toJSON](DataforseoLabsRelevantPagesLiveItem.md#tojson)
- [fromJS](DataforseoLabsRelevantPagesLiveItem.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsRelevantPagesLiveItem**(`data?`): [`DataforseoLabsRelevantPagesLiveItem`](DataforseoLabsRelevantPagesLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsRelevantPagesLiveItem`](../interfaces/IDataforseoLabsRelevantPagesLiveItem.md) |

#### Returns

[`DataforseoLabsRelevantPagesLiveItem`](DataforseoLabsRelevantPagesLiveItem.md)

#### Defined in

main.ts:90354

## Properties

### metrics

• `Optional` **metrics**: `Object`

rankings and traffic metrics for the relevant page

#### Index signature

▪ [key: `string`]: [`MetricsInfo`](MetricsInfo.md)

#### Implementation of

[IDataforseoLabsRelevantPagesLiveItem](../interfaces/IDataforseoLabsRelevantPagesLiveItem.md).[metrics](../interfaces/IDataforseoLabsRelevantPagesLiveItem.md#metrics)

#### Defined in

main.ts:90350

___

### page\_address

• `Optional` **page\_address**: `string`

absolute URL of the relevant page

#### Implementation of

[IDataforseoLabsRelevantPagesLiveItem](../interfaces/IDataforseoLabsRelevantPagesLiveItem.md).[page_address](../interfaces/IDataforseoLabsRelevantPagesLiveItem.md#page_address)

#### Defined in

main.ts:90348

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsRelevantPagesLiveItem](../interfaces/IDataforseoLabsRelevantPagesLiveItem.md).[se_type](../interfaces/IDataforseoLabsRelevantPagesLiveItem.md#se_type)

#### Defined in

main.ts:90346

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

main.ts:90363

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

main.ts:90388

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsRelevantPagesLiveItem`](DataforseoLabsRelevantPagesLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsRelevantPagesLiveItem`](DataforseoLabsRelevantPagesLiveItem.md)

#### Defined in

main.ts:90381
