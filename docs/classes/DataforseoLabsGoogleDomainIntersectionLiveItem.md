**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleDomainIntersectionLiveItem

# Class: DataforseoLabsGoogleDomainIntersectionLiveItem

## Implements

- [`IDataforseoLabsGoogleDomainIntersectionLiveItem`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleDomainIntersectionLiveItem(data)

> **new DataforseoLabsGoogleDomainIntersectionLiveItem**(`data`?): [`DataforseoLabsGoogleDomainIntersectionLiveItem`](DataforseoLabsGoogleDomainIntersectionLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleDomainIntersectionLiveItem`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveItem.md)

#### Returns

[`DataforseoLabsGoogleDomainIntersectionLiveItem`](DataforseoLabsGoogleDomainIntersectionLiveItem.md)

#### Source

main.ts:92706

## Properties

### first\_domain\_serp\_element?

> **`optional`** **first\_domain\_serp\_element**: [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

contains data on the first domain’s SERP element found for the returned keyword
the list of supported SERP elements can be found below

#### Implementation of

[`IDataforseoLabsGoogleDomainIntersectionLiveItem`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveItem.md).[`first_domain_serp_element`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveItem.md#first_domain_serp_element)

#### Source

main.ts:92699

***

### keyword\_data?

> **`optional`** **keyword\_data**: [`KeywordDataInfo`](KeywordDataInfo.md)

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsGoogleDomainIntersectionLiveItem`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveItem.md#keyword_data)

#### Source

main.ts:92696

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleDomainIntersectionLiveItem`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveItem.md#se_type)

#### Source

main.ts:92694

***

### second\_domain\_serp\_element?

> **`optional`** **second\_domain\_serp\_element**: [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

contains data on the second domain’s SERP element found for the returned keyword
the list of supported SERP elements can be found below

#### Implementation of

[`IDataforseoLabsGoogleDomainIntersectionLiveItem`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveItem.md).[`second_domain_serp_element`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveItem.md#second_domain_serp_element)

#### Source

main.ts:92702

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:92715

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:92735

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleDomainIntersectionLiveItem`](DataforseoLabsGoogleDomainIntersectionLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleDomainIntersectionLiveItem`](DataforseoLabsGoogleDomainIntersectionLiveItem.md)

#### Source

main.ts:92728
