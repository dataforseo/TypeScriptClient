[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsGoogleCompetitorsDomainLiveResultInfo

# Class: DataforseoLabsGoogleCompetitorsDomainLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleCompetitorsDomainLiveResultInfo()

> **new DataforseoLabsGoogleCompetitorsDomainLiveResultInfo**(`data`?): [`DataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](DataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](DataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md)

#### Defined in

main.ts:93203

## Properties

### items?

> `optional` **items**: [`DataforseoLabsCompetitorsDomainLiveItem`](DataforseoLabsCompetitorsDomainLiveItem.md)[]

contains data related to the target and competitor domains

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#items)

#### Defined in

main.ts:93199

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#items_count)

#### Defined in

main.ts:93197

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#language_code)

#### Defined in

main.ts:93193

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#location_code)

#### Defined in

main.ts:93191

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#se_type)

#### Defined in

main.ts:93187

***

### target?

> `optional` **target**: `string`

target domain in a POST array

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#target)

#### Defined in

main.ts:93189

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#total_count)

#### Defined in

main.ts:93195

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:93212

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:93239

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](DataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](DataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md)

#### Defined in

main.ts:93232
