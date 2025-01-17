[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem

# Class: KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem

Defined in: main.ts:148200

## Implements

- [`IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem()

> **new KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem**(`data`?): [`KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem`](KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem.md)

Defined in: main.ts:148214

#### Parameters

##### data?

[`IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem.md)

#### Returns

[`KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem`](KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem.md)

## Properties

### country\_distribution?

> `optional` **country\_distribution**: [`CountryDistribution`](CountryDistribution.md)[]

Defined in: main.ts:148210

distribution of clickstream by countries
represents clickstream-based search volume in available countries, as well as its respective percentage of global search volume

#### Implementation of

[`IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem.md).[`country_distribution`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem.md#country_distribution)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:148203

keyword
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem.md).[`keyword`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem.md#keyword)

***

### search\_volume?

> `optional` **search\_volume**: `number`

Defined in: main.ts:148207

clickstream-based average monthly search volume rate
represents the (approximate) number of searches for the given keyword idea based on clickstream
you can learn more about clickstream search volume in this Help Center article

#### Implementation of

[`IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem.md).[`search_volume`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem.md#search_volume)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:148223

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:148246

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem`](KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem.md)

Defined in: main.ts:148239

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem`](KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem.md)
