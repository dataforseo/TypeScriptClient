[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsSubdomainsLiveItem

# Class: DataforseoLabsSubdomainsLiveItem

## Implements

- [`IDataforseoLabsSubdomainsLiveItem`](../interfaces/IDataforseoLabsSubdomainsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsSubdomainsLiveItem()

> **new DataforseoLabsSubdomainsLiveItem**(`data`?): [`DataforseoLabsSubdomainsLiveItem`](DataforseoLabsSubdomainsLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsSubdomainsLiveItem`](../interfaces/IDataforseoLabsSubdomainsLiveItem.md)

#### Returns

[`DataforseoLabsSubdomainsLiveItem`](DataforseoLabsSubdomainsLiveItem.md)

#### Defined in

main.ts:95697

## Properties

### metrics?

> `optional` **metrics**: `object`

ranking data relevant to subdomain

#### Index Signature

 \[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsSubdomainsLiveItem`](../interfaces/IDataforseoLabsSubdomainsLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsSubdomainsLiveItem.md#metrics)

#### Defined in

main.ts:95693

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsSubdomainsLiveItem`](../interfaces/IDataforseoLabsSubdomainsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsSubdomainsLiveItem.md#se_type)

#### Defined in

main.ts:95689

***

### subdomain?

> `optional` **subdomain**: `string`

returned subdomain

#### Implementation of

[`IDataforseoLabsSubdomainsLiveItem`](../interfaces/IDataforseoLabsSubdomainsLiveItem.md).[`subdomain`](../interfaces/IDataforseoLabsSubdomainsLiveItem.md#subdomain)

#### Defined in

main.ts:95691

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:95706

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:95731

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsSubdomainsLiveItem`](DataforseoLabsSubdomainsLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsSubdomainsLiveItem`](DataforseoLabsSubdomainsLiveItem.md)

#### Defined in

main.ts:95724
