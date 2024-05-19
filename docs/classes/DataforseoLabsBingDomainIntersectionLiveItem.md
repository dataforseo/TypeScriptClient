**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsBingDomainIntersectionLiveItem

# Class: DataforseoLabsBingDomainIntersectionLiveItem

## Implements

- [`IDataforseoLabsBingDomainIntersectionLiveItem`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingDomainIntersectionLiveItem(data)

> **new DataforseoLabsBingDomainIntersectionLiveItem**(`data`?): [`DataforseoLabsBingDomainIntersectionLiveItem`](DataforseoLabsBingDomainIntersectionLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsBingDomainIntersectionLiveItem`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveItem.md)

#### Returns

[`DataforseoLabsBingDomainIntersectionLiveItem`](DataforseoLabsBingDomainIntersectionLiveItem.md)

#### Source

main.ts:107189

## Properties

### first\_domain\_serp\_element?

> **`optional`** **first\_domain\_serp\_element**: [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

contains data on the first domain’s SERP element found for the returned keyword
the list of supported SERP elements can be found below

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveItem`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveItem.md).[`first_domain_serp_element`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveItem.md#first_domain_serp_element)

#### Source

main.ts:107182

***

### keyword\_data?

> **`optional`** **keyword\_data**: [`KeywordDataKeywordDataInfo`](KeywordDataKeywordDataInfo.md)

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveItem`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveItem.md#keyword_data)

#### Source

main.ts:107179

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type
search engine type specified in a POST request;
for this endpoint, the field equals bing

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveItem`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveItem.md#se_type)

#### Source

main.ts:107177

***

### second\_domain\_serp\_element?

> **`optional`** **second\_domain\_serp\_element**: [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

contains data on the second domain’s SERP element found for the returned keyword
the list of supported SERP elements can be found below

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveItem`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveItem.md).[`second_domain_serp_element`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveItem.md#second_domain_serp_element)

#### Source

main.ts:107185

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:107198

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:107218

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsBingDomainIntersectionLiveItem`](DataforseoLabsBingDomainIntersectionLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsBingDomainIntersectionLiveItem`](DataforseoLabsBingDomainIntersectionLiveItem.md)

#### Source

main.ts:107211
