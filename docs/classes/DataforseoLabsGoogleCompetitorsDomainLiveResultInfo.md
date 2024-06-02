**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleCompetitorsDomainLiveResultInfo

# Class: DataforseoLabsGoogleCompetitorsDomainLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleCompetitorsDomainLiveResultInfo(data)

> **new DataforseoLabsGoogleCompetitorsDomainLiveResultInfo**(`data`?): [`DataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](DataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](DataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md)

#### Source

main.ts:92186

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsCompetitorsDomainLiveItem`](DataforseoLabsCompetitorsDomainLiveItem.md)[]

contains data related to the target and competitor domains

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#items)

#### Source

main.ts:92182

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#items_count)

#### Source

main.ts:92180

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#language_code)

#### Source

main.ts:92176

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#location_code)

#### Source

main.ts:92174

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#se_type)

#### Source

main.ts:92170

***

### target?

> **`optional`** **target**: `string`

target domain in a POST array

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#target)

#### Source

main.ts:92172

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#total_count)

#### Source

main.ts:92178

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:92195

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:92222

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](DataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](DataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md)

#### Source

main.ts:92215
