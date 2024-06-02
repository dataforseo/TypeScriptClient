**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsSubdomainsLiveItem

# Class: DataforseoLabsSubdomainsLiveItem

## Implements

- [`IDataforseoLabsSubdomainsLiveItem`](../interfaces/IDataforseoLabsSubdomainsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsSubdomainsLiveItem(data)

> **new DataforseoLabsSubdomainsLiveItem**(`data`?): [`DataforseoLabsSubdomainsLiveItem`](DataforseoLabsSubdomainsLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsSubdomainsLiveItem`](../interfaces/IDataforseoLabsSubdomainsLiveItem.md)

#### Returns

[`DataforseoLabsSubdomainsLiveItem`](DataforseoLabsSubdomainsLiveItem.md)

#### Source

main.ts:93288

## Properties

### metrics?

> **`optional`** **metrics**: `Object`

ranking data relevant to subdomain

#### Index signature

 \[`key`: `string`\]: [`MetricsInfo`](MetricsInfo.md)

#### Implementation of

[`IDataforseoLabsSubdomainsLiveItem`](../interfaces/IDataforseoLabsSubdomainsLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsSubdomainsLiveItem.md#metrics)

#### Source

main.ts:93284

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsSubdomainsLiveItem`](../interfaces/IDataforseoLabsSubdomainsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsSubdomainsLiveItem.md#se_type)

#### Source

main.ts:93280

***

### subdomain?

> **`optional`** **subdomain**: `string`

returned subdomain

#### Implementation of

[`IDataforseoLabsSubdomainsLiveItem`](../interfaces/IDataforseoLabsSubdomainsLiveItem.md).[`subdomain`](../interfaces/IDataforseoLabsSubdomainsLiveItem.md#subdomain)

#### Source

main.ts:93282

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:93297

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:93322

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsSubdomainsLiveItem`](DataforseoLabsSubdomainsLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsSubdomainsLiveItem`](DataforseoLabsSubdomainsLiveItem.md)

#### Source

main.ts:93315
