**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsAmazonBulkSearchVolumeLiveItem

# Class: DataforseoLabsAmazonBulkSearchVolumeLiveItem

## Implements

- [`IDataforseoLabsAmazonBulkSearchVolumeLiveItem`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAmazonBulkSearchVolumeLiveItem(data)

> **new DataforseoLabsAmazonBulkSearchVolumeLiveItem**(`data`?): [`DataforseoLabsAmazonBulkSearchVolumeLiveItem`](DataforseoLabsAmazonBulkSearchVolumeLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsAmazonBulkSearchVolumeLiveItem`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveItem.md)

#### Returns

[`DataforseoLabsAmazonBulkSearchVolumeLiveItem`](DataforseoLabsAmazonBulkSearchVolumeLiveItem.md)

#### Source

main.ts:102080

## Properties

### keyword?

> **`optional`** **keyword**: `string`

keyword in a POST array

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveItem`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveItem.md).[`keyword`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveItem.md#keyword)

#### Source

main.ts:102073

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveItem`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveItem.md#se_type)

#### Source

main.ts:102071

***

### search\_volume?

> **`optional`** **search\_volume**: `number`

average monthly search volume rate
represents the (approximate) number of searches for the returned keyword on Amazon

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveItem`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveItem.md).[`search_volume`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveItem.md#search_volume)

#### Source

main.ts:102076

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:102089

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:102108

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsAmazonBulkSearchVolumeLiveItem`](DataforseoLabsAmazonBulkSearchVolumeLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsAmazonBulkSearchVolumeLiveItem`](DataforseoLabsAmazonBulkSearchVolumeLiveItem.md)

#### Source

main.ts:102101
