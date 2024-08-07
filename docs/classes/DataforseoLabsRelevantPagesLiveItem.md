**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsRelevantPagesLiveItem

# Class: DataforseoLabsRelevantPagesLiveItem

## Implements

- [`IDataforseoLabsRelevantPagesLiveItem`](../interfaces/IDataforseoLabsRelevantPagesLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsRelevantPagesLiveItem(data)

> **new DataforseoLabsRelevantPagesLiveItem**(`data`?): [`DataforseoLabsRelevantPagesLiveItem`](DataforseoLabsRelevantPagesLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsRelevantPagesLiveItem`](../interfaces/IDataforseoLabsRelevantPagesLiveItem.md)

#### Returns

[`DataforseoLabsRelevantPagesLiveItem`](DataforseoLabsRelevantPagesLiveItem.md)

#### Source

main.ts:96007

## Properties

### metrics?

> **`optional`** **metrics**: `Object`

rankings and traffic metrics for the relevant page

#### Index signature

 \[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsRelevantPagesLiveItem`](../interfaces/IDataforseoLabsRelevantPagesLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsRelevantPagesLiveItem.md#metrics)

#### Source

main.ts:96003

***

### page\_address?

> **`optional`** **page\_address**: `string`

absolute URL of the relevant page

#### Implementation of

[`IDataforseoLabsRelevantPagesLiveItem`](../interfaces/IDataforseoLabsRelevantPagesLiveItem.md).[`page_address`](../interfaces/IDataforseoLabsRelevantPagesLiveItem.md#page_address)

#### Source

main.ts:96001

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsRelevantPagesLiveItem`](../interfaces/IDataforseoLabsRelevantPagesLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsRelevantPagesLiveItem.md#se_type)

#### Source

main.ts:95999

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:96016

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:96041

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsRelevantPagesLiveItem`](DataforseoLabsRelevantPagesLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsRelevantPagesLiveItem`](DataforseoLabsRelevantPagesLiveItem.md)

#### Source

main.ts:96034
