[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsGoogleDomainIntersectionLiveItem

# Class: DataforseoLabsGoogleDomainIntersectionLiveItem

## Implements

- [`IDataforseoLabsGoogleDomainIntersectionLiveItem`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleDomainIntersectionLiveItem()

> **new DataforseoLabsGoogleDomainIntersectionLiveItem**(`data`?): [`DataforseoLabsGoogleDomainIntersectionLiveItem`](DataforseoLabsGoogleDomainIntersectionLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleDomainIntersectionLiveItem`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveItem.md)

#### Returns

[`DataforseoLabsGoogleDomainIntersectionLiveItem`](DataforseoLabsGoogleDomainIntersectionLiveItem.md)

#### Defined in

main.ts:93739

## Properties

### first\_domain\_serp\_element?

> `optional` **first\_domain\_serp\_element**: [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

contains data on the first domain’s SERP element found for the returned keyword
the list of supported SERP elements can be found below

#### Implementation of

[`IDataforseoLabsGoogleDomainIntersectionLiveItem`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveItem.md).[`first_domain_serp_element`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveItem.md#first_domain_serp_element)

#### Defined in

main.ts:93732

***

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordDataInfo`](KeywordDataInfo.md)

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsGoogleDomainIntersectionLiveItem`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveItem.md#keyword_data)

#### Defined in

main.ts:93729

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleDomainIntersectionLiveItem`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveItem.md#se_type)

#### Defined in

main.ts:93727

***

### second\_domain\_serp\_element?

> `optional` **second\_domain\_serp\_element**: [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

contains data on the second domain’s SERP element found for the returned keyword
the list of supported SERP elements can be found below

#### Implementation of

[`IDataforseoLabsGoogleDomainIntersectionLiveItem`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveItem.md).[`second_domain_serp_element`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveItem.md#second_domain_serp_element)

#### Defined in

main.ts:93735

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:93748

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:93768

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleDomainIntersectionLiveItem`](DataforseoLabsGoogleDomainIntersectionLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleDomainIntersectionLiveItem`](DataforseoLabsGoogleDomainIntersectionLiveItem.md)

#### Defined in

main.ts:93761
