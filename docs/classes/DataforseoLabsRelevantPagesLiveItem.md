[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsRelevantPagesLiveItem

# Class: DataforseoLabsRelevantPagesLiveItem

## Implements

- [`IDataforseoLabsRelevantPagesLiveItem`](../interfaces/IDataforseoLabsRelevantPagesLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsRelevantPagesLiveItem()

> **new DataforseoLabsRelevantPagesLiveItem**(`data`?): [`DataforseoLabsRelevantPagesLiveItem`](DataforseoLabsRelevantPagesLiveItem.md)

#### Parameters

##### data?

[`IDataforseoLabsRelevantPagesLiveItem`](../interfaces/IDataforseoLabsRelevantPagesLiveItem.md)

#### Returns

[`DataforseoLabsRelevantPagesLiveItem`](DataforseoLabsRelevantPagesLiveItem.md)

#### Defined in

main.ts:104686

## Properties

### metrics?

> `optional` **metrics**: `object`

rankings and traffic metrics for the relevant page

#### Index Signature

 \[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsRelevantPagesLiveItem`](../interfaces/IDataforseoLabsRelevantPagesLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsRelevantPagesLiveItem.md#metrics)

#### Defined in

main.ts:104682

***

### page\_address?

> `optional` **page\_address**: `string`

absolute URL of the relevant page

#### Implementation of

[`IDataforseoLabsRelevantPagesLiveItem`](../interfaces/IDataforseoLabsRelevantPagesLiveItem.md).[`page_address`](../interfaces/IDataforseoLabsRelevantPagesLiveItem.md#page_address)

#### Defined in

main.ts:104680

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsRelevantPagesLiveItem`](../interfaces/IDataforseoLabsRelevantPagesLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsRelevantPagesLiveItem.md#se_type)

#### Defined in

main.ts:104678

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:104695

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:104720

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsRelevantPagesLiveItem`](DataforseoLabsRelevantPagesLiveItem.md)

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsRelevantPagesLiveItem`](DataforseoLabsRelevantPagesLiveItem.md)

#### Defined in

main.ts:104713
