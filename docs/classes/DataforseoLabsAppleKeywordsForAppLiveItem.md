[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsAppleKeywordsForAppLiveItem

# Class: DataforseoLabsAppleKeywordsForAppLiveItem

## Implements

- [`IDataforseoLabsAppleKeywordsForAppLiveItem`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAppleKeywordsForAppLiveItem()

> **new DataforseoLabsAppleKeywordsForAppLiveItem**(`data`?): [`DataforseoLabsAppleKeywordsForAppLiveItem`](DataforseoLabsAppleKeywordsForAppLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsAppleKeywordsForAppLiveItem`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveItem.md)

#### Returns

[`DataforseoLabsAppleKeywordsForAppLiveItem`](DataforseoLabsAppleKeywordsForAppLiveItem.md)

#### Defined in

main.ts:114586

## Properties

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordData`](KeywordData.md)

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveItem`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveItem.md#keyword_data)

#### Defined in

main.ts:114580

***

### ranked\_serp\_element?

> `optional` **ranked\_serp\_element**: [`ItemsRankedSerpElement`](ItemsRankedSerpElement.md)

contains data on the domain’s SERP element found for the returned keyword

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveItem`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveItem.md).[`ranked_serp_element`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveItem.md#ranked_serp_element)

#### Defined in

main.ts:114582

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveItem`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveItem.md#se_type)

#### Defined in

main.ts:114578

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:114595

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:114614

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAppleKeywordsForAppLiveItem`](DataforseoLabsAppleKeywordsForAppLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsAppleKeywordsForAppLiveItem`](DataforseoLabsAppleKeywordsForAppLiveItem.md)

#### Defined in

main.ts:114607
