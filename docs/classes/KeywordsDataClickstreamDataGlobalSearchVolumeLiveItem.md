[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem

# Class: KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem

## Implements

- [`IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem()

> **new KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem**(`data`?): [`KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem`](KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem.md)

#### Parameters

• **data?**: [`IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem.md)

#### Returns

[`KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem`](KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem.md)

#### Defined in

main.ts:139302

## Properties

### country\_distribution?

> `optional` **country\_distribution**: [`CountryDistribution`](CountryDistribution.md)[]

distribution of clickstream by countries
represents clickstream-based search volume in available countries, as well as its respective percentage of global search volume

#### Implementation of

[`IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem.md).[`country_distribution`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem.md#country_distribution)

#### Defined in

main.ts:139298

***

### keyword?

> `optional` **keyword**: `string`

keyword
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem.md).[`keyword`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem.md#keyword)

#### Defined in

main.ts:139291

***

### search\_volume?

> `optional` **search\_volume**: `number`

clickstream-based average monthly search volume rate
represents the (approximate) number of searches for the given keyword idea based on clickstream
you can learn more about clickstream search volume in this Help Center article

#### Implementation of

[`IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem.md).[`search_volume`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem.md#search_volume)

#### Defined in

main.ts:139295

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:139311

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:139334

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem`](KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem`](KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem.md)

#### Defined in

main.ts:139327
