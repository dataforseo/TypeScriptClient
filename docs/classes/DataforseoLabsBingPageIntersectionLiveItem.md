**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsBingPageIntersectionLiveItem

# Class: DataforseoLabsBingPageIntersectionLiveItem

## Implements

- [`IDataforseoLabsBingPageIntersectionLiveItem`](../interfaces/IDataforseoLabsBingPageIntersectionLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingPageIntersectionLiveItem(data)

> **new DataforseoLabsBingPageIntersectionLiveItem**(`data`?): [`DataforseoLabsBingPageIntersectionLiveItem`](DataforseoLabsBingPageIntersectionLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsBingPageIntersectionLiveItem`](../interfaces/IDataforseoLabsBingPageIntersectionLiveItem.md)

#### Returns

[`DataforseoLabsBingPageIntersectionLiveItem`](DataforseoLabsBingPageIntersectionLiveItem.md)

#### Source

main.ts:107327

## Properties

### intersection\_result?

> **`optional`** **intersection\_result**: `Object`

contains data on the SERP elements found for the returned keyword
data will be provided in separate arrays for each URL you specified in the pages object when setting a task;
depending on the number of specified URLs, it can contain from 1 to 20 arrays named respectively

#### Index signature

 \[`key`: `string`\]: [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

#### Implementation of

[`IDataforseoLabsBingPageIntersectionLiveItem`](../interfaces/IDataforseoLabsBingPageIntersectionLiveItem.md).[`intersection_result`](../interfaces/IDataforseoLabsBingPageIntersectionLiveItem.md#intersection_result)

#### Source

main.ts:107323

***

### keyword\_data?

> **`optional`** **keyword\_data**: [`KeywordDataKeywordDataInfo`](KeywordDataKeywordDataInfo.md)

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsBingPageIntersectionLiveItem`](../interfaces/IDataforseoLabsBingPageIntersectionLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsBingPageIntersectionLiveItem.md#keyword_data)

#### Source

main.ts:107319

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type
search engine type specified in a POST request;
for this endpoint, the field equals bing

#### Implementation of

[`IDataforseoLabsBingPageIntersectionLiveItem`](../interfaces/IDataforseoLabsBingPageIntersectionLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsBingPageIntersectionLiveItem.md#se_type)

#### Source

main.ts:107317

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:107336

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:107361

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsBingPageIntersectionLiveItem`](DataforseoLabsBingPageIntersectionLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsBingPageIntersectionLiveItem`](DataforseoLabsBingPageIntersectionLiveItem.md)

#### Source

main.ts:107354
