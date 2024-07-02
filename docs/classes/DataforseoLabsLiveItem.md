**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsLiveItem

# Class: DataforseoLabsLiveItem

## Implements

- [`IDataforseoLabsLiveItem`](../interfaces/IDataforseoLabsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsLiveItem(data)

> **new DataforseoLabsLiveItem**(`data`?): [`DataforseoLabsLiveItem`](DataforseoLabsLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsLiveItem`](../interfaces/IDataforseoLabsLiveItem.md)

#### Returns

[`DataforseoLabsLiveItem`](DataforseoLabsLiveItem.md)

#### Source

main.ts:110160

## Properties

### keyword\_data?

> **`optional`** **keyword\_data**: [`KeywordDataKeywordDataInfo`](KeywordDataKeywordDataInfo.md)

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsLiveItem`](../interfaces/IDataforseoLabsLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsLiveItem.md#keyword_data)

#### Source

main.ts:110154

***

### ranked\_serp\_element?

> **`optional`** **ranked\_serp\_element**: [`RankedSerpElement`](RankedSerpElement.md)

contains data on the domain’s SERP element found for the returned keyword

#### Implementation of

[`IDataforseoLabsLiveItem`](../interfaces/IDataforseoLabsLiveItem.md).[`ranked_serp_element`](../interfaces/IDataforseoLabsLiveItem.md#ranked_serp_element)

#### Source

main.ts:110156

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsLiveItem`](../interfaces/IDataforseoLabsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsLiveItem.md#se_type)

#### Source

main.ts:110152

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:110169

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:110188

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsLiveItem`](DataforseoLabsLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsLiveItem`](DataforseoLabsLiveItem.md)

#### Source

main.ts:110181
