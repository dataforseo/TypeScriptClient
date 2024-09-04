[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsBingPageIntersectionLiveItem

# Class: DataforseoLabsBingPageIntersectionLiveItem

## Implements

- [`IDataforseoLabsBingPageIntersectionLiveItem`](../interfaces/IDataforseoLabsBingPageIntersectionLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingPageIntersectionLiveItem()

> **new DataforseoLabsBingPageIntersectionLiveItem**(`data`?): [`DataforseoLabsBingPageIntersectionLiveItem`](DataforseoLabsBingPageIntersectionLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsBingPageIntersectionLiveItem`](../interfaces/IDataforseoLabsBingPageIntersectionLiveItem.md)

#### Returns

[`DataforseoLabsBingPageIntersectionLiveItem`](DataforseoLabsBingPageIntersectionLiveItem.md)

#### Defined in

main.ts:108277

## Properties

### intersection\_result?

> `optional` **intersection\_result**: `object`

contains data on the SERP elements found for the returned keyword
data will be provided in separate arrays for each URL you specified in the pages object when setting a task;
depending on the number of specified URLs, it can contain from 1 to 20 arrays named respectively

#### Index Signature

 \[`key`: `string`\]: [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

#### Implementation of

[`IDataforseoLabsBingPageIntersectionLiveItem`](../interfaces/IDataforseoLabsBingPageIntersectionLiveItem.md).[`intersection_result`](../interfaces/IDataforseoLabsBingPageIntersectionLiveItem.md#intersection_result)

#### Defined in

main.ts:108273

***

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordData`](KeywordData.md)

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsBingPageIntersectionLiveItem`](../interfaces/IDataforseoLabsBingPageIntersectionLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsBingPageIntersectionLiveItem.md#keyword_data)

#### Defined in

main.ts:108269

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type
search engine type specified in a POST request;
for this endpoint, the field equals bing

#### Implementation of

[`IDataforseoLabsBingPageIntersectionLiveItem`](../interfaces/IDataforseoLabsBingPageIntersectionLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsBingPageIntersectionLiveItem.md#se_type)

#### Defined in

main.ts:108267

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:108286

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:108311

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBingPageIntersectionLiveItem`](DataforseoLabsBingPageIntersectionLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsBingPageIntersectionLiveItem`](DataforseoLabsBingPageIntersectionLiveItem.md)

#### Defined in

main.ts:108304
