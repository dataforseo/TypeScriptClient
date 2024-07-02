**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsAppleAppIntersectionLiveItem

# Class: DataforseoLabsAppleAppIntersectionLiveItem

## Implements

- [`IDataforseoLabsAppleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAppleAppIntersectionLiveItem(data)

> **new DataforseoLabsAppleAppIntersectionLiveItem**(`data`?): [`DataforseoLabsAppleAppIntersectionLiveItem`](DataforseoLabsAppleAppIntersectionLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsAppleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveItem.md)

#### Returns

[`DataforseoLabsAppleAppIntersectionLiveItem`](DataforseoLabsAppleAppIntersectionLiveItem.md)

#### Source

main.ts:116854

## Properties

### intersection\_result?

> **`optional`** **intersection\_result**: `Object`

contains SERP data for the returned keyword
data will be provided in separate arrays for each app ID you specified in the app_ids object when setting a task;
depending on the number of specified app IDs, it can contain from 1 to 20 arrays named respectively

#### Index signature

 \[`key`: `string`\]: [`AppDataAppStoreSearchOrganicSerpElementItem`](AppDataAppStoreSearchOrganicSerpElementItem.md)

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveItem.md).[`intersection_result`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveItem.md#intersection_result)

#### Source

main.ts:116850

***

### keyword\_data?

> **`optional`** **keyword\_data**: [`KeywordDataKeywordDataInfo`](KeywordDataKeywordDataInfo.md)

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveItem.md#keyword_data)

#### Source

main.ts:116846

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveItem.md#se_type)

#### Source

main.ts:116844

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:116863

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:116888

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsAppleAppIntersectionLiveItem`](DataforseoLabsAppleAppIntersectionLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsAppleAppIntersectionLiveItem`](DataforseoLabsAppleAppIntersectionLiveItem.md)

#### Source

main.ts:116881
